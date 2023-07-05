function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) return e = document.getElementById(e).getAttribute("data-colors"), (e = JSON.parse(e)).map(function(e) {
        var t = e.replace(" ", "");
        return -1 === t.indexOf(",") ? getComputedStyle(document.documentElement).getPropertyValue(t) || t : 2 == (e = e.split(",")).length ? "rgba(" + getComputedStyle(document.documentElement).getPropertyValue(e[0]) + "," + e[1] + ")" : t
    })
}
var options, chart, chartTimelineBasicColors = getChartColorsArray("basic_timeline"),
    chartTimelineColors = (chartTimelineBasicColors && (options = {
        series: [{
            data: [{
                x: "Code",
                y: [new Date("2019-03-02").getTime(), new Date("2019-03-04").getTime()]
            }, {
                x: "Test",
                y: [new Date("2019-03-04").getTime(), new Date("2019-03-08").getTime()]
            }, {
                x: "Validation",
                y: [new Date("2019-03-08").getTime(), new Date("2019-03-12").getTime()]
            }, {
                x: "Deployment",
                y: [new Date("2019-03-12").getTime(), new Date("2019-03-18").getTime()]
            }]
        }],
        chart: {
            height: 350,
            type: "rangeBar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !0
            }
        },
        xaxis: {
            type: "datetime"
        },
        colors: chartTimelineBasicColors
    }, (chart = new ApexCharts(document.querySelector("#basic_timeline"), options)).render()), getChartColorsArray("color_timeline")),
    chartTimelineMultiSeriesColors = (chartTimelineColors && (options = {
        series: [{
            data: [{
                x: "Analysis",
                y: [new Date("2019-02-27").getTime(), new Date("2019-03-04").getTime()],
                fillColor: chartTimelineColors[0]
            }, {
                x: "Design",
                y: [new Date("2019-03-04").getTime(), new Date("2019-03-08").getTime()],
                fillColor: chartTimelineColors[1]
            }, {
                x: "Coding",
                y: [new Date("2019-03-07").getTime(), new Date("2019-03-10").getTime()],
                fillColor: chartTimelineColors[2]
            }, {
                x: "Testing",
                y: [new Date("2019-03-08").getTime(), new Date("2019-03-12").getTime()],
                fillColor: chartTimelineColors[3]
            }, {
                x: "Deployment",
                y: [new Date("2019-03-12").getTime(), new Date("2019-03-17").getTime()],
                fillColor: chartTimelineColors[4]
            }]
        }],
        chart: {
            height: 350,
            type: "rangeBar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !0,
                distributed: !0,
                dataLabels: {
                    hideOverflowingLabels: !1
                }
            }
        },
        dataLabels: {
            enabled: !0,
            formatter: function(e, t) {
                var t = t.w.globals.labels[t.dataPointIndex],
                    a = moment(e[0]),
                    e = moment(e[1]).diff(a, "days");
                return t + ": " + e + (1 < e ? " days" : " day")
            }
        },
        xaxis: {
            type: "datetime"
        },
        yaxis: {
            show: !0
        }
    }, (chart = new ApexCharts(document.querySelector("#color_timeline"), options)).render()), getChartColorsArray("multi_series")),
    chartTimelineAdvancedColors = (chartTimelineMultiSeriesColors && (options = {
        series: [{
            name: "Bob",
            data: [{
                x: "Design",
                y: [new Date("2019-03-05").getTime(), new Date("2019-03-08").getTime()]
            }, {
                x: "Code",
                y: [new Date("2019-03-08").getTime(), new Date("2019-03-11").getTime()]
            }, {
                x: "Test",
                y: [new Date("2019-03-11").getTime(), new Date("2019-03-16").getTime()]
            }]
        }, {
            name: "Joe",
            data: [{
                x: "Design",
                y: [new Date("2019-03-02").getTime(), new Date("2019-03-05").getTime()]
            }, {
                x: "Code",
                y: [new Date("2019-03-06").getTime(), new Date("2019-03-09").getTime()]
            }, {
                x: "Test",
                y: [new Date("2019-03-10").getTime(), new Date("2019-03-19").getTime()]
            }]
        }],
        chart: {
            height: 350,
            type: "rangeBar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !0
            }
        },
        dataLabels: {
            enabled: !0,
            formatter: function(e) {
                var t = moment(e[0]),
                    e = moment(e[1]).diff(t, "days");
                return e + (1 < e ? " days" : " day")
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: .25,
                gradientToColors: void 0,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        xaxis: {
            type: "datetime"
        },
        legend: {
            position: "top"
        },
        colors: chartTimelineMultiSeriesColors
    }, (chart = new ApexCharts(document.querySelector("#multi_series"), options)).render()), getChartColorsArray("advanced_timeline")),
    chartMultiSeriesGroupColors = (chartTimelineAdvancedColors && (options = {
        series: [{
            name: "Bob",
            data: [{
                x: "Design",
                y: [new Date("2019-03-05").getTime(), new Date("2019-03-08").getTime()]
            }, {
                x: "Code",
                y: [new Date("2019-03-02").getTime(), new Date("2019-03-05").getTime()]
            }, {
                x: "Code",
                y: [new Date("2019-03-05").getTime(), new Date("2019-03-07").getTime()]
            }, {
                x: "Test",
                y: [new Date("2019-03-03").getTime(), new Date("2019-03-09").getTime()]
            }, {
                x: "Test",
                y: [new Date("2019-03-08").getTime(), new Date("2019-03-11").getTime()]
            }, {
                x: "Validation",
                y: [new Date("2019-03-11").getTime(), new Date("2019-03-16").getTime()]
            }, {
                x: "Design",
                y: [new Date("2019-03-01").getTime(), new Date("2019-03-03").getTime()]
            }]
        }, {
            name: "Joe",
            data: [{
                x: "Design",
                y: [new Date("2019-03-02").getTime(), new Date("2019-03-05").getTime()]
            }, {
                x: "Test",
                y: [new Date("2019-03-06").getTime(), new Date("2019-03-16").getTime()]
            }, {
                x: "Code",
                y: [new Date("2019-03-03").getTime(), new Date("2019-03-07").getTime()]
            }, {
                x: "Deployment",
                y: [new Date("2019-03-20").getTime(), new Date("2019-03-22").getTime()]
            }, {
                x: "Design",
                y: [new Date("2019-03-10").getTime(), new Date("2019-03-16").getTime()]
            }]
        }, {
            name: "Dan",
            data: [{
                x: "Code",
                y: [new Date("2019-03-10").getTime(), new Date("2019-03-17").getTime()]
            }, {
                x: "Validation",
                y: [new Date("2019-03-05").getTime(), new Date("2019-03-09").getTime()]
            }]
        }],
        chart: {
            height: 350,
            type: "rangeBar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !0,
                barHeight: "80%"
            }
        },
        xaxis: {
            type: "datetime"
        },
        stroke: {
            width: 1
        },
        fill: {
            type: "solid",
            opacity: .6
        },
        legend: {
            position: "top",
            horizontalAlign: "left"
        },
        colors: chartTimelineAdvancedColors
    }, (chart = new ApexCharts(document.querySelector("#advanced_timeline"), options)).render()), getChartColorsArray("multi_series_group"));
