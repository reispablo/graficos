document.addEventListener('DOMContentLoaded', function() {
    Chart.register(ChartDataLabels); 

    const columnData = {
        labels: ['BFF MOBILE', 'BFF MOBILE AILOS', 'BFF MOBILE AILOS+', 'BFF MOBILE ORBITA', 'BFF MOBILE UNICRED', 'BFF MOBILE Kital'],
        datasets: [
            {
                label: 'Automatizado',
                data: [76, 29, 5, 0, 5, 0],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, 
            {
                label: 'Não Automatizado',
                data: [24, 71, 95, 100, 95, 100],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    const columnConfig = {
        type: 'bar',
        data: columnData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: { color: 'white' }
                },
                datalabels: {
                    color: 'white',
                    anchor: 'end',
                    align: 'top',
                    formatter: (value) => value + '%'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: 'white' }
                },
                x: {
                    ticks: { color: 'white', padding: 10 } // Adiciona espaço entre o rótulo e os dados
                }
            }
        }
    };

    new Chart(document.getElementById('columnChart'), columnConfig);

    const pieData = {
        labels: ['Automatizado', 'Não Automatizado'],
        datasets: [{
            label: 'Percentual',
            data: [46, 54],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    };

    const pieConfig = {
        type: 'pie',
        data: pieData,
        options: {
            plugins: {
                legend: {
                    labels: { color: 'white' }
                },
                datalabels: {
                    color: 'white',
                    formatter: (value) => value + '%',
                    font: { weight: 'bold', size: 14 }
                }
            }
        }
    };

    new Chart(document.getElementById('pieChart'), pieConfig);
});
