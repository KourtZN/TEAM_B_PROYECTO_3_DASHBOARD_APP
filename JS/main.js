//importar los otros archivos de JS
import { enviarPeticion } from './peticiones.js'; 
//variables para mandar a llamar las funciones de api y gráfica
//los valores están inicializados para que se genere una gráfica desde que carga la página
let periodo = 'año';
let moneda = 'BTC';
//botones del DOM 
let semanal = document.getElementById('semanal')
let mensual = document.getElementById('mensual')
let anual = document.getElementById('anual')
let descripcion = document.getElementById('descripcion')
let tituloMoneda = document.getElementById('monedaTitulo')
//evento al dar clic a una imagen, regresa la grafica e informacion de la moneda
let litecoin = document.getElementById('litecoin')
litecoin.addEventListener('click', ()=> {
    moneda = 'LTC'
    tituloMoneda.innerHTML = 'Litecoin'
    descripcion.innerHTML = 'Una de las altcoins más reconocidas en el criptomundo es Litecoin. Esta criptomoneda nació en octubre de 2011, como una alternativa a Bitcoin. De hecho, Litecoin es un fork del software Bitcoin Core, con el objetivo de mejorar Bitcoin. Su creador Charlie Lee es el ideólogo y la figura más reconocida de este proyecto. Lee dejó su trabajo en Google para dedicarse íntegramente al desarrollo de LTC y para conseguir sus objetivos se asoció con Xinxi Wang y Franklyn Richards.'
    enviarPeticion(moneda,periodo) 
})

let dogecoin=document.getElementById('dogecoin') 
dogecoin.addEventListener('click',()=>{
    moneda='DOGE'
    tituloMoneda.innerHTML = 'Dogecoin'
    descripcion.innerHTML='El Dogecoin está basado en el Litecoin, y su funcionamiento es similar al de otras criptomonedas. Necesitas un programa en el ordenador con el que resolver los complejos algoritmos con los que se mina esta criptomoneda. Como el Litecoin, el Dogecoin también utiliza un programa criptográfico llamado Scrypt, y le permite ser minado de forma más rápida que otros como el Bitcoin, aunque sin poder utilizar el mismo hardware que para este segundo.'
    enviarPeticion(moneda,periodo)
}) 

let bitcoin=document.getElementById('bitcoin')
bitcoin.addEventListener('click',()=>{
    moneda='BTC'
    tituloMoneda.innerHTML = 'Bitcoin'
    descripcion.innerHTML='Bitcoin es un sistema de dinero en efectivo electrónico entre pares que no tiene una autoridad central y no depende de bancos u otras instituciones financieras para operar.'
    enviarPeticion(moneda,periodo)
})

let ethereum=document.getElementById('ethereum')
ethereum.addEventListener('click',()=>{
    moneda='ETH'
    tituloMoneda.innerHTML = 'Ethereum'
    descripcion.innerHTML='Ethereum es una plataforma digital que adopta la tecnología de cadena de bloques (blockchain) y expande su uso a una gran variedad de aplicaciones. Ether, su criptomoneda nativa, es la segunda más grande del mercado.'
    enviarPeticion(moneda,periodo)
})

let bch=document.getElementById('bch')
bch.addEventListener('click',()=>{
    moneda='BCH'
    tituloMoneda.innerHTML = 'Bitcoin-Cash'
    descripcion.innerHTML='Bitcoin cash (BCH) es tanto una criptomoneda como una red de pagos. Se creó tras una bifurcación dura con bitcoin en diciembre de 2017 con el objetivo de aumentar el número de transacciones procesables.'
    enviarPeticion(moneda,periodo)
})

let eos=document.getElementById('eos')
eos.addEventListener('click',()=>{
    moneda='EOS'
    tituloMoneda.innerHTML = 'EOS'
    descripcion.innerHTML='Desde su lanzamiento inicial en enero del 2018, EOS ha sido noticia y se ha convertido en el blanco de la atención masiva de muchos medios de comunicación. Esto se debe a sus características y a su ICO (Initial Coin Offering) récord de 4.197.956.135 USD. Destaca, entre otras cosas, por incluir como parte de sus objetivos principales iniciales el desarrollo de aplicaciones descentralizadas (dApps) y simplificar la integración y programación de contratos inteligentes. Sin embargo, su aspecto más notable es su capacidad para eliminar prácticamente todas las tarifas de transacción.'
    enviarPeticion(moneda,periodo)
})

let zcash=document.getElementById('zcash')
zcash.addEventListener('click',()=>{
    moneda='ZEC'
    tituloMoneda.innerHTML = 'ZCash'
    descripcion.innerHTML='Zcash (ZEC) es una criptomoneda descentralizada de código abierto que garantiza la privacidad y la transparencia selectiva de las transacciones. Los pagos de monedas de Zcash se publican en una cadena de bloques pública, pero los datos del remitente, el destinatario y el monto de la transferencia son confidenciales.'
    enviarPeticion(moneda,periodo)
})

let tether=document.getElementById('tether')
tether.addEventListener('click',()=>{
    moneda='USDT'
    tituloMoneda.innerHTML = 'Tether'
    descripcion.innerHTML='Tether se basa en el dólar estadounidense (USD), por lo que el valor de una moneda de Tether también corresponderá al tipo de cambio de un dólar. La volatilidad de los precios está presente, pero la fluctuación es leve. Hay muchas monedas estables en la industria de las criptomonedas, pero es esta la que supera a todos.'
    enviarPeticion(moneda,periodo)
})

let dai=document.getElementById('dai')
dai.addEventListener('click',()=>{
    moneda='DAI'
    tituloMoneda.innerHTML = 'DAI'
    descripcion.innerHTML='Dai es una criptomoneda que reacciona automáticamente a las condiciones emergentes del mercado para estabilizar su valor frente a las principales monedas del mundo. Dai es creado por el Dai Stablecoin System, una plataforma descentralizada que se ejecuta en la cadena de bloques Ethereum.'
    enviarPeticion(moneda,periodo)
})

let bnb=document.getElementById('bnb')
bnb.addEventListener('click',()=>{
    moneda='BNB'
    tituloMoneda.innerHTML = 'Binance coin'
    descripcion.innerHTML='BNB fue creado por Binance en 2017 como un token de utilidad para descuentos en las comisiones de trading. BNB, que inicialmente se emitió como un token ERC20, se ha convertido en el token nativo de la cadena de bloques principal de Binance Chain y en una criptomoneda con un gran valor a nivel internacional por su capitalización de mercado. Además de utilizarse para operar y para pagar comisiones en el exchange de criptomonedas de Binance, BNB también se ha ganado la confianza de la comunidad y se emplea para adquirir bienes y servicios en cada vez más establecimientos.'
    enviarPeticion(moneda,periodo)
})

let waves=document.getElementById('waves')
waves.addEventListener('click',()=>{
    moneda='WAVES'
    tituloMoneda.innerHTML = 'Waves'
    descripcion.innerHTML='Waves es una plataforma multifuncional y, de hecho, es una de las más versátiles en toda la industria. Esto se debe a la cantidad de productos funcionales que han construido bajo su ecosistema blockchain. En términos generales, Waves es un proyecto bastante similar a Ethereum, pero incorpora varios elementos nuevos en una arquitectura diferente. Veamos cómo se autodefinen en su propio informe técnico: «WAVES es una plataforma blockchain descentralizada que se enfoca en las operaciones con tokens a través de cadenas de bloques personalizadas.'
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
