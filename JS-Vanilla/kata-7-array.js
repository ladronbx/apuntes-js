/*
Vamos a crear una función que valide que un
número de DNI y una letra son compatibles para
ello, necesitamos el siguiente algoritmo.
1. Realizar el módulo del número del DNI
entre 23.
2. El resultado de ese módulo es la posición
del siguiente array.
TRWAGMYFPDXBNJZSQVHLCKET
*/

var dni = Number(prompt("Introduce tu DNI: "));
var letra = prompt('Introduce la letra de tu DNI:');

function comprobar(n, letraOriginal) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    var letraComp = letras[n % 23];

    if (letraOriginal === letraComp) {
        alert('Tu DNI es correcto.');
    } else {
        alert('NO!. Tu DNI es incorrecto.');
    }
}

comprobar(dni, letra);