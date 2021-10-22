//crear variables

//variables con var
//var aprendiendoJS;

//variables con const
//const aprendiendo = 'JavaScript';
//aprendiendo = true; 

//variables con let
//let aprendiendo = 'java';
//aprendiendo = true;
//console.log(aprendiendo);

//Con var se pueden mezclar la variables
/* var musica = 'rock';

if (musica) {
    var musica = 'Grunge'
    console.log('Dentro del if',musica);
}
console.log('Fuera del if',musica); */


//Con let las variables son independientes dentro de otros cuadros 
/* let musica = 'rock';

if (musica) {
    let musica = 'Grunge'
    console.log('Dentro del if',musica);
}
console.log('Fuera del if',musica); */


/* let nombre = 'jean';
let trabajo = 'Desarrollo web'; */

//concatenar javascript
/* console.log('nombre: ' + nombre + ' Trabajo: '+ trabajo);
console.log(`nombre: ${nombre} Trabajo: ${trabajo}`); */

//concatenar con multiples lineas
//const contenedorApp = document.querySelector('#app');
/* let html = '<ul>' +
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' +
            '</ul>'; */

//Forma nueva de hacerlo
/* let html = `
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Trabajo: ${trabajo}</li>    
        </ul>
`; */

//contenedorApp.innerHTML = html;

//Funciones
//Funtion Declaration
/* function saludar(nombre) {
    console.log('Bienvenido ' + nombre);
}
saludar('Juan'); */


//Funtion Expression
/* const cliente = function (nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);

}
cliente('Juan') */

//Parametros por default en las funciones 
/* function actividad(nombre = 'Walter White', actividad = 'Enseñar Quimica') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

const actividad = function (nombre = 'Walter White', actividad = 'Enseñar Quimica') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}
actividad('Juan', 'Aprender JavaScript');
actividad('Pedro', 'Creando sitio web');
actividad();
actividad('Antonio'); */


//arrow function
/* let viajando = (destino, duracion) => {
    return `Viajando a la ciudad de: ${destino} por ${duracion}`;
}

let viaje;
    viaje = viajando('Paris')
    viaje = viajando('Londres')
    viaje = viajando('Barcelona', '9 dias')

console.log(viaje) */


//objetos
//objet literal
/* const persona = {
    nombre: 'Jean',
    profesion: 'Desarrollo Web',
    edad: 500
}

console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad); */

//Objet constructor
/* function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender javascript', 'Urgencia')
const tarea2 = new Tarea('Aprender React', 'Urgencia2')
const tarea3 = new Tarea('Aprender React native', 'Urgencia3')

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea1.nombre) */


//Prototypes



