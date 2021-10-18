
//ARCHIVO DE JAVASCRIPT ENCARGADO DE REALIZAR LA PETICIÓN AL API
//
//PROYECTO 3 - EQUIPO B - DASHBOARD
//
//ESTA FUNCION RECIBE DOS VALORES :
//    1. LA MONEDA A CONSULTAR
//    2. EL PERIODO QUE SE QUIERE GRAFICAR (1 SEMANA, 1 MES O 1 AÑO)
//
//
import { crearChart } from '/JS/crearGrafica.js';  
export function enviarPeticion(moneda,periodo){

    let tiempo = 2592000000 //TIEMPO ES UNA VARIABLE QUE CONTIENE EL PERIODO EN FORMATO DE MILISEGUNDOS PORQUE ASÍ LO UTILIZA LA API
    let intervalo = 'd1'//EL INTERVALO ES UN VALOR QUE PIDE EL API PARA SABER SI QUIERES SABER LOS DATOS POR DÍA, POR HORA, POR MINUTO, ETC.

    //ESTOS IFs DECIDEN LOS VALORES QUE SE VAN A MANDAR EN LA PETICIÓN DEPENDIENDO DEL PERIODO QUE SE QUIERE CONSULTAR
    if(periodo === 'año'){
        intervalo = 'd1'
        tiempo = 31557600000
    }else if(periodo === 'mes'){
        intervalo = 'd1'
        tiempo = 2592000000
    }else {
        intervalo = 'h6'
        tiempo = 604800000
    }
let endDate = Date.now() // fecha de hoy en milisegundos
let startDate = Date.now() - tiempo // RESTAMOS EL PERIODO A LA FECHA DE HOY PARA OBTENER LA FECHA DE INICIO DE LA GRÁFICA Y SIEMPRE TENER DATOS ACTUALES

const urlApi = `https://api.coincap.io/v2/assets/${moneda}/history?interval=${intervalo}&start=${startDate}&end=${endDate}`

//EJECUTAMOS PETICIÓN AL API CON LOS DATOS QUE QUEREMOS
console.log(urlApi)
const datosFechas = fetch(urlApi);
datosFechas.then(response => response.json())
//OBTENIENDO LOS DATOS DEL API, AQUÍ COMENZAMOS A MANIPULARLOS PARA OBTENER SÓLAMENTE LA FECHA Y EL PRECIO PARA GRAFICARLOS
.then(preciosDias => {
    let fechas =  [] //ARREGLO PARA DEPOSITAR LAS FECHAS
    let precios = [] //ARREGLO PARA DEPOSITAR LOS PRECIOS
    //AQUI RECORREMOS EL ARREGLO QUE VIENE DEL API PARA SACAR LOS DATOS Y DEPOSITARLOS EN LOS ARREGLOS FECHAS Y PRECIOS
   preciosDias.data.forEach(dia => {
        fechas.push(new Date(Date.parse(dia.date)).toLocaleString())
        precios.push(+dia.priceUsd)
    })
    console.log(fechas) //COMPROBAMOS QUE SE LLENÓ CORRECTAMENTE LOS DOS ARREGLOS
    console.log(precios)
    crearChart(fechas,precios) //MANDAR A CONSTRUIR EL CHART ENVIANDOLE LOS DATOS QUE UTILIZA PARA CREAR LA GRÁFICA
    //console.log(preciosDias)
    
})
.catch(error => console.log('error', error)); // SI HAY UN ERROR QUE LO MANDE A LA CONSOLA

}
//FINALMENTE EXPORTAMOS LA FUNCION PORQUE EL PROYECTO PIDE EL USO DE MODULARIZACIÓN CON IMPORT Y EXPORT
//export enviarPeticion;