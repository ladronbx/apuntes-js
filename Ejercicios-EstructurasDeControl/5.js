// Hacer un programa que : Mostrar todos los números divisores de un número solicitado.
var n = parseInt(prompt('Dime un número', 0));


while ((isNaN(n)) || (n < 0)){
    alert('Introduce correctamente los números.')
    n = parseInt(prompt('Dime un número', 0));
}

var i;
for (i = n; i > 0; i--){
    if(n%i === 0){
        console.log(i);
    }
}
