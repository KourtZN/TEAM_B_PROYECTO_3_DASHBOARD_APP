
//ARCHIVO DE JAVASCRIPT ENCARGADO DE REALIZAR LA PETICIÓN AL API
//
//PROYECTO 3 - EQUIPO B - DASHBOARD
//
//ESTA FUNCION RECIBE DOS VALORES :
//    1. LA MONEDA A CONSULTAR
//    2. EL PERIODO QUE SE QUIERE GRAFICAR (1 SEMANA, 1 MES O 1 AÑO)
//
//
import { crearChart } from './crearGrafica.js';  
export function enviarPeticion(moneda,periodo){

    let intervalo = '365'//EL INTERVALO ES UN VALOR QUE PIDE EL API PARA SABER SI QUIERES SABER LOS DATOS POR DÍA, POR HORA, POR MINUTO, ETC.

    //ESTOS IFs DECIDEN LOS VALORES QUE SE VAN A MANDAR EN LA PETICIÓN DEPENDIENDO DEL PERIODO QUE SE QUIERE CONSULTAR
    if(periodo === 'año'){
        intervalo = '365'
    }else if(periodo === 'mes'){
        intervalo = '30'
    }else {
        intervalo = '7'
    }
//Con esta linea se ensambla el endpoint con sus parámetros
const urlApi = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${moneda}&tsym=USD&limit=${intervalo}&toTs=-1&api_key=506abc177702f824c58b578cdb901db4aa861860e56ce8fa9b525a680364706f`
//EJECUTAMOS PETICIÓN AL API CON LOS DATOS QUE QUEREMOS
console.log(urlApi)
const datosFechas = fetch(urlApi);
datosFechas.then(response => response.json())
//OBTENIENDO LOS DATOS DEL API, AQUÍ COMENZAMOS A MANIPULARLOS PARA OBTENER SÓLAMENTE LA FECHA Y EL PRECIO PARA GRAFICARLOS
.then(preciosDias => {
    let fechas =  [] //ARREGLO PARA DEPOSITAR LAS FECHAS
    let precios = [] //ARREGLO PARA DEPOSITAR LOS PRECIOS
    //AQUI RECORREMOS EL ARREGLO QUE VIENE DEL API PARA SACAR LOS DATOS Y DEPOSITARLOS EN LOS ARREGLOS FECHAS Y PRECIOS
   preciosDias.Data.Data.forEach(dia => {
        fechas.push(
            new Date(dia.time * 1000).toLocaleString().split(' ')[0]
        )
        precios.push(+dia.open)
    })
    console.log(fechas) //COMPROBAMOS QUE SE LLENÓ CORRECTAMENTE LOS DOS ARREGLOS
    console.log(precios)
    const titulo = `Precios de ${moneda} por ${periodo} al día de hoy, en USD` // armar titulo de la gráfica
    let precio = document.getElementById('precio')
    precio.innerHTML = `$${(precios[precios.length - 1]).toFixed(2)}`
    crearChart(fechas,precios,titulo) //MANDAR A CONSTRUIR EL CHART ENVIANDOLE LOS DATOS QUE UTILIZA PARA CREAR LA GRÁFICA
    //console.log(preciosDias)
    
})
.catch(error => console.log('error', error)); // SI HAY UN ERROR QUE LO MANDE A LA CONSOLA

}
//FINALMENTE EXPORTAMOS LA FUNCION PORQUE EL PROYECTO PIDE EL USO DE MODULARIZACIÓN CON IMPORT Y EXPORT
