document.addEventListener("DOMContentLoaded", function() {

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [2016,2017,2018,2019,2020,2021],
            datasets: [{
                label: 'İstihdama göre hızlı büyüyen girişimler',
                data: [14.0,13.6,12.9,12.7,12.1,12.4],
                backgroundColor: '#004C99',
            },

            {
                label: 'Ciroya göre hızlı büyüyen girişimler',
                data: [19.3,20.8,19.3,18.3,14.3,17.6],
                backgroundColor: '#CC0000',
            },

            {
                label: 'İstihdama göre ceylanlar',
                data: [2.3,2.3,2.3,2.1,2.0,2.2],
                backgroundColor: '#006600',
            },

            {
                label: 'Ciroya göre ceylanlar',
                data: [3.0,3.1,3.0,2.7,2.2,2.6],
                backgroundColor: '#660066',
            }]
        },

    });

    var ctx2 = document.getElementById('myChart2');
    var myChart2 = new Chart(ctx2, {
        type: 'pie',

        data: {
            labels: ["1990 ve öncesi","1991-1995","1996-2000","2001-2005","2006-2010","2011-2015","2016 ve sonrası","Bilinmeyen"],
            datasets: [{
                data: [5.6,5.5,8.8,9.2,12.3,17.0,41.6],
                backgroundColor: ["#004C99","#009999","#CC0000","#B52BF0","#CCCC00","#EBC7B8","#009900","#FF99CC"],
            }],
        },
        options: {
            title: {
                display: true,
                text: 'Girişim',
                fontColor: 'blue'
        }
    },

    });

    var ctx3 = document.getElementById('myChart3');
    var myChart3 = new Chart(ctx3, {
        type: 'pie',
        data: {
            labekls: ["1990 ve öncesi","1991-1995","1996-2000","2001-2005","2006-2010","2011-2015","2016 ve sonrası","Bilinmeyen"],
            datasets: [{
                data: [9.3,8.4,13.1,10.4,13.8,17.3,27.7],
                backgroundColor: ["#004C99","#009999","#CC0000","#B52BF0","#CCCC00","#EBC7B8","#009900","#FF99CC"],
            }],
        },
        options: {
            title: {
                display: true,
                text: 'İstihdam',
                fontColor: 'blue'
        }
      },
    });

    var ctx4 = document.getElementById('myChart4');
    var myChart4 = new Chart(ctx4, {
        type: 'pie',
        data: {
            // labels: ["1990 ve öncesi","1991-1995","1996-2000","2001-2005","2006-2010","2011-2015","2016 ve sonrası","Bilinmeyen"],
            datasets: [{
                data: [15.2,10.4,14.3,10.2,13.3,16.0,20.5],
                backgroundColor: ["#004C99","#009999","#CC0000","#B52BF0","#CCCC00","#EBC7B8","#009900","#FF99CC"],
            }],
        },
        options: {
            title: {
                display: true,
                text: 'Ciro',
                fontColor: 'blue'
        }
      },
    }); 

    var ctx5 = document.getElementById('myChart5');
    var myChart5 = new Chart(ctx5, {
        type: 'pie',
        data: {
            // labels: ["1990 ve öncesi","1991-1995","1996-2000","2001-2005","2006-2010","2011-2015","2016 ve sonrası","Bilinmeyen"],
            datasets: [{
                data: [18.0,14.4,16.3,9.5,10.9,16.9,14.0],
                backgroundColor: ["#004C99","#009999","#CC0000","#B52BF0","#CCCC00","#EBC7B8","#009900","#FF99CC"],
            }],
        },
        options: {
            title: {
                display: true,
                text: 'İhracat',
                fontColor: 'blue'
        }
      },
    });

    var ctx6 = document.getElementById('myChart6');
    var myChart6 = new Chart(ctx6, {
        type: 'pie',
        data: {
            // labels: ["1990 ve öncesi","1991-1995","1996-2000","2001-2005","2006-2010","2011-2015","2016 ve sonrası","Bilinmeyen"],
            datasets: [{
                data: [33.1,11.6,15.8,7.5,12.3,10.6,9.0],
                backgroundColor: ["#004C99","#009999","#CC0000","#B52BF0","#CCCC00","#EBC7B8","#009900","#FF99CC"],
            }],
        },
        options: {
            title: {
                display: true,
                text: 'İthalat',
                fontColor: 'blue'
        }
      },
    });

    var ctx8 = document.getElementById('myChart8');
    var myChart8 = new Chart(ctx8, {
        type: 'line',
        data: {
            labels: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
            datasets: [{
                label: 'Girişimlerin doğum oranı(%),2012-2021',    
                data: [14.3,14.0,13.7,13.4,13.0,13.5,13.2,12.9,14.7,16.0],
                backgroundColor: "blue",
                fill: false,
            }],
        },

    });

    var ctx9 = document.getElementById('myChart9');
    var myChart9 = new Chart(ctx9, {
        type: 'line',
        data: {
            labels: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
            datasets: [{
                label: 'Doğan girişimlerin istihdamdaki payı(%),2012-2021',
                data: [5.8,5.7,5.6,5.8,5.3,5.3,5.4,4.2,5.0,5.6],
                backgroundColor: "green",
                fill: false,
            }],
        },

    });

    // var ctx3 = document.getElementById('myChart3');
    // var myChart3 = new Chart(ctx3, {
    //     type: 'bar',
    //     data: {
    //         labels: [1,2,3,4,5],
    //         datasets: [{
    //             label: ' #of Votes',
    //             data: [6,7,8,9,6]
    //         }]
    //     },

    // });

    // var ctx4 = document.getElementById('myChart4');
    // var myChart4 = new Chart(ctx4, {
    //     type: 'bar',
    //     data: {
    //         labels: [1,2,3,4,5],
    //         datasets: [{
    //             label: ' #of Votes',
    //             data: [6,7,8,9,6]
    //         }]
    //     },

    // });

})