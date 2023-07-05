function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) return e = document.getElementById(e).getAttribute("data-colors"), (e = JSON.parse(e)).map(function(e) {
        var t = e.replace(" ", "");
        return -1 === t.indexOf(",") ? getComputedStyle(document.documentElement).getPropertyValue(t) || t : 2 == (e = e.split(",")).length ? "rgba(" + getComputedStyle(document.documentElement).getPropertyValue(e[0]) + "," + e[1] + ")" : t
    })
}
var areachartbitcoinColors = getChartColorsArray("results_sparkline_charts");
areachartbitcoinColors && (options = {
    series: [{
        name: "Results",
        data: [0, 36, 110, 95, 130]
    }],
    chart: {
        width: 140,
        type: "area",
        sparkline: {
            enabled: !0
        },
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: 1.5
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .45,
            opacityTo: .05,
            stops: [50, 100, 100, 100]
        }
    },
    colors: areachartbitcoinColors
}, (chart = new ApexCharts(document.querySelector("#results_sparkline_charts"), options)).render()), (areachartbitcoinColors = getChartColorsArray("results_sparkline_charts2")) && (options = {
    series: [{
        name: "Results",
        data: [0, 98, 85, 90, 67]
    }],
    chart: {
        width: 140,
        type: "area",
        sparkline: {
            enabled: !0
        },
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: 1.5
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .45,
            opacityTo: .05,
            stops: [50, 100, 100, 100]
        }
    },
    colors: areachartbitcoinColors
}, (chart = new ApexCharts(document.querySelector("#results_sparkline_charts2"), options)).render()), (areachartbitcoinColors = getChartColorsArray("results_sparkline_charts3")) && (options = {
    series: [{
        name: "Results",
        data: [0, 110, 95, 75, 120]
    }],
    chart: {
        width: 140,
        type: "area",
        sparkline: {
            enabled: !0
        },
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: 1.5
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .45,
            opacityTo: .05,
            stops: [50, 100, 100, 100]
        }
    },
    colors: areachartbitcoinColors
}, (chart = new ApexCharts(document.querySelector("#results_sparkline_charts3"), options)).render());
(areachartbitcoinColors = getChartColorsArray("results_sparkline_charts4")) && (options = {
    series: [{
        name: "Results",
        data: [0, 68, 35, 90, 99]
    }],
    chart: {
        width: 140,
        type: "area",
        sparkline: {
            enabled: !0
        },
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: 1.5
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .45,
            opacityTo: .05,
            stops: [50, 100, 100, 100]
        }
    },
    colors: areachartbitcoinColors
}, (chart = new ApexCharts(document.querySelector("#results_sparkline_charts4"), options)).render());
var options, chart, chartTreemapDistributedColors = getChartColorsArray("distributed_treemap"),
    dountchartUserDeviceColors = (chartTreemapDistributedColors && (options = {
        series: [{
            data: [{
                x: "USA",
                y: 321
            }, {
                x: "Russia",
                y: 165
            }, {
                x: "India",
                y: 184
            }, {
                x: "China",
                y: 98
            }, {
                x: "Canada",
                y: 84
            }, {
                x: "Brazil",
                y: 31
            }, {
                x: "UK",
                y: 70
            }, {
                x: "Australia",
                y: 30
            }, {
                x: "Germany",
                y: 44
            }, {
                x: "Italy",
                y: 68
            }, {
                x: "Israel",
                y: 28
            }, {
                x: "Indonesia",
                y: 19
            }, {
                x: "Bangladesh",
                y: 29
            }]
        }],
        legend: {
            show: !1
        },
        chart: {
            height: 350,
            type: "treemap",
            toolbar: {
                show: !1
            }
        },
        title: {
            text: "Visitors Location",
            align: "center",
            style: {
                fontWeight: 500
            }
        },
        colors: chartTreemapDistributedColors,
        plotOptions: {
            treemap: {
                distributed: !0,
                enableShades: !1
            }
        }
    }, (chart = new ApexCharts(document.querySelector("#distributed_treemap"), options)).render()), getChartColorsArray("user_device_pie_charts")),
    dealTypeChartsColors = (dountchartUserDeviceColors && (options = {
        series: [78.56, 105.02, 42.89],
        labels: ["Desktop", "Mobile", "Tablet"],
        chart: {
            type: "donut",
            height: 219
        },
        plotOptions: {
            pie: {
                size: 100,
                donut: {
                    size: "76%"
                }
            }
        },
        dataLabels: {
            enabled: !1
        },
        legend: {
            show: !1,
            position: "bottom",
            horizontalAlign: "center",
            offsetX: 0,
            offsetY: 0,
            markers: {
                width: 20,
                height: 6,
                radius: 2
            },
            itemMargin: {
                horizontal: 12,
                vertical: 0
            }
        },
        stroke: {
            width: 0
        },
        yaxis: {
            labels: {
                formatter: function(e) {
                    return e + "k Users"
                }
            },
            tickAmount: 4,
            min: 0
        },
        colors: dountchartUserDeviceColors
    }, (chart = new ApexCharts(document.querySelector("#user_device_pie_charts"), options)).render()), getChartColorsArray("deal-type-charts")),
    revenueExpensesChartsColors = (dealTypeChartsColors && (options = {
        series: [{
            name: "Following",
            data: [80, 50, 30, 40, 100, 20]
        }, {
            name: "Followers",
            data: [20, 30, 40, 80, 20, 80]
        }],
        chart: {
            height: 341,
            type: "radar",
            dropShadow: {
                enabled: !0,
                blur: 1,
                left: 1,
                top: 1
            },
            toolbar: {
                show: !1
            }
        },
        stroke: {
            width: 2
        },
        fill: {
            opacity: .2
        },
        legend: {
            show: !0,
            fontWeight: 500,
            offsetX: 0,
            offsetY: -8,
            markers: {
                width: 8,
                height: 8,
                radius: 6
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            }
        },
        markers: {
            size: 0
        },
        colors: dealTypeChartsColors,
        xaxis: {
            categories: ["2016", "2017", "2018", "2019", "2020", "2021"]
        }
    }, (chart = new ApexCharts(document.querySelector("#deal-type-charts"), options)).render()), getChartColorsArray("revenue-expenses-charts"));
revenueExpensesChartsColors && (options = {
    series: [{
        name: "Application Sent  ",
        data: [33, 28, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250]
    }, {
        name: " Interviews",
        data: [20, 26, 45, 32, 42, 53, 59, 70, 78, 97, 110, 125]
    }, {
        name: " Hired",
        data: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199]
    }, {
        name: " Rejected",
        data: [8, 13, 22, 27, 32, 34, 46, 59, 65, 97, 100, 110]
    }],
    chart: {
        height: 320,
        type: "area",
        toolbar: "false"
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: 2
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    colors: revenueExpensesChartsColors,
    fill: {
        opacity: .06,
        colors: revenueExpensesChartsColors,
        type: "solid"
    }
}, (chart = new ApexCharts(document.querySelector("#revenue-expenses-charts"), options)).render());