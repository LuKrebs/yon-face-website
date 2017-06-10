var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Março", "Abril", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: '# 2016',
            data: [1248, 1917, 3307, 1508, 2114, 1323,1248, 1917, 1507, 2408, 2114, 323],
            backgroundColor: [
                'rgba(255, 20, 15, 0.5)'
            ],
            borderColor: [
                'rgb(255, 20, 15)'
            ],
            borderWidth: 1
        },
        {
            label: '# 2017',
            data: [2253, 3102, 5302, 2791, 2107, 813,2253, 3102, 2302, 3091, 2107, 813],
            backgroundColor: [
                'rgba(255, 225, 78, 0.5)'
            ],
            borderColor: [
                'rgb(255, 225, 78)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'rgba(41, 26, 76, 1)',
                    fontSize: '14'
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'rgba(41, 26, 76, 1)',
                    fontSize: '14'
                }
            }]
        },
        tooltips: {
            mode: 'x',
            displayColors: false
        },
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'rgba(41, 26, 76, 1)'
          }
        },
        title: {
          display: true,
          position: 'top',
          fontColor: 'rgb(41, 26, 76)',
          fontSize: 16
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                bottom: 10
            }
        }
    }
});

var ctxTwo = document.getElementById("myChartTwo").getContext('2d');
var myChartTwo = new Chart(ctxTwo, {
    type: 'line',
    data: {
        labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
        datasets: [
        {
            label: '# Alegria',
            data: [13, 15, 12, 25, 40, 47, 39],
            backgroundColor: [
                'rgba(238, 252, 3, .31)'
            ],
            borderColor: [
                'rgb(238, 252, 3)'
            ],
            borderWidth: 1
        },
        {
            label: '# Surpresa',
            data: [25, 21, 20, 18, 10, 14, 17],
            backgroundColor: [
                'rgba(132, 109, 163, .8)'
            ],
            borderColor: [
                'rgb(132, 109, 163)'
            ],
            borderWidth: 1
        },
         {
            label: '# Raiva',
            data: [30, 27, 18, 7, 4, 5, 3],
            backgroundColor: [
                'rgba(255, 0, 0, .9)'
            ],
            borderColor: [
                'rgb(255, 0, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'rgba(41, 26, 76, 1)',
                    fontSize: '14'
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'rgba(41, 26, 76, 1)',
                    fontSize: '14'
                }
            }]
        },
        tooltips: {
            mode: 'x',
            displayColors: false
        },
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'rgba(41, 26, 76, 1)'
          }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                bottom: 15
            }
        }
    }
});

var ctxThree = document.getElementById("myChartThree").getContext('2d');
var myChartThree = new Chart(ctxThree, {
    type: 'line',
    data: {
        labels: ["08 Hrs", "09 Hrs", "10 Hrs", "11 Hrs", "12 Hrs", "13 Hrs", "14 Hrs", "15 Hrs", "16 Hrs", "17 Hrs", "18 Hrs"],
        datasets: [
        {
            label: '# Produto X',
            data: [10*2, 15*2, 20*2, 22*2, 28, 18*1.3, 8*1.3, 20*1.3, 10*1.3, 15*1.3, 20*1.3],
            backgroundColor: [
                'rgba(33, 3, 71,0.5)'
            ],
            borderColor: [
                'rgb(33, 3, 71)'
            ],
            borderWidth: 1
        },
        {
            label: '# Produto Y',
            data: [25, 44, 31, 18, 37, 47, 60, 63, 51, 68, 71],
            backgroundColor: [
                'rgba(142, 142, 144, 0.6)'
            ],
            borderColor: [
                'rgba(142, 142, 144, 1)'
            ],
            borderWidth: 1
        },
         {
            label: '# Produto Z',
            data: [13, 35, 24, 25, 18, 16, 33, 45, 7, 12, 3],
            backgroundColor: [
                'rgba(29, 155, 114, 0.5)'
            ],
            borderColor: [
                'rgb(29, 155, 114)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'rgba(41, 26, 76, 1)',
                    fontSize: '14'
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'rgba(41, 26, 76, 1)',
                    fontSize: '14'
                }
            }]
        },
        tooltips: {
            mode: 'x',
            displayColors: false
        },
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'rgba(41, 26, 76, 1)'
          }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                bottom: 10
            }
        }
    }
});