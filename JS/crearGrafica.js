
export function crearChart(nombres,precios){
    var ctx = document.getElementById('myChart');
    
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: nombres,
          datasets: [{
              label: 'Costo en USD',
              pointRadius: 0,
              fill: {
                  target:'origin',
                  above: 'rgba(0, 0, 255,0.2)'
              },
              data: precios,
              backgroundColor: [
                  'rgba(0, 0, 255, 1)'
              ],
              borderColor: [
                  'rgba(0, 0, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true, 
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    }); 
    }