//Includes en array
//Sirve para buscar en un  array. ¡¡¡IMPORTANTE SÓLO EN ARRAYS!!!
/*


//¿Diferencia con indexOf() ?

indexOf(): Es útil cuando necesitas el índice exacto del
            elemento buscado. Puedes usarlo para buscar el índice y 
            luego acceder a ese elemento si es necesario.

array.includes(): Es más sencillo cuando solo necesitas 
                verificar si un elemento está presente en el arreglo. 
                No te preocupas por el índice en este caso.


*/


const array = ['a','b','c','d'];

console.log(array.indexOf('b')); //1
console.log(array.includes('b')); //true

