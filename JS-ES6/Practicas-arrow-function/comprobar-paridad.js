/*
Comprobar Paridad:
Escribe una Arrow Function que tome un número como parámetro 
y devuelva "Par" si es par y "Impar" si es impar.

*/


// Funtion Regular:
function restoDivision (numero){
    var condicion = (numero % 2 === 0) ? "El numero es par" : "El numero es impar";
    return condicion;
}

console.log(restoDivision(44));


//Arrow function:
const comprobarParidad = n => (n % 2 === 0) ? "Par" : "Impar";
console.log(comprobarParidad(5)); // Salida: Impar
