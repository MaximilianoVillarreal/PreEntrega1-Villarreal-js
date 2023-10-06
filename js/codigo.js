// Salida de datos a través de la consola
console.log ("Bienvenido/a")
setTimeout(()=> {
    console.log("Estás navegando en")
}, 3000)
let carrito =[]
// Variables booleanas
let envio = true
if (envio) {
    console.log("Proximamente recibiras tu pedido")
}else{
    console.log("Retiro en el local")
}

// Objetos
const Buzo1 = {
    Color: "Negro",
    Marca: "Tussy",
    Precio: "$30.000",
    Vendido: false,
    Talle: "L"
}
// const Buzo1 = new Buzo ("Negro", "Tussy", 30.000, "Vendido", "L")
// console.log (Buzo1); {Color; "Negro", Marca; "Tussy", Precio; 30.000, Vendido; "false"}
console.log (Buzo1)

//Función Constructora
function Remera(Color, Marca, Precio, Vendido, Talle){
    this.Color = Color
    this.Marca = Marca
    this.Precio = Precio
    this.Vendido = false
    this.Talle = Talle
}
const Remera1 = new Remera ("Blanco", "Not Lost", 12.000, "Vendido", "L")
console.log (Remera1)
for(const caract in Remera1){
    console.log (caract)
    console.log (Remera1[caract])
}
// Metodos de Strings
let frasedescuento = "Tienes un 10% de descuento en toda la página!"
// Metodo toUpperCase
console.log(frasedescuento.toUpperCase())

// Class
class Campera{
    constructor(Color, Marca, Precio, Vendido, Talle){
        this.Color = Color
        this.Marca = Marca
        this.Precio = Precio
        this.Vendido = false
        this.Talle = Talle
    }
    vendidaCampera(){
        this.Vendido = true
    }
}
const Campera1 = new Campera ("Rosa", "Nasty", 35.000, "Vendido", "M")
const Campera2 = new Campera ("Azul", "Tussy", 40.000, "Vendido", "L")
const Campera3 = new Campera ("Rojo", "Not Lost", 38.000, "Vendido", "XL")
console.log (Campera2)

// Arrays
const listaArticulos = ["Buzos", "Camperas", "Remeras", "Pantalones", "Shorts", "Accesorios"]
listaArticulos.splice (2, 0, "Remeras mangas largas")
console.log (listaArticulos)
let lista = listaArticulos.join ("-")
// Funciones de Orden Superior
// const encontrar = Campera.find((Campera) => Campera.Marca == "Nasty")
// const existe = Campera.some (Campera => Campera.Marca == "Tussy")
// console.log (existe)
console.log (Math.max(5.000, 10.000, 15.000, 20.000, 25.000, 30.000, 35.000, 40.000))
console.log (Math.min(5.000, 10.000, 15.000, 20.000, 25.000, 30.000, 35.000, 40.000))
const Lanzamiento = new Date (2023, 7, 10)
alert (Lanzamiento)
// DOM
console.dir(document.body)

// getElementById
let seccionPrincipal = document.getElementById("principal")
console.dir(seccionPrincipal)
seccionPrincipal.style.backgroundColor = "orange"
let tituloH1 = document.getElementById("titulo")
console.dir(tituloH1)
tituloH1.innerText = "Llegó lo nuevo! 🎉"
tituloH1.style.font = "32px"

// getElementByClassName
let headerYfooter = document.getElementsByClassName("headerYfooter")
console.dir(headerYfooter)
for (let i = 0; i < headerYfooter.length; i++) {
    headerYfooter[i].style.backgroundColor = "black";
}

// Formulario
const inicioFormulario = document.getElementById("inicio");

// Función para mostrar errores en el formulario
const mostrarMensaje = (text) => {
	// Etiqueta p 
	const mensajes = document.getElementById("mensajes");
	mensajes.textContent = text;
	mensajes.classList.remove("hide");
	setTimeout(() => {
		mensajes.textContent = "";
		mensajes.classList.add("hide");
	}, 2000);
};

inicioFormulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const nombre = document.getElementById("nombre").value;
	const pass = document.getElementById("password").value;
	//Pedido de usuarios
	fetch("./usuarios.json")
		.then((response) => response.json())
		.then((users) => {
			const user = users.find((user) => user.nombre === nombre);
			if (user) {
				if (pass === user.password) {
					location.href = "./index.html";
				} else {
					mostrarMensaje("Contraseña incorrecta.");
				}
			} else {
				mostrarMensaje("Nombre incorrecto.");
			}
		});
});
//Array de productos
const productos = [
    { id: 1, nombre: "Buzo", precio: 30000, foto: "https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/370474594_270099185772601_1107985306533774840_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=u_OnqCKue_sAX9oSIbK&_nc_ht=scontent.fcor10-4.fna&oh=00_AfBgDCqdfk5Sas0ByuTLHPNxwH10ifvKPmkDFA9BEVU1dw&oe=651A18A9" },
    { id: 2, nombre: "Buzo", precio: 35000, foto: "https://acdn.mitiendanube.com/stores/002/295/260/products/predator111-1eb0d3c7c573e440ee16898182419231-480-0.jpg"},
    { id: 3, nombre: "Campera", precio: 38000, foto: "https://acdn.mitiendanube.com/stores/219/431/products/d1afeeb9-61b1-405f-9078-a99854ab380a-1c3ca76870a3e8abda16935206629953-1024-1024.webp"},
    { id: 4, nombre: "Campera", precio: 40000, foto: "../img/campera2.png"},
    { id: 5, nombre: "Remera", precio: 15000, foto: "../img/remera1.png"},
    { id: 6, nombre: "Remera", precio: 14000, foto: "../img/remera2.png"},
    { id: 7, nombre: "Pantalón", precio: 22000, foto: "../img/pantalon1.png"},
    { id: 8, nombre: "Pantalón", precio: 25000, foto: "../img/pantalon2.png"},
    { id: 9, nombre: "Short", precio: 13000, foto: "../img/short1.png"},
    { id: 10, nombre: "Short", precio: 10000, foto: "../img/short2.png"},
    { id: 11, nombre: "Gorra", precio: 6000, foto: "../img/gorra.png"},
    { id: 12, nombre: "Riñonera", precio: 9000, foto: "../img/riñonera.png"},
];

// Navbar
headerYfooter.className = 'navbar bg-dark border-bottom border-body'
//Tarjetas para productos

const url = "./productos.json";

fetch(url)
.then(res => res.json())
.then(data => mostrarProductos(data))

let articuloCartas = document.getElementById('cartas');
articuloCartas.classList.add('container');
articuloCartas.classList.add('gap-5');
articuloCartas.classList.add('mx-auto');
articuloCartas.classList.add('my-3');
articuloCartas.classList.add('row');


function renderizarProds(productos){
for (const producto of productos){
    articuloCartas.innerHTML += `
    <div class="card text-bg-dark mb-3" style="width: 18rem;">
    <img class="card-img-top" style="width: 18rem" src=${producto.foto} alt=${producto.nombre}/>
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio $ ${producto.precio}</p>
            <button id=${producto.id} class="btn btn-warning compra">Comprar</button>
        </div>
    </div>
    `;
}

// Estilo imágenes de tarjetas
const imagenes = document.querySelectorAll('img');

const anchoDeseado = '250px';
const altoDeseado = '250px';

imagenes.forEach((imagen) => {
    imagen.style.width = anchoDeseado;
    imagen.style.height = altoDeseado;
});
    //eventos
    let botones = document.getElementsByClassName('compra');
    for (const boton of botones) {
    // addEventListener
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id);
            const prodACarro = productos.find((producto) => producto.id == boton.id);
            console.log(prodACarro);
    //Cargar producto al carrito
            agregarAlCarrito(prodACarro);
        });
        boton.onmouseover = () => boton.classList.replace('btn-light', 'btn-dark');
        boton.onmouseout = () => boton.classList.replace('btn-dark', 'btn-light');
    }
}
renderizarProds(productos);

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.table(carrito);
    alert(`Agregaste ${producto.nombre} al carro 🛒`); }

// Storage
// localStorage.setItem('usuario','Maximiliano1112');
// let usuario = localStorage.getItem('usuario');
localStorage.setItem("Stock", JSON.stringify(productos))

const contenedor = document.getElementById('cambiarmodo');
const boton = document.getElementById('mode');

boton.onclick = () => {
    if(localStorage.getItem('mode') == 'dark'){
        pasarALight();
    }else{
        pasarADark();
    }
}

function pasarADark(){
    document.body.className='dark';
    contenedor.classList.replace('light','dark');
    boton.innerText = 'Modo claro';
    localStorage.setItem('mode','dark');
}

function pasarALight(){
    document.body.className='light';
    contenedor.classList.replace('dark','light');
    boton.innerText = 'Modo oscuro';
    localStorage.setItem('mode','light');
}
// Operadores Avanzados

const CamperaTussy = {
    id:1112,
    color: "rojo",
    marca:"Tussy",
    precio: 40.000,
    talle: "L",
}
//Producto a Carrito
const carrito2=[];

const prodACarrito = {
    ...CamperaTussy,
    cantidad:2
}

carrito2.push(prodACarrito);
console.log(carrito2);

//rest parameters
// const sumaTotal2=sumar(40.000,30.000,35.000,38.000,12.000);
// console.log(sumaTotal2);

// DateTime con librería Luxon
const fechaHoraActual = new Date();
console.log(fechaHoraActual);
