/*
1 -Pide un nombre -> nombre
2 - Quédate con las 2 primeras letras de él y las muestre en mayúsculas. -> prefijo
3 -Añade 2 dígitos a posteriori con la posición que ocupan éstas en el
abecedario.


EJEMPLO: 
usuario introduce : Manuel -> MA141.
M = 14
A = 1
*/
let nombre = prompt("Dime un nombre"); // 1. PIDE NOMBRE

let prefijo = nombre.toUpperCase().slice(0, 2); // 2. GUARDA Y EXTRAE 2 LETRAS Y MAYUSCULA.

const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; // CREAMOS UN STRING CON EL ABECEDARIO CORRECTO

let generador = (numero, valorDefecto = prefijo) => valorDefecto + numero; // OK. FUNCION DE GENERAR PREFIJO + NUMERO.

// Función para obtener la posición de una letra en el abecedario
function obtenerPosicion(letra) {
  return abecedario.indexOf(letra) + 1;
}

// Recorremos el prefijo para obtener las posiciones en el abecedario de las letras
let posiciones = [];
for (let i = 0; i < prefijo.length; i++) {
  let letra = prefijo[i];
  let posicion = obtenerPosicion(letra);
  posiciones.push(posicion);
}

// Generamos los dígitos usando las posiciones obtenidas
let digitos = posiciones.join('');

// Generamos el resultado final
let resultado = generador(digitos);

console.log(resultado); // Mostramos el resultado
