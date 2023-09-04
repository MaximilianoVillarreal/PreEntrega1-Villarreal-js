// Funciones
function saludar(){
    let usuario = prompt ("Cúal es tu nombre")
    alert ("Bienvenido/a" + usuario)
}
function calcularDescuento(total,porcentaje) {
    let descuento = total * (porcentaje /100)
    return descuento
}
// Llamados
saludar()
calcularDescuento(total,porcentaje)
// Variables
let montoFinal = parseFloat(prompt("Ingrese el monto final de su compra"))
let modoDePago = prompt ("Modo de pago\n1-Efectivo\n2-Debito\n3-Credito")
// Constantes
const anioCreacionEmprendimiento = 2023;

// Operaciones matemáticas
let suma = deuda + 100;
let resta = deuda - 100;
let multiplic = deuda * 3;
let division = deuda / 3;

// Concatenaciones
let saludo = "Hola" + Cliente;

// Salida de datos a través de la consola
console.log ("Bienvenido/a")

// Salida de datos a través de alert
alert (saludo)

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
        let decuentoDebito = calcularDescuento(montoFinal, 10)
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
const Buzo = {
    Color: "Negro",
    Marca: "Tussy",
    Precio: "$30.000",
    Vendido: false,
}
console.log (Buzo); {Color; "Negro", Marca; "Tussy", Precio; 30.000, Vendido; "false"}

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
if (posicion /= -1){
    alert ("Producto disponible en la lista en la posicion" + posicion)
}else{
    alert ("El producto no se encuentra en la lista")
}