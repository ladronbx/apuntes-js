/*
1. **Doblar un número:**
   Escribe una Arrow Function que tome un número como parámetro y devuelva el doble de ese número.
*/

const doblar = numero => numero * 2;
console.log(doblar(5));


/* 
2. **Sumar dos números:**
   Escribe una Arrow Function que tome dos números como parámetros y devuelva su suma.
*/

const suma = (a, b) => (a + b);
console.log(suma(3, 3));


/*
3. **Convertir a mayúsculas:**
   Escribe una Arrow Function que tome una cadena como parámetro y la convierta en mayúsculas.
*/

const convertirMayus = string => string.toUpperCase();
console.log(convertirMayus("hola"));



/*
4. **Calcular el área de un círculo:**
   Escribe una Arrow Function que tome el radio de un círculo como parámetro y calcule su área utilizando 
   la fórmula `área = π * radio²`.
*/

const calcularArea = radio => 3.14 * (radio ** 2);
console.log(calcularArea(4));


/*
5. **Contar la cantidad de caracteres:**
   Escribe una Arrow Function que tome una cadena como parámetro y devuelva la cantidad de caracteres en esa cadena.
*/

const longitud = cadena => cadena.length;
console.log(longitud("hola"));



/*
6. **Agregar sufijo a una lista:**
   Escribe una Arrow Function que tome una lista de palabras como parámetro y agregue un sufijo 
   (por ejemplo, "ing") a cada palabra.
*/
/* **** MAAAAL *****
const verbos = ["read", "drink"];
const anyadeIng = array => array.map( array + "ing");
console.log(anyadeIng(verbos));
*/
const verbos = ["read", "drink"];
const anyadeIng = array => array.map(palabra => palabra + "ing");
console.log(anyadeIng(verbos));




/*
7. **Convertir grados Celsius a Fahrenheit:**
   Escribe una Arrow Function que tome una temperatura en grados Celsius como parámetro y la convierta
    a grados Fahrenheit utilizando la fórmula `F = C * 9/5 + 32`.
*/

const conversor = grados => grados * 9 / 5 + 32;
console.log(conversor(3));




/*
8. **Dividir una cadena en palabras:**
   Escribe una Arrow Function que tome una cadena como parámetro y la divida en un array de palabras
    utilizando el espacio como separador.

*/

const divisor = texxto => texxto.split('');
console.log(divisor("hola"));



/*
9. **Calcular el promedio de una lista de números:**
   Escribe una Arrow Function que tome una lista de números como parámetro y calcule su promedio.
*/

const calcularPromedio = lista => {
    const sumaTotal = lista.reduce((acumulador, numero) => acumulador + numero, 0);
    const cantidadNumeros = lista.length;
    const promedio = sumaTotal / cantidadNumeros;
    return promedio;
};

const numeros = [10, 20, 30, 40, 50];
const resultadoPromedio = calcularPromedio(numeros);

console.log("Números:", numeros);
console.log("Promedio:", resultadoPromedio);
