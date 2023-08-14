/*
Calcular Descuento:
Escribe una Arrow Function que tome el precio de un artículo 
y un porcentaje de descuento como parámetros, y calcule el precio después del descuento.
*/



const descuento = precio => precio / 2;

console.log(descuento(100));

const calcularPrecioConDescuento = (precio, descuento) => precio - (precio * (descuento / 100));
console.log(calcularPrecioConDescuento(100, 20)); // Salida: 80