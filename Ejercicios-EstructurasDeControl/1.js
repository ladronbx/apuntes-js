// Programa que pida dos números y que nos diga cual es el mayor, 
// el menor y si son iguales.

// Añadimos otro plus al ejercicio: Si los datos introducidos no son un número o son menores o iguales a 0 
// que nos vuelva a pedir introducir los datos. 
let n1 = parseInt(prompt('Dime el primer número', 0));
let n2 = parseInt(prompt('Dime el segundo número', 0));

while (isNaN(n1) || isNaN(n2) || n1 <= 0 || n2 <= 0) {
    alert('Debes introducir números: ')
    n1 = parseInt(prompt('Dime el primer número', 0));
    n2 = parseInt(prompt('Dime el segundo número', 0));
}

if (n1 < n2) {
    console.log(`El segundo número es el mayor, ya que ${n2} es mayor a ${n1}`);
} else if (n1 > n2) {
    console.log(`El primer número es el mayor, ya que ${n1} es mayor a ${n2}`);
} else {
    console.log(`Son los mismos números ${n1} ${n2}`);
}
