/*
Spread : Descompone un array u objeto con la finalidad de expandirlo. 
*/

//Ejemplo con array:
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6];

//Ejemplo con objeto
const objeto = { name: 'Pepe', age: 20};
const newObjeto = {...objeto, ciudad: 'Valencia'};

/*

****** EJERCICIOS ******
1. Concatenar 2 arrays:

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const arrayConcat = [...array1, ...array2];



2. Clonar un array:

const array = ['Hola'];
const clone = [...array];



3.Combinar objetos

const consolaSony = { marca: 'sony', año: 2015};
const consolaNintendo = { portatil: true };

const consolas = { ...consolaSony, ...consolaNintendo};



4. Pasar elementos de un array como argumentos a una función:

const array = [3, 2];
function suma(a, b){
    return a + b;
}



console.log(suma(...array));
*/


