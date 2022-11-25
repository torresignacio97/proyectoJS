function Anteojo(nombre, tipo, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
}

const anteojo1 = new Anteojo("Lente de sol", "Sol", 10500);
const anteojo2 = new Anteojo("Lente recetado", "Recetado", 7300);
const anteojo3 = new Anteojo("Lente de contacto", "Contacto", 9700);

console.log(anteojo1);
console.log(anteojo2);
console.log(anteojo3);

const productos = [
    { id: 1, producto: "Anteojo de sol" },
    { id: 2, producto: "Anteojo recetado" },
    { id: 3, producto: "Lente de contacto" },
];

for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    console.log(producto.id);
    console.log(producto.producto);
}


let producto = parseInt(prompt("Ingrese el producto que quiera comprar: 1- Anteojo de sol, 2-Anteojo recetado, 3- Lente de contacto"))

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
}

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const iva = x => x * 0.021

let precioProducto = parseInt(prompt("Ingrese el precio del producto seleccionado:"));
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
alert("Precio final del producto: $" + nuevoPrecio);

