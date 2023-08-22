// Utilizando un bucle para mostrar la media y 
// la suma de los números introducidos por el usuario. 
// Hasta que el usuario introduzca un número negativo 
// y pare ese bucle mostrando el resultado final de la suma. 


alert(`Introduce números positivos, para realizar una suma 
y media de estos. Al introducir un número negativo se mostrará el resultado.`);

var suma = 0;
var i = 0;

do{
    var n = parseInt(prompt('Dime un número', 0));
    while(isNaN(n)){
        alert('Debes introducir números válidos.');
        var n = parseInt(prompt('Dime un número', 0));
    }

    if(n >= 0){
        i++;
        suma += n;
    }

}while(n >= 0);

var media = suma / i;
console.log(`La media es de ${media}`);
console.log(`La suma es ${suma}`);
