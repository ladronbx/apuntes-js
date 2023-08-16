/*
Te propongo un reto, verás, ¿serías capaz de averiguar si es posible evitar
algunos elementos de un array una vez estás haciendo una
desestructuración de éste?

¿De modo que asignarías a variables aquellos valores que estén en la
posición que tu desees exclusivamente?

¡Si existe, sé que lo encontrarás!

*/
/*
let arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let [, secondFruit, , fourthFruit,] = arr;

console.log(secondFruit); // 'banana'
console.log(fourthFruit); // 'date'


En este ejemplo, estamos desestructurando un array de nombres de frutas. Usamos comas en la desestructuración para omitir el primer y tercer elementos del array. Luego asignamos el segundo elemento a secondFruit y el cuarto elemento a fourthFruit. De esta manera, estamos extrayendo selectivamente los elementos que deseamos de un array en posiciones específicas.
*/


let array = ['manzana', 'pera', 'melon', 'pinya', 'cereza'];
let [,posicion2, , posicion4, posicion5] = array;

console.log(posicion5);

let array2 = ['manzana', 'pera', 'melon', 'pinya', 'cereza'];
let [,segunda, tercera, , quinta] = array2;

console.log(segunda);