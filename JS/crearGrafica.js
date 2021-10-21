
//esta funcion crearChart recibe 2 valores
// 1. el arreglo de fechas que se obtuvo en la funcion de peticiones.js
// 2. el arreglo de precios que se obtuvo en petiones.js
let myChart;
export function crearChart(fechas,precios,titulo){
    //obtiene el id del elemento canvas del HTML
    var ctx = document.getElementById('myChart');
    //Construye el gráfico con todos los parámetros necesarios 
    //Las instrucciones de cómo usar cada parámetro está en la página de chart.js
    if(myChart){
        myChart.destroy();
    }
    
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: fechas, //aquí se utiliza el primer arreglo
          datasets: [{
              label: titulo,
              pointRadius: 0,
              fill: {
                  target:'origin',
                  above: 'rgba(0, 0, 255,0.2)'
              },
              data: precios, //aquí se utiliza el segundo arreglo
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