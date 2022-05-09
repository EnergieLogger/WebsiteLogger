var options = {
    series: [],
    chart: {
        id: 'realtime',
        height: 350,
        type: 'area',
        foreColor: '#ffffff',
        animations: {
            enabled: true,
            easing: 'easeinout',
            dynamicAnimation: {
                enabled: true,
                speed: 500
            }
        },
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        colors: ['#F44336']
    },
    noData: {
        text: 'Aan het laden...'
    },
    title: {
        text: 'Spanning',
        align: 'left'
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: "datetime",
        labels: {
            datetimeUTC: true
        }
    },
    colors: ['#0FC53D'],
    legend: {
        show: true
    },
    theme: {
        mode: 'dark'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    }
};

var options2 = {
    series: [],
    chart: {
        id: 'realtime',
        height: 350,
        type: 'area',
        foreColor: '#ffffff',
        animations: {
            enabled: true,
            easing: 'easeinout',
            dynamicAnimation: {
                enabled: true,
                speed: 500
            }
        },
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        colors: ['#F44336']
    },
    noData: {
        text: 'Aan het laden...'
    },
    title: {
        text: 'Stroom',
        align: 'left'
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: "datetime",
        labels: {
            datetimeUTC: true
        }
    },
    colors: ['#0FC53D'],
    legend: {
        show: true
    },
    theme: {
        mode: 'dark'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

(async () => {
    let jsonData = await getData();
    let Topwaarde_spanning = []
    for (var i = 0; i < jsonData["Data"].length; i++) {
        Topwaarde_spanning.push({ "y": jsonData["Data"][i]["Topwaarde werkelijk"], "x": jsonData["Data"][i]["Tijd"] * 1000 })
    }
    chart.updateSeries([{
        name: 'Topwaarde werkelijk',
        data: Topwaarde_spanning
    }])

    async function getData() {
        return new Promise(resolve => {
            axios({ method: 'GET', url: "/assets/json_data.json" }).then(async function (response) {
                try {
                    resolve(response.data)
                } catch (e) {
                    console.log(response.data)
                    resolve({ "Data": [] })
                }
            })
        })
    }
})()




(async () => {
    let jsonData = await getData();
    let Topwaarde_spanning = []
    for (var i = 0; i < jsonData["Data"].length; i++) {
        Topwaarde_spanning.push({ "y": jsonData["Data"][i]["Stroom"], "x": jsonData["Data"][i]["Tijd"] * 1000 })
    }
    chart.updateSeries([{
        name: 'Stroom',
        data: Stroom
    }])

    async function getData() {
        return new Promise(resolve => {
            axios({ method: 'GET', url: "/assets/json_data.json" }).then(async function (response) {
                try {
                    resolve(response.data)
                } catch (e) {
                    console.log(response.data)
                    resolve({ "Data": [] })
                }
            })
        })
    }
})()