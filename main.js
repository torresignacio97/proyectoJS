function Anteojo(nombre, tipo, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
}

const anteojo1 = new Anteojo("Lente de sol", "Sol", 10500);
const anteojo2 = new Anteojo("Lente recetado", "Recetado", 7300);
const anteojo3 = new Anteojo("Lente de contacto", "Contacto", 9700);

const anteojo1JSON = JSON.stringify(anteojo1);
localStorage.setItem("anteojo1", anteojo1JSON);

const anteojo1LocalStorage = localStorage.getItem("anteojo1");
const anteojo1Objeto = JSON.parse(anteojo1LocalStorage);

console.log(anteojo1LocalStorage)

const anteojo2JSON = JSON.stringify(anteojo2);
localStorage.setItem("anteojo1", anteojo2JSON);

const anteojo2LocalStorage = localStorage.getItem("anteojo2");
const anteojo2Objeto = JSON.parse(anteojo2LocalStorage);

console.log(anteojo2LocalStorage)

const anteojo3JSON = JSON.stringify(anteojo3);
localStorage.setItem("anteojo1", anteojo3JSON);

const anteojo3LocalStorage = localStorage.getItem("anteojo3");
const anteojo3Objeto = JSON.parse(anteojo3LocalStorage);

console.log(anteojo3LocalStorage)


const productos = [
    { id: 1, producto: "Anteojo de sol" },
    { id: 2, producto: "Anteojo recetado" },
    { id: 3, producto: "Lente de contacto" },
];

localStorage.setItem("productos", JSON.stringify(productos));
const productosLocalStorage = JSON.parse(localStorage.getItem("productos"));

console.log(productosLocalStorage);

for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    console.log(producto.id);
    console.log(producto.producto);
}

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const iva = x => x * 0.021

const alerta1 = document.querySelector("#alerta1");
alerta1.addEventListener("click", mostrarAlerta1);

function mostrarAlerta1() {
    alert("Su producto seleccionado es anteojo de sol y tiene un precio de $" + anteojo1.precio + ".");
    let precioProducto = parseInt(prompt("Ingrese el precio del producto seleccionado:"));
    if (precioProducto == 10500) {
    console.log(10500);
    } else {
        console.log("Error. Volver a ingresar monto.")
    }
    let descuento = 50
    
    let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
    console.log(nuevoPrecio)
    alert("Precio final del producto: $" + nuevoPrecio);
}

const alerta2 = document.querySelector("#alerta2");
alerta2.addEventListener("click", mostrarAlerta2);

function mostrarAlerta2() {
    alert("Su producto seleccionado es anteojo de sol y tiene un precio de $" + anteojo2.precio + ".");
    let precioProducto = parseInt(prompt("Ingrese el precio del producto seleccionado:"));
    if (precioProducto == 7300) {
    console.log(7300);
    } else {
        console.log("Error. Volver a ingresar monto.")
    }
    let descuento = 50
    
    let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
    console.log(nuevoPrecio)
    alert("Precio final del producto: $" + nuevoPrecio);
}

const alerta3 = document.querySelector("#alerta3");
alerta3.addEventListener("click", mostrarAlerta3);

function mostrarAlerta3() {
    alert("Su producto seleccionado es anteojo de sol y tiene un precio de $" + anteojo3.precio + ".");
    let precioProducto = parseInt(prompt("Ingrese el precio del producto seleccionado:"));
    if (precioProducto == 9700) {
    console.log(9700);
    } else {
        console.log("Error. Volver a ingresar monto.")
    }
    let descuento = 50
    
    let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
    console.log(nuevoPrecio)
    alert("Precio final del producto: $" + nuevoPrecio);
}

/* let producto = parseInt(prompt("Ingrese el producto que quiera comprar: 1- Anteojo de sol, 2-Anteojo recetado, 3- Lente de contacto"))

switch (producto) {
    case 1: 
        alert("Su producto seleccionado es anteojo de sol y tiene un precio de $" + anteojo1.precio + ".");
        break;
    case 2:
        alert("Su producto seleccionado es anteojo recetado y tiene un precio de $" + anteojo2.precio + ".");
        break;
    case 3:
        alert("Su producto seleccionado es lente de contacto y tiene un precio de $" + anteojo3.precio + ".");
        break;
    default:
        alert("Opción incorrecta. Por favor, vuelva a ingresar una opción entre 1 y 3.");
        break;
} */



/* let precioProducto = parseInt(prompt("Ingrese el precio del producto seleccionado:"));
if (precioProducto == 10500) {
    console.log(10500);
} else if (precioProducto == 7300) {
    console.log(7300);
} else if (precioProducto == 9700) {
    console.log(9700);
} else {
    console.log("Error. Volver a ingresar monto.")
}
let descuento = 50

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio)
alert("Precio final del producto: $" + nuevoPrecio); */

