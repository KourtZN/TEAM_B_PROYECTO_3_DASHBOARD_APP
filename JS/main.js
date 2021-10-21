//importar los otros archivos de JS
import { enviarPeticion } from './peticiones.js'; 
//variables para mandar a llamar las funciones de api y gráfica
let periodo = 'año';
let moneda = 'bitcoin';
//botones del DOM 
let semanal = document.getElementById('semanal')
let mensual = document.getElementById('mensual')
let anual = document.getElementById('anual')
let descripcion = document.getElementById('descripcion')
//Listeners de los botones
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
