/*
Escribe una Arrow Function que tome un array de 
números como parámetro y 
utilice el método map() para crear un nuevo array 
donde cada número sea el doble del original.
*/

let numeros  = [3, 6, 2, 4, 8, 2];

let doble = numeros.map(num => num * 2);

console.log(doble);