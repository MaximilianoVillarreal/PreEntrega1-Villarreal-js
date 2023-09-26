// Salida de datos a través de la consola
console.log ("Bienvenido/a")

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
//Array de productos
const productos = [
    { id: 1, nombre: "Buzo", precio: 125, foto: "https://m.facebook.com/photo.php?fbid=270099209105932&id=100083175648328&set=pb.100083175648328.-2207520000&eav=AfZ6P9kCFoSpxZiHTdtXwBNo5KyQr3BJeGVp-i6TfUlE20OEsJGNWW1gm32tvHL1jPk&paipv=0&source=49" },
    { id: 2, nombre: "Buzo", precio: 70, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fnotlost.store%2F&psig=AOvVaw1ygnN-odHlvh4IksxBfsJ_&ust=1695408513720000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiq14SvvIEDFQAAAAAdAAAAABAE"},
    { id: 3, nombre: "Campera", precio: 50, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkingofthekongo.com.ar%2Fit%2Fproductos%2Fcampera-college-black%2F&psig=AOvVaw16h2mS9ErlA8GWcVWG9wWj&ust=1695408584177000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiqwqWvvIEDFQAAAAAdAAAAABAK"},
    { id: 4, nombre: "Campera", precio: 100, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Ftussy.off%2F&psig=AOvVaw39-eM7nkPj9sK9UJjZ_vep&ust=1695408724907000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPDnwuivvIEDFQAAAAAdAAAAABAE"},
    { id: 5, nombre: "Remera", precio: 200, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pimpum.ar%2FMLA-1422292536-remera-pimpum-hello-nasty-_JM&psig=AOvVaw3YIa_9xW3plqQBz49wP2nn&ust=1695408929474000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiOl8qwvIEDFQAAAAAdAAAAABAE"},
    { id: 6, nombre: "Remera", precio: 900, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tiendamuwaka.com%2Fproductos%2Fremera-samples%2F&psig=AOvVaw0du6im9M8338USXb2kaRcV&ust=1695408986915000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJilxuWwvIEDFQAAAAAdAAAAABAE"},
    { id: 7, nombre: "Pantalón", precio: 100, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCNlrJefpZl5%2F&psig=AOvVaw3EH50pegpqjn1vulhvzGZ4&ust=1695409006043000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPDp0O6wvIEDFQAAAAAdAAAAABAE"},
    { id: 8, nombre: "Pantalón", precio: 80, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsamples.com.ar%2Fproductos%2Fcargo-208-chocolate%2F&psig=AOvVaw0QtNyYYBmC4R_BvUd01nzy&ust=1695409048414000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKiF54KxvIEDFQAAAAAdAAAAABAO"},
    { id: 9, nombre: "Short", precio: 30, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Ftussy.off%2F&psig=AOvVaw3vSXiwnA_VtluaeP1s5Dtr&ust=1695409082312000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDSg5OxvIEDFQAAAAAdAAAAABAE"},
    { id: 10, nombre: "Short", precio: 76, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCJXCMCepf-x%2F&psig=AOvVaw3vSXiwnA_VtluaeP1s5Dtr&ust=1695409082312000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDSg5OxvIEDFQAAAAAdAAAAABAQ"},
    { id: 11, nombre: "Gorra", precio: 10, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCUgV6dAtbrk%2F&psig=AOvVaw3RKJXjJI8fre6uGkyzuSg6&ust=1695409163797000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCM6bmxvIEDFQAAAAAdAAAAABAE"},
    { id: 12, nombre: "Riñonera", precio: 9, foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lyst.com%2Fbags%2Fstussy-lightweight-belt-bag%2F&psig=AOvVaw3knouJQ11x5T_S3qt71b-b&ust=1695409388717000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNCw_qSyvIEDFQAAAAAdAAAAABAc"},
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
// Operadores Avanzados
const CamperaTussy = {
    id:1112,
    color: rojo,
    marca:"Tussy",
    precio: 40.000,
    talle: L,
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
const sumaTotal2=sumar(40.000,30.000,35.000,38.000,12.000);
console.log(sumaTotal2);