chartMultiSeriesGroupColors && (options = {
    series: [{
        name: "George Washington",
        data: [{
            x: "President",
            y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()]
        }]
    }, {
        name: "John Adams",
        data: [{
            x: "President",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
        }, {
            x: "Vice President",
            y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()]
        }]
    }, {
        name: "Thomas Jefferson",
        data: [{
            x: "President",
            y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()]
        }, {
            x: "Vice President",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
        }, {
            x: "Secretary of State",
            y: [new Date(1790, 2, 22).getTime(), new Date(1793, 11, 31).getTime()]
        }]
    }, {
        name: "Aaron Burr",
        data: [{
            x: "Vice President",
            y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()]
        }]
    }, {
        name: "George Clinton",
        data: [{
            x: "Vice President",
            y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()]
        }]
    }, {
        name: "John Jay",
        data: [{
            x: "Secretary of State",
            y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()]
        }]
    }, {
        name: "Edmund Randolph",
        data: [{
            x: "Secretary of State",
            y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()]
        }]
    }, {
        name: "Timothy Pickering",
        data: [{
            x: "Secretary of State",
            y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()]
        }]
    }, {
        name: "Charles Lee",
        data: [{
            x: "Secretary of State",
            y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()]
        }]
    }, {
        name: "John Marshall",
        data: [{
            x: "Secretary of State",
            y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()]
        }]
    }],
    chart: {
        height: 350,
        type: "rangeBar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0,
            barHeight: "35%",
            rangeBarGroupRows: !0
        }
    },
    colors: chartMultiSeriesGroupColors,
    fill: {
        type: "solid"
    },
    xaxis: {
        type: "datetime"
    },
    legend: {
        position: "right"
    },
    tooltip: {
        custom: function(e) {
            var t = new Date(e.y1).getFullYear(),
                a = new Date(e.y2).getFullYear(),
                e = e.ctx.rangeBar.getTooltipValues(e);
            return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e.color + '">' + (e.seriesName || "") + '</span></div><div> <span class="category">' + e.ylabel + ' </span> <span class="value start-value">' + t + '</span> <span class="separator">-</span> <span class="value end-value">' + a + "</span></div></div>"
        }
    }
}, (chart = new ApexCharts(document.querySelector("#multi_series_group"), options)).render());