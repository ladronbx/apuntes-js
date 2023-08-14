// CON EL PREFIJO PLAYSTATION, AÑADIR NUMEROS ALEATORIOS HASTA LA 5

let generador = (numero, prefijo = "PlayStation") => prefijo + numero;

let aleatorio = Math.floor(Math.random()*6);

console.log(generador(aleatorio));