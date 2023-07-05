import { OneDArray, TColumn, TwoDArray } from './types';
import Base from './base';
import { Config, UserConfig } from './config';
import { px, width } from './util/width';
import { ShadowTable } from './view/table/shadow';
import {
  Component,
  ComponentChild,
  createRef,
  h,
  isValidElement,
  RefObject,
  render,
} from 'preact';
import { camelCase } from './util/string';
import { flatten } from './util/array';
import logger from './util/log';
import { PluginPosition } from './plugin';

class Header extends Base {
  private _columns: OneDArray<TColumn>;

  constructor() {
    super();

    this._columns = [];
  }

  get columns(): OneDArray<TColumn> {
    return this._columns;
  }

  set columns(columns) {
    this._columns = columns;
  }

  get visibleColumns(): OneDArray<TColumn> {
    return this._columns.filter((c) => !c.hidden);
  }

  /**
   * Tries to automatically adjust the width of columns based on:
   *    - Header cell content
   *    - Cell content of the first row
   *    - Cell content of the last row
   *
   * @param config
   */
  adjustWidth(config: Config): this {
    const container: Element = config.container;
    const tableRef: RefObject<Component> = config.tableRef;
    const tempRef: RefObject<HTMLDivElement> = config.tempRef;
    const autoWidth = config.tempRef || true;

    if (!container) {
      // we can't calculate the width because the container
      // is unknown at this stage
      return this;
    }

    // pixels
    const containerWidth = container.clientWidth;

    // let's create a shadow table with the first 10 rows of the data
    // and let the browser to render the table with table-layout: auto
    // no padding, margin or border to get the minimum space required
    // to render columns. One the table is rendered and widths are known,
    // we unmount the shadow table from the DOM and set the correct width
    const shadowTable = createRef();
    let widths = {};

    if (tableRef.current && autoWidth) {
      // render a ShadowTable with the first 10 rows
      const el = h(ShadowTable, {
        tableRef: tableRef,
      });
      el.ref = shadowTable;

      render(el, tempRef.current);

      widths = shadowTable.current.widths();
    }

    for (const column of flatten(Header.tabularFormat(this.columns))) {
      // because we don't want to set the width of parent THs
      if (column.columns && column.columns.length > 0) {
        continue;
      }

      if (!column.width && autoWidth) {
        // tries to find the corresponding cell
        // from the ShadowTable and set the correct width

        if (column.id in widths) {
          // because a column can be hidden, too
          column.width = px(widths[column.id]['width']);
          column.minWidth = px(widths[column.id]['minWidth']);
        }
      } else {
        // column width is already defined
        // sets the column with based on the width of its container
        column.width = px(width(column.width, containerWidth));
      }
    }

    if (tableRef.current && autoWidth) {
      // unmount the shadow table from temp
      render(null, tempRef.current);
    }

    return this;
  }

  private setSort(userConfig: UserConfig, columns?: OneDArray<TColumn>): void {
    const cols = columns || this.columns || [];

    for (const column of cols) {
      // sorting can only be enabled for columns without any children
      if (column.columns && column.columns.length > 0) {
        column.sort = {
          enabled: false,
        };
      }

      // implicit userConfig.sort flag
      if (column.sort === undefined && userConfig.sort) {
        column.sort = {
          enabled: true,
        };
      }

      // false, null, etc.
      if (!column.sort) {
        column.sort = {
          enabled: false,
        };
      } else if (typeof column.sort === 'object') {
        column.sort = {
          enabled: true,
          ...column.sort,
        };
      }

      if (column.columns) {
        this.setSort(userConfig, column.columns);
      }
    }
  }

  private setFixedHeader(
    userConfig: UserConfig,
    columns?: OneDArray<TColumn>,
  ): void {
    const cols = columns || this.columns || [];

    for (const column of cols) {
      if (column.fixedHeader === undefined) {
        column.fixedHeader = userConfig.fixedHeader;
      }

      if (column.columns) {
        this.setFixedHeader(userConfig, column.columns);
      }
    }
  }

  private setResizable(
    userConfig: UserConfig,
    columns?: OneDArray<TColumn>,
  ): void {
    const cols = columns || this.columns || [];

    for (const column of cols) {
      if (column.resizable === undefined) {
        column.resizable = userConfig.resizable;
      }

      if (column.columns) {
        this.setResizable(userConfig, column.columns);
      }
    }
  }

