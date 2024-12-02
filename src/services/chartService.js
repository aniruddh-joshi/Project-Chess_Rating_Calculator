import Chart from 'chart.js/auto';

export class ChartService {
  static createRatingChart(player, containerId) {
    const ctx = document.getElementById(containerId).getContext('2d');
    
    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: player.ratingHistory.map(h => h.date),
        datasets: [{
          label: 'Rating Progress',
          data: player.ratingHistory.map(h => h.rating),
          borderColor: 'rgb(99, 102, 241)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `${player.name}'s Rating History`
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: Math.min(...player.ratingHistory.map(h => h.rating)) - 100,
            max: Math.max(...player.ratingHistory.map(h => h.rating)) + 100
          }
        }
      }
    });
  }
}