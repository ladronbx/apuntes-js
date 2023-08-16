/*
Introduce tu nombre y un número para
saber si este ese primo.

El resultado se mostrará por console log.

Pista: Número primo ej -> 109
Pista Número no primo ej-> 110
*/

let nombre = prompt("Dime tu nombre");

console.log(nombre);

let numero = parseInt(prompt("Dime un numero y te diré si es primo o no"));

const primo = numero => {
    for (let i = 2; i < numero; i++)
        if (numero % i === 0) return false;
    return numero > 1;
}

if (!primo(numero)) {
    console.log(`Hola ${nombre}, el número que has introducido, ${numero}, NO es primo`);
} else {
    console.log(`Hola ${nombre}, el número que has introducido, ${numero}, SI es primo`);
}

