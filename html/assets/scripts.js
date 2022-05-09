var options = {
  chart: {
      height: 350,
      type: 'bar',
  },
  dataLabels: {
      enabled: false
  },
  series: [],
  title: {
      text: 'Ajax Example',
  },
  noData: {
    text: 'Loading...'
  }
}

var chart = new ApexCharts(
  document.querySelector("#chart"),
  options
);

var chart2 = new ApexCharts(
  document.querySelector("#chart2"),
  options
);
chart.render();
chart2.render();