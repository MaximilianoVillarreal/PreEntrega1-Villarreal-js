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

//Función Constructora
class Remera{
    constructor (Color, Marca, Precio, Vendido, Talle){
        this.Color = Color
        this.Marca = Marca
        this.Precio = Precio
        this.Vendido = false
        this.Talle = Talle
    }
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
	fetch("./js/usuarios.json")
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

// Navbar
headerYfooter.className = 'navbar bg-dark border-bottom border-body'
//Tarjetas para productos

const url = "./js/productos.json";

fetch(url)
.then(res => res.json())
.then(data => renderizarProds(data))

let articuloCartas = document.getElementById('cartas');
articuloCartas.classList.add('container');
articuloCartas.classList.add('gap-5');
articuloCartas.classList.add('mx-auto');
articuloCartas.classList.add('row');


function renderizarProds(productos){
for (const producto of productos){
    articuloCartas.innerHTML += `
    <div class="card text-bg-dark mb-3" style="width: 18rem;">
    <img class="card-img-top" style="width: 18rem" src="./${producto.imagen}" alt="${producto.nombre}"/>
        <div class="card-body">
            <h5 class="card-title">"${producto.nombre}"</h5>
            <p class="card-text">Precio $ ${producto.precio}</p>
            <button id="${producto.id}" class="btn btn-warning compra">Comprar</button>
        </div>
    </div>
    `;
// aca estaba sweet
}
fetch(url)
.then(res => res.json())
.then(data => mostrarAlerta(data))
function mostrarAlerta (producto){
    // Sweet Alert
const botonesCompra = document.querySelectorAll('button');
botonesCompra.forEach((boton) => {
    boton.addEventListener('click', function () {
    Swal.fire({
        title: '¡Producto agregado al carrito!',
        text: `Has agregado ${producto.nombre}`,
        icon: 'success',
        confirmButtonText: 'OK',
            });
        });
    });
}

// Estilo textos tarjetas
const texto = document.querySelectorAll('h5');
const tamañoDeseado = '12rem';

texto.forEach((nombre) =>{
    nombre.style.font = tamañoDeseado
})
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

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.table(carrito);
    mostrarAlerta (producto)
}
// DateTime con librería Luxon
const fechaHoraActual = new Date();
console.log(fechaHoraActual);
