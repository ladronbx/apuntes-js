// Hacer un programa que : solicite al usuario 2 números. 
// Y después mostrar los números impares que hayan entre medias.

var n1 = parseInt(prompt('Dime el  primer número', 0));
var n2 = parseInt(prompt('Dime el  segundo número', 0));

while ((isNaN(n1)) || (isNaN(n2)) || (n1 < 0) || (n2 < 0)) {
    alert('Introduce correctamente los números.')
    n1 = parseInt(prompt('Dime el  primer número', 0));
    n2 = parseInt(prompt('Dime el  segundo número', 0));
}

var i;

for(i = n1; i <= n2; i++ ){
    if (i % 2 !== 0) {
        console.log(i);
    }
}