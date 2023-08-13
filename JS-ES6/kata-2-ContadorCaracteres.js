/*
Crea un programa para que cuente
todos los caracteres usados en una
frase usando arrows functions:

Hola Mundo (h=1, o=2, l=1 ... )

En este caso realizaremos un programa
capaz de contar cualquier carácter.
*/

// Creamos la función contador
let contador = string => {
    return string.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
}

let resultado = contador('Hola Mundo');
console.log(resultado);
