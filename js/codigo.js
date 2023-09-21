// Funciones
function saludar(){
    let usuario = prompt ("Cúal es tu nombre")
    alert ("Bienvenido/a" + usuario)
}
function calcularDescuento(montoFinal,porcentaje) {
    let descuento = montoFinal * (porcentaje /100)
    return descuento
}
// Llamados
saludar()
// calcularDescuento(montoFinal,porcentaje)
// Variables
let montoFinal = parseFloat(prompt("Ingrese el monto final de su compra"))
let modoDePago = prompt ("Modo de pago\n1-Efectivo\n2-Debito\n3-Credito")
// Constantes
const anioCreacionEmprendimiento = 2023;

// Operaciones matemáticas
let deuda = 10.000
let suma = deuda + 100;
let resta = deuda - 100;
let multiplic = deuda * 3;
let division = deuda / 3;

// Concatenaciones

// let saludo = "Hola" + cliente; NO funciona

// Salida de datos a través de la consola
console.log ("Bienvenido/a")

// Salida de datos a través de alert
// alert (saludo)

// Entrada de datos con prompt
let mail = prompt ("Ingrese su mail")
console.log ("El mail del usuario es" + mail)
// parseInt si quiero convertir a un numero entero
// parseFloat si quiero convertir a un numero decimal

// Control de flujos - Condicionales
console.log("Edad")
let edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

// Variables booleanas
let envio = true
if (envio) {
    console.log("Proximamente recibiras tu pedido")
}else{
    console.log("Retiro en el local")
}

// Ciclos
// Ciclo por conteo: For
for (let i= 1; i<= 5; i++){
    console.log("Iteracion" + i);
    precio = parseFloat(prompt("Ingrese el precio del producto"))
    precioIVA = precio * 0.21
    console.log("El IVA del precio $" + precio + "es: $" + precioIVA)
}
for (let i=1; i<= 3; i++){
    usuario=prompt("Ingresa el nombre de usuario")
    contraseña=prompt("Ingresa la contraseña")
    if((usuario== "Maximiliano1112") && (contraseña=="1234")){
        alert("Bienvenido Maximiliano1112");
        break
    }else{
        alert("usuario y/o contraseña incorrectas. Te quedan '+(3-i)+' intentos")
    }
}
// Switch
let idProducto = prompt('Ingresa id de producto (0-salir)');
    
    while(idProducto !== '0'){
        switch(idProducto){
            case '1212':
                alert('Gorra Evil ... $1699'); 
                break;
            case '3333':
                alert('Buzo oversize Diamond ... $34000');
                break; 
            case '5555':
                alert('Remera oversize Tussy ... $10000');
                break; 
            case '9999':
                alert('Pantalón cargo Travis ... $17000');
                break;
            default:
                alert('Sin stock');
                break;
        }
        idProducto = prompt('Ingresa id de producto (0-salir)');
}
switch(modoDePago){
    case '1':
        let descuentoEfectivo = calcularDescuento(montoFinal, 20)
        alert ("Tienes un descuento de $" + descuentoEfectivo)
        break
    case '2':
        let descuentoDebito = calcularDescuento(montoFinal, 10)
        alert ("Tienes un descuento de $" + descuentoDebito)
        break
    case '3':
        let descuentoCredito = 0
        alert ("Tienes un descuento de $" + descuentoCredito)
        break
    default:
        alert ("Error")
        break
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
// IndexOf
let prod = prompt ("Ingresa el nombre del producto para ver su disponibilidad")
const posicion = listaArticulos.indexOf(prod)
if (posicion !== -1){
    alert ("Producto disponible en la lista en la posicion" + posicion)
}else{
    alert ("El producto no se encuentra en la lista")
}
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
//Array de productos
const productos = [
    { id: 1, nombre: "Buzo", precio: 125, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49" },
    { id: 2, nombre: "Buzo", precio: 70, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 3, nombre: "Campera", precio: 50, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 4, nombre: "Campera", precio: 100, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 5, nombre: "Remera", precio: 200, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 6, nombre: "Remera", precio: 900, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 7, nombre: "Pantalón", precio: 100, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 8, nombre: "Pantalón", precio: 80, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 9, nombre: "Short", precio: 30, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 10, nombre: "Short", precio: 76, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 11, nombre: "Gorra", precio: 10, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
    { id: 12, nombre: "Riñonera", precio: 9, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49"},
];

//Tarjetas para productos
let articuloCartas = document.getElementById('cartas');
articuloCartas.classList.add('container');
articuloCartas.classList.add('gap-3');
articuloCartas.classList.add('mx-auto');
articuloCartas.classList.add('my-3');

function renderizarProds(productos){
for (const producto of productos){
    articuloCartas.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${producto.foto} alt=${producto.nombre}/>
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio $ ${producto.precio}</p>
            <button id=${producto.id} class="btn btn-light compra">Comprar</button>
        </div>
    </div>
    `;
}
    //eventos
    let botones = document.getElementsByClassName('compra');
    for (const boton of botones) {
    // addEventListener
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id);
            const prodACarro = listaProds.find((producto) => producto.id == boton.id);
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
