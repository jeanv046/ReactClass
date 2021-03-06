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

//Destructure de objetos anterior
/* const aprendiendoJs = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5+'
    },
    framework: ['React','VueJs','AngularJs']
}

console.log(aprendiendoJs); */
//version anteriores
/* let version = aprendiendoJs.version.nueva;
console.log(version); */

//Forma nueva del Destructure
/* let {nueva} = aprendiendoJs.version;
console.log(nueva); */

//Objet literal Enchancement
/* const banda = 'Metalica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets','Seek & Destroy','Enter Sandman']; */

//Formma anterior
/* const metalica = {
    banda: banda,
    genero: genero,
    canciones: canciones,
} 
console.log(metalica);*/

//Forma nueva
/* const metalica = {banda, genero, canciones}
console.log(metalica); */

//Como agregar metodos o funciones en un objeto
/* const persona = {
    nombre: 'Jean',
    trabajo: 'Desarrollo Web',
    edad: 500,
    musicRock: true,
    mostrarInformation(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}

persona.mostrarInformation(); */

//Arreglos, .map, objet keys

/* const carrito = ['Producto1', 'Producto2', 'Producto3']; */
/* console.log(carrito); */

/* const appContenedor = document.querySelector('#app')
let html = '';
carrito.forEach(producto =>{
    html += `<li>${producto}</li>`;
})
appContenedor.innerHTML = html; */

// .map
/* carrito = ['Producto1', 'Producto2', 'Producto3'];
carrito.map(producto => {
    return 'El producto es ' + producto;
}); */

//Objet keys
/* const persona ={
    nombre: 'jean',
    profesion: 'Desarrollador Web',
    edad: 500,
}

console.log(Object.keys(persona)); */

//Spread operator
/* let lenguajes = ['JavaScript', 'PHP', 'Python'];
let framework = ['ReactJS', 'Laravel','Django']; */

//Unir  los arreglos en 1 solo forma antigua
/* let combination = lenguajes.concat(framework);
console.log(combination); */

//Unir  los arreglos en 1 solo forma actualizada
/* let combination = [...lenguajes,...framework];
console.log(combination); */

//Metodos en arreglos
/* const persona =[
    {nombre: 'Jean', edad: 23, aprendiendo: 'JavaScript'},
    {nombre: 'Juan', edad: 18, aprendiendo: 'PHP'},
    {nombre: 'Jose', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Juliana', edad: 19, aprendiendo: 'ReactJS'},
]

console.log(persona); */

//Mayores de 28 años

/* const mayores = persona.filter(persona =>{
    return persona.edad > 28;
    console.log(persona);
});
console.log(mayores); */

//que aprende jose y su edad

/* const jose = persona.find(persona =>{
    return persona.nombre == 'Jose';
});

console.log('Jose esta aprendiendo: ' + jose.aprendiendo);

let total = persona.reduce((edadTotal, persona)=>{
    return edadTotal + persona.edad;
}, 0);
console.log(total / persona.length) */

//Promises
/* const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let descuento = true;
        if (descuento) {
            resolve('Descuento aplicado!');
        }else {
            reject('No se pudo aplicar descuento')
        }

    }, 3000);
});
aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
}) */

//promises con Ajax

/* const descargaUsuarios = (cantidad) =>
  new Promise((resolve, reject) => {
    //pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open("GET", api, true);

    //on load
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    //on error
    xhr.onerror = (error) => reject(error);
    //send
    xhr.send();
  });

descargaUsuarios(30).then(
  (miembros) => imprimirHTML(miembros),
  (error) => console.error(new Error("Hubo un error" + error))
);

function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Imagen:
                    <img src="${usuario.picture.medium}">
            </li>
        `
    });
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
} */


//Clases en javascript 
/* class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

//crear objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('preparar cafe', 'alta');
let tarea3 = new Tarea('Pasear el perro', 'media');
let tarea4 = new Tarea('Conocer familia', 'baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar()); */


