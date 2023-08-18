//Replica el comportamiento del método entries, 
// pasándole un objeto y garantizando que devuelva 
// un array como el que devolvía el método entries:


const obj = {
    test: 1,
    foo: true,
    string: 'nombre'
}

const entriesClone = (inputObject) => {
    return Object.keys(inputObject).map(key => [key, inputObject[key]]);
}

console.log(entriesClone(obj));
console.log(Object.entries(obj));


/*
Object.keys(inputObject) obtiene un arreglo de las claves 
(propiedades) del objeto inputObject.

.map(key => [key, inputObject[key]]) itera a través de las
 claves obtenidas y para cada clave crea un nuevo arreglo. 
 En cada iteración, [key, inputObject[key]] crea un arreglo con dos elementos: 
 la clave y el valor correspondiente a esa clave en el objeto inputObject.

En resumen, la función entriesClone toma un objeto como entrada, 
obtiene sus claves con Object.keys(), y luego utiliza map() para 
generar un nuevo arreglo en el que cada elemento es un arreglo con 
la clave y el valor correspondiente del objeto original.
*/