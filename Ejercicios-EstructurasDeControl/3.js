// Hacer un programa que muestre todos los números que hay entre 
// 2 número preguntados previamente al usuario.

let n1 = parseInt(prompt('Dime el primer número', 0));
let n2 = parseInt(prompt('Dime el segundo número', 0));

while (isNaN(n1) || isNaN(n2) || n1 < 0 || n2 <= 0 || n1 > n2){
    alert('Debes introducir números: ')
    n1 = parseInt(prompt('Dime el primer número', 0));
    n2 = parseInt(prompt('Dime el segundo número', 0));
}

for( var i = n1; i <= n2; i++){
    console.log(i);
}
    