function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) {
        var r = document.getElementById(e).getAttribute("data-colors");
        if (r) return (r = JSON.parse(r)).map(function(e) {
            var r = e.replace(" ", "");
            return -1 === r.indexOf(",") ? getComputedStyle(document.documentElement).getPropertyValue(r) || r : 2 == (e = e.split(",")).length ? "rgba(" + getComputedStyle(document.documentElement).getPropertyValue(e[0]) + "," + e[1] + ")" : r
        });
        console.warn("data-colors Attribute not found on:", e)
    }
}
var sparklineoptions1, sparklinechart1, sparklineoptions2, sparklinechart2, sparklineoptions3, sparklinechart3, sparklineoptions4, sparklinechart4, sparklineoptions5, sparklinechart5, sparklineoptions6, sparklinechart6, sparklineoptions7, sparklinechart7, sparklineoptions8, sparklinechart8, sellerlinecolor1 = getChartColorsArray("chart-seller1"),
    sellerlinecolor2 = (sellerlinecolor1 && (sparklineoptions1 = {
        series: [{
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
        }],
        chart: {
            type: "area",
            height: 50,
            sparkline: {
                enabled: !0
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: .05,
                stops: [20, 100, 100, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        colors: sellerlinecolor1,
        tooltip: {
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }, (sparklinechart1 = new ApexCharts(document.querySelector("#chart-seller1"), sparklineoptions1)).render()), getChartColorsArray("chart-seller2")),
    sellerlinecolor3 = (sellerlinecolor2 && (sparklineoptions2 = {
        series: [{
            data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89]
        }],
        chart: {
            type: "area",
            height: 50,
            sparkline: {
                enabled: !0
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: .05,
                stops: [20, 100, 100, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        colors: sellerlinecolor2,
        tooltip: {
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }, (sparklinechart2 = new ApexCharts(document.querySelector("#chart-seller2"), sparklineoptions2)).render()), getChartColorsArray("chart-seller3")),
    sellerlinecolor4 = (sellerlinecolor3 && (sparklineoptions3 = {
        series: [{
            data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64]
        }],
        chart: {
            type: "area",
            height: 50,
            sparkline: {
                enabled: !0
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: .05,
                stops: [20, 100, 100, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        colors: sellerlinecolor3,
        tooltip: {
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }, (sparklinechart3 = new ApexCharts(document.querySelector("#chart-seller3"), sparklineoptions3)).render()), getChartColorsArray("chart-seller4")),
    sellerlinecolor5 = (sellerlinecolor4 && (sparklineoptions4 = {
        series: [{
            data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50]
        }],
        chart: {
            type: "area",
            height: 50,
            sparkline: {
                enabled: !0
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: .05,
                stops: [20, 100, 100, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        colors: sellerlinecolor4,
        tooltip: {
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }, (sparklinechart4 = new ApexCharts(document.querySelector("#chart-seller4"), sparklineoptions4)).render()), getChartColorsArray("chart-seller5")),
    sellerlinecolor6 = (sellerlinecolor5 && (sparklineoptions5 = {
        series: [{
            data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16]
        }],
        chart: {
            type: "area",
            height: 50,
            sparkline: {
                enabled: !0
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: .05,
                stops: [20, 100, 100, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        colors: sellerlinecolor5,
        tooltip: {
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }, (sparklinechart5 = new ApexCharts(document.querySelector("#chart-seller5"), sparklineoptions5)).render()), getChartColorsArray("chart-seller6")),
    sellerlinecolor7 = (sellerlinecolor6 && (sparklineoptions6 = {
        series: [{
            data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49]
        }],
        chart: {
            type: "area",
            height: 50,
            sparkline: {
                enabled: !0
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: .05,
                stops: [20, 100, 100, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        colors: sellerlinecolor6,
        tooltip: {
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }, (sparklinechart6 = new ApexCharts(document.querySelector("#chart-seller6"), sparklineoptions6)).render()), getChartColorsArray("chart-seller7")),
    sellerlinecolor8 = (sellerlinecolor7 && (sparklineoptions7 = {
        series: [{
            data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35]
        }],
        chart: {
            type: "area",
            height: 50,
            sparkline: {
                enabled: !0
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: .05,
                stops: [20, 100, 100, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        colors: sellerlinecolor7,
        tooltip: {
            fixed: {
                enabled: !1
            },
            x: {
                show: !1
            },
            y: {
                title: {
                    formatter: function(e) {
                        return ""
                    }
                }
            },
            marker: {
                show: !1
            }
        }
    }, (sparklinechart7 = new ApexCharts(document.querySelector("#chart-seller7"), sparklineoptions7)).render()), getChartColorsArray("chart-seller8"));
sellerlinecolor8 && (sparklineoptions8 = {
    series: [{
        data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54]
    }],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: !0
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .45,
            opacityTo: .05,
            stops: [20, 100, 100, 100]
        }
    },
    stroke: {
        curve: "smooth",
        width: 2
    },
    colors: sellerlinecolor8,
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
}, (sparklinechart8 = new ApexCharts(document.querySelector("#chart-seller8"), sparklineoptions8)).render());