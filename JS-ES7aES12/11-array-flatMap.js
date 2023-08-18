// array.flatMap()

// Creará un nuevo array con todos los sub-arrays 
// (arrays dentro de otro array) que este array contenga, 
// supongamos el siguiente arreglo con otros arreglos dentro:


const edades = [8, 10, 9, 11, [13, 18, 20, [18, 20, 21]]];


console.log(edades);// Resultado: (5) [8, 10, 9, 11, Array(4)]


console.log(edades.flat());// Resultado: (8) [8, 10, 9, 11, 13, 18, 20, Array(3)]



// ¿Qué pasaría con 10 sub-arrays) Puedes escribir 100 veces.flat() 
// después de tu arreglo, pero también puedes pasar   como parámetro 
// la cantidad de sub-arrays a los que deseas acceder, incluída la opción Infinity.

// Supongamos que tenemos el siguiente arreglo con 10 niveles de anidamiento:
const arrayProfundo = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]];

// Si quisiéramos aplicar .flat() 100 veces, sería poco práctico escribirlo repetidamente. 
// En su lugar, podríamos usar un bucle para aplicarlo múltiples veces:

let resultado = arrayProfundo;
for (let i = 0; i < 100; i++) {
  resultado = resultado.flat();
}
console.log(resultado);

// in embargo, también podemos utilizar la opción que mencionaste, 
// donde puedes pasar como parámetro la cantidad de niveles de 
// anidamiento a los que deseas acceder, incluyendo la opción Infinity 
// para aplanar todos los niveles:
const arrayAplanado = arrayProfundo.flat(Infinity);
console.log(arrayAplanado);




// Es unacombinación de .map() y .flat(), te permite crear un nuevo arreglo 
// accediendo a cada elemento del arreglo, pero también aplica un .flat() 
// a cada elemento.
// Ejemplo:

const productos = [
    {
        nombre: 'Producto 1',
        precio: 20
    },
    {
        nombre: 'Producto 2',
        precio: 30
    },
    {
        nombre: 'Producto 3',
        precio: 40
    }
];

console.log(productos.flatMap(producto => [producto.nombre, producto.precio]));
// Resultado
// (6) ["Producto 1", 20, "Producto 2", 30, "Producto 3", 40]



//flat.map

// Es unacombinación de .map() y .flat(), te permite crear un nuevo arreglo accediendo 
// a cada elemento del arreglo, pero también aplica un .flat() a cada elemento.
// Ejemplo:
const productos2 = [
    {
        nombre: 'Producto 1',
        precio: 20
    },
    {
        nombre: 'Producto 2',
        precio: 30
    },
    {
        nombre: 'Producto 3',
        precio: 40
    }
];

console.log(productos2.flatMap(producto2 => [producto2.nombre, producto2.precio]));
// Resultado
// (6) ["Producto 1", 20, "Producto 2", 30, "Producto 3", 40