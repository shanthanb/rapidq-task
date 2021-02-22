var barChartData = {
    labels: [20,25,30,35,40,45,50,55,60,65],
    datasets: [{
        label: 'Employer: K 73,500',
        backgroundColor: "rgb(64, 66, 199)",
        data:[20,25,35,40,45,55,65,75,90,95]
    }, {
        label: 'Employer: K 52,500',
        backgroundColor: "rgb(128, 156, 233)",
        data:[20,25,35,40,45,55,65,75,90,95]
    }, {
        label: 'Employer: K 244,313',
        backgroundColor: "rgb(169, 187, 236)",
        data:[35,40,60,65,65,80,85,95,110,140]
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
                        stepSize: '100',
                        max: 300
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
