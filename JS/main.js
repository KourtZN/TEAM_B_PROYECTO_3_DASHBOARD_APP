//importar los otros archivos de JS
import { enviarPeticion } from './peticiones.js'; 
//variables para mandar a llamar las funciones de api y gráfica
//los valores están inicializados para que se genere una gráfica desde que carga la página
let periodo = 'año';
let moneda = 'bitcoin';
//botones del DOM 
let semanal = document.getElementById('semanal')
let mensual = document.getElementById('mensual')
let anual = document.getElementById('anual')
let descripcion = document.getElementById('descripcion')
let tituloMoneda = document.getElementById('monedaTitulo')

let litecoin = document.getElementById('litecoin')
litecoin.addEventListener('click', ()=> {
    moneda = 'litecoin'
    tituloMoneda.innerHTML = moneda
    descripcion.innerHTML = 'Una de las altcoins más reconocidas en el criptomundo es Litecoin. Esta criptomoneda nació en octubre de 2011, como una alternativa a Bitcoin. De hecho, Litecoin es un fork del software Bitcoin Core, con el objetivo de mejorar Bitcoin. Su creador Charlie Lee es el ideólogo y la figura más reconocida de este proyecto. Lee dejó su trabajo en Google para dedicarse íntegramente al desarrollo de LTC y para conseguir sus objetivos se asoció con Xinxi Wang y Franklyn Richards.'
    enviarPeticion(moneda,periodo) 
})

//Listeners de los botones de periodos
semanal.addEventListener('click', () => {
    periodo = 'semana'
    enviarPeticion(moneda,periodo)
})
mensual.addEventListener('click', () => {
    periodo = 'mes'
    enviarPeticion(moneda,periodo)
})
anual.addEventListener('click', () => {
    periodo = 'año'
    enviarPeticion(moneda,periodo)
})

/*
Aquí se manda llamar la petición y la generación de gráfica
El primer valor es el nombre de la criptomoneda
el segundo valor es el periodo a graficar, recibe estos valores('año','mes','semana')
*/



 enviarPeticion(moneda,periodo)