  private setID(columns?: OneDArray<TColumn>): void {
    const cols = columns || this.columns || [];

    for (const column of cols) {
      if (!column.id && typeof column.name === 'string') {
        // let's guess the column ID if it's undefined
        column.id = camelCase(column.name);
      }

      if (!column.id) {
        logger.error(
          `Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.`,
        );
      }

      // nested columns
      if (column.columns) {
        this.setID(column.columns);
      }
    }
  }

  private populatePlugins(
    userConfig: UserConfig,
    columns: OneDArray<TColumn>,
  ): void {
    // populate the cell columns
    for (const column of columns) {
      if (column.plugin !== undefined) {
        userConfig.plugin.add({
          id: column.id,
          props: {},
          ...column.plugin,
          position: PluginPosition.Cell,
        });
      }
    }
  }

  static fromColumns(
    columns: OneDArray<TColumn | string | ComponentChild>,
  ): Header {
    const header = new Header();

    for (const column of columns) {
      if (typeof column === 'string' || isValidElement(column)) {
        header.columns.push({
          name: column,
        });
      } else if (typeof column === 'object') {
        const typedColumn = column as TColumn;

        if (typedColumn.columns) {
          typedColumn.columns = Header.fromColumns(typedColumn.columns).columns;
        }

        // because the data for that cell is null
        // if we are trying to render a plugin
        if (typeof typedColumn.plugin === 'object') {
          if (typedColumn.data === undefined) {
            typedColumn.data = null;
          }
        }

        // TColumn type
        header.columns.push(column as TColumn);
      }
    }

    return header;
  }

  static fromUserConfig(userConfig: UserConfig): Header | null {
    const header = new Header();

    // TODO: this part needs some refactoring
    if (userConfig.from) {
      header.columns = Header.fromHTMLTable(userConfig.from).columns;
    } else if (userConfig.columns) {
      header.columns = Header.fromColumns(userConfig.columns).columns;
    } else if (
      userConfig.data &&
      typeof userConfig.data[0] === 'object' &&
      !(userConfig.data[0] instanceof Array)
    ) {
      // if data[0] is an object but not an Array
      // used for when a JSON payload is provided
      header.columns = Object.keys(userConfig.data[0]).map((name) => {
        return { name: name };
      });
    }

    if (header.columns.length) {
      header.setID();
      header.setSort(userConfig);
      header.setFixedHeader(userConfig);
      header.setResizable(userConfig);
      header.populatePlugins(userConfig, header.columns);
      return header;
    }

    return null;
  }

  static fromHTMLTable(element: HTMLElement): Header {
    const header = new Header();
    const thead = element.querySelector('thead');
    const ths = thead.querySelectorAll('th');

    for (const th of ths as any) {
      header.columns.push({
        name: th.innerHTML,
        width: th.width,
      });
    }

    return header;
  }

  /**
   * Converts the tree-like format of Header to a tabular format
   *
   * Example:
   *
   *    H1
   *      H1-H1
   *      H1-H2
   *    H2
   *      H2-H1
   *
   *    becomes:
   *      [
   *        [H1, H2],
   *        [H1-H1, H1-H2, H2-H1]
   *      ]
   *
   * @param columns
   */
  static tabularFormat(columns: OneDArray<TColumn>): TwoDArray<TColumn> {
    let result: TwoDArray<TColumn> = [];
    const cols = columns || [];
    let nextRow = [];

    if (cols && cols.length) {
      result.push(cols);

      for (const col of cols) {
        if (col.columns && col.columns.length) {
          nextRow = nextRow.concat(col.columns);
        }
      }

      if (nextRow.length) {
        result = result.concat(this.tabularFormat(nextRow));
      }
    }

    return result;
  }

  /**
   * Returns an array of leaf columns (last columns in the tree)
   *
   * @param columns
   */
  static leafColumns(columns: OneDArray<TColumn>): OneDArray<TColumn> {
    let result: OneDArray<TColumn> = [];
    const cols = columns || [];

    if (cols && cols.length) {
      for (const col of cols) {
        if (!col.columns || col.columns.length === 0) {
          result.push(col);
        }

        if (col.columns) {
          result = result.concat(this.leafColumns(col.columns));
        }
      }
    }

    return result;
  }

  /**
   * Returns the maximum depth of a column tree
   * @param column
   */
  static maximumDepth(column: TColumn): number {
    return this.tabularFormat([column]).length - 1;
  }
}

export default Header;
