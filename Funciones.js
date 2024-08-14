//Funcion declarativa, es una de las mas usadas
function Saludar(nombre) {
    return `Hola ${nombre}`;
}

//Funcion de exprecion
const sumar= function(primerValor, segundoValor){
    return primerValor+segundoValor;
}

//Arrow function, es una de las mas usadas
const multiplicar = (primerValor, segundoValor)=>primerValor*segundoValor;
const sumatoria = (primerValor, segundoValor)=>{
    if (primerValor>0) {
        return primerValor+segundoValor;
    }else{
        return 0;
    }
}

console.log(Saludar('pathy'));
console.log(sumar(3,4));
console.log(multiplicar(3,5))
console.log(sumatoria(8,5))

/////////////////////////////////////////////////////

//Funcion que muestre la altura y el ancho del navegador
function MostrarDimencionesVentana(params) {
    let altura = window.innerHeight;
    let ancho = window.innerWidth;
    alert(`La ventana mide: ${ancho}px de ancho y ${altura}px de alto`);
}
MostrarDimencionesVentana()

//Sistemas de modificaciones con alertas
let notificacionesEnCola = [];
let notificacionActiva = true;
function AgregarNotificacion(mensaje, duracion) {
    notificacionesEnCola.push({mensaje, duracion});
    if (!notificacionActiva){
        MostrarSiguienteNotificacion()
    }
}

function MostrarSiguienteNotificacion() {
    if (notificacionesEnCola.length>0) {
        notificacionActiva=true;
        let {mensaje, duracion}=notificacionesEnCola.shift();
        window.alert(mensaje)
        //programar la siguiente notificacion
        window.setTimeout(()=>{
            notificacionActiva=false;
            MostrarSiguienteNotificacion()
        }, duracion);
    }
}
AgregarNotificacion('Primera notificacion', 5000);
MostrarSiguienteNotificacion()
AgregarNotificacion('Segunda notificacion', 5000);
MostrarSiguienteNotificacion()
AgregarNotificacion('Tercera notificacion', 5000);
MostrarSiguienteNotificacion()

