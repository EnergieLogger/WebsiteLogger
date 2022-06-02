

var PhiOptions = 
{
    chart: {
      height: 300,
      type: "radialBar",
      foreColor: '#ffffff',
    },
    series: [],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#bfbdbd',
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
            total: {
              show: true,
              label: "CosPhi",
              formatter: function () {
                return ''; // calculated total
              }
            }
      }}
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#f5052d","#5cff7c"],
        inverseColors: true,
        stops: [0, 100]
      }
    },
    noData: {
        text: 'Gegevens worden geladen dit duurt ongeveer 5 seconden!',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: '14px',
          fontFamily: undefined
        }
      },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };
  
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
        text: 'Gegevens worden geladen dit duurt ongeveer 5 seconden!'
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
        text: 'Gegevens worden geladen dit duurt ongeveer 5 seconden!'
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

var options3 = {
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
        text: 'Gegevens worden geladen dit duurt ongeveer 5 seconden!'
    },
    title: {
        text: 'Vermogen',
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

var options4 = {
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
        text: 'Gegevens worden geladen dit duurt ongeveer 5 seconden!'
    },
    title: {
        text: 'Verbruik',
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

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();

var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();

var CosphiChart = new ApexCharts(document.querySelector("#cosPhiChart"), PhiOptions);
CosphiChart.render();

async function getData() {
    return new Promise(resolve => {
        axios({ method: 'GET', url: "/assets/json_data.json"}).then(async function (response) {
            try {
                resolve(response.data)
            } catch (e) {
                console.log(response.data)
                resolve({ "Data": [] })
            }
        })
    })
}

(async () => {
    setInterval(async function(){
        let jsonData = await getData();
        let Topwaarde_spanning = []
        for (var i = 0; i < jsonData["Data"].length; i++) {
            Topwaarde_spanning.push({ "y": jsonData["Data"][i]["Effectief gemeten spanning"], "x": jsonData["Data"][i]["Tijd"] * 1000 })
        }
        chart.updateSeries([{
            name: 'Effectief gemeten spanning',
            data: Topwaarde_spanning
        }])
    }, 5000)

})();

(async () => {
    setInterval(async function(){
    let jsonData = await getData();
    let Stroom = []
    for (var i = 0; i < jsonData["Data"].length; i++) {
        Stroom.push({ "y": jsonData["Data"][i]["Stroom"], "x": jsonData["Data"][i]["Tijd"] * 1000 })
    }
    chart2.updateSeries([{
        name: 'Stroom',
        data: Stroom
    }])
}, 5000)

})();

(async () => {
    setInterval(async function(){
    let jsonData = await getData();
    let Vermogen = []
    for (var i = 0; i < jsonData["Data"].length; i++) {
        Vermogen.push({ "y": jsonData["Data"][i]["Vermogen"], "x": jsonData["Data"][i]["Tijd"] * 1000 })
    }
    chart3.updateSeries([{
        name: 'Vermogen',
        data: Vermogen
    }])
}, 5000)

})();

(async () => {
    setInterval(async function(){
    let jsonData = await getData();
    let Verbruik = []
    for (var i = 0; i < jsonData["Data"].length; i++) {
        Verbruik.push({ "y": jsonData["Data"][i]["Stroom"], "x": jsonData["Data"][i]["Tijd"] * 1000 })
    }
    chart4.updateSeries([{
        name: 'Verbruik',
        data: Verbruik
    }])
}, 5000)

})();

(async () => {
    setInterval(async function(){
    let jsonData = await getData();
    let CosPhi = []
    console.log(jsonData['Data']['CosPhi'])
    CosPhi.push(jsonData['Data'][jsonData['Data'].length-1]['CosPhi']*100)
    document.getElementById("cosPhiData").innerHTML=jsonData['Data'][jsonData['Data'].length-1]['CosPhi']
    CosphiChart.updateSeries(
      CosPhi
    )
}, 1000)

})();

console.log("test")
