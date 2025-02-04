document.addEventListener('DOMContentLoaded', function() {
    Chart.register(ChartDataLabels);

    // Dados para o gráfico de colunas
    const columnData = {
        labels: ['BFF MOBILE', 'BFF MOBILE AILOS', 'BFF MOBILE AILOS+', 'BFF MOBILE ORBITA', 'BFF MOBILE UNICRED', 'BFF MOBILE Kital'],
        datasets: [{
            label: 'Automatizado',
            data: [76, 29, 5, 0, 5, 0],
            backgroundColor: 'rgba(76, 175, 80, 0.6)',  // Cor verde suave
            borderColor: 'rgba(76, 175, 80, 1)',  // Cor verde
            borderWidth: 1
        }, {
            label: 'Não Automatizado',
            data: [24, 71, 95, 100, 95, 100],
            backgroundColor: 'rgba(33, 150, 243, 0.6)',  // Cor azul suave
            borderColor: 'rgba(33, 150, 243, 1)',  // Cor azul
            borderWidth: 1
        }]
    };

    // Configuração do gráfico de colunas
    const columnConfig = {
        type: 'bar',
        data: columnData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: { color: 'white' }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: 'white' }
                }
            },
            plugins: {
                legend: {
                    position: 'top', // Move a legenda para cima
                    labels: { color: 'white' }
                },
                datalabels: {
                    anchor: 'center',
                    align: 'center',
                    color: 'white',
                    font: { weight: 'bold', size: 14 },
                    formatter: (value) => `${value}%`
                }
            }
        }
    };

    // Renderizar gráfico de colunas
    const columnChart = new Chart(
        document.getElementById('columnChart'),
        columnConfig
    );

    // Dados para o gráfico de pizza
    const pieData = {
        labels: ['Endpoints Automatizados', 'Endpoints Não Automatizados'],
        datasets: [{
            label: 'Percentual',
            data: [46, 54],
            backgroundColor: [
                'rgba(76, 175, 80, 0.6)',  // Cor verde suave
                'rgba(33, 150, 243, 0.6)'   // Cor azul suave
            ],
            borderColor: [
                'rgba(76, 175, 80, 1)',  // Cor verde
                'rgba(33, 150, 243, 1)'   // Cor azul
            ],
            borderWidth: 1
        }]
    };

    // Configuração do gráfico de pizza
    const pieConfig = {
        type: 'pie',
        data: pieData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top', // Move a legenda para cima
                    labels: { color: 'white' }
                },
                datalabels: {
                    color: 'white',
                    font: { weight: 'bold', size: 16 },
                    formatter: (value) => `${value}%`
                }
            }
        }
    };

    // Renderizar gráfico de pizza
    const pieChart = new Chart(
        document.getElementById('pieChart'),
        pieConfig
    );
});
