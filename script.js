var barChartData = {
    labels: [20,25,30,35,40,45,50,55,60,65],
    datasets: [{
        label: 'Employer: K 73,500',
        backgroundColor: "rgb(64, 66, 199)",
        data:[5,9,13,19,23,28,35,39,44,48]
    }, {
        label: 'Employer: K 52,500',
        backgroundColor: "rgb(128, 156, 233)",
        data:[15,19,23,29,33,38,45,49,54,58]
    }, {
        label: 'Employer: K 244,313',
        backgroundColor: "rgb(169, 187, 236)",
        data:[25,29,33,39,43,48,55,59,64,69]
    }]

};
window.onload = function() {
    var ctx = document.querySelector('#myChart').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'Contribution Overtime',
                fontSize: 14
            },
            tooltips: {
                mode: "index",
                intersect: false
            },
            responsive: false,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        min: 0,
                        stepSize: '50',
                    }
                }]
            },
            legend:{
                display:true,
                position: "top",
                align: "center",
                fullWidth: false,
                labels:{
                    fontSize: 12,
                    boxWidth: 10,
                    padding: 10,
                }
            }
        }
    });
};
