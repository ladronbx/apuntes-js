let nombre = prompt("Dime un nombre");

let prefijo = nombre.toUpperCase().slice(0, 2);

let generador = (numero, valorDefecto = prefijo ) => valorDefecto + numero;

let aleatorio = Math.floor(Math.random()*999);

console.log(generador(aleatorio));