// Crea un programa que genere nombres aleatorios de robots tipo RX837 o RX811.

let generador = (numero, prefijo = "RX") => prefijo + numero;

let aleatorio = Math.floor(Math.random()*999);

console.log(generador(aleatorio));