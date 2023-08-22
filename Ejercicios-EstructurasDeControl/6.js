// Hacer un programa que :  Nos diga si un número es par o impar.

var n = parseInt(prompt('Dime un número', 0));


while ((isNaN(n)) || (n < 0)){
    alert('Introduce correctamente los números.')
    n = parseInt(prompt('Dime un número', 0));
}

if (n%2 === 0){
    console.log(`El numero ${n} es par`);
}else{
    console.log(`El numero ${n} es impar`);
}