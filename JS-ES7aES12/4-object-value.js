// OBJECT VALUES
// Este es otro método añadido a Object. Como el anterior, 
// también recibe un objeto como parámetro y lo que nos 
// devuelve son los valores de las propiedades del objeto pasado:

const obj = {
    test: 1,
    foo: true,
    string: 'nombre'
}

console.log(Object.values(obj));


//DIFERENCIAS ENTRE ENTRIES Y VALUES
/*
- **`Object.entries()`** proporciona una forma de acceder tanto a las 
claves como a los valores de las propiedades del objeto, devolviendo 
arreglos de pares clave-valor.
- **`Object.values()`** se enfoca solo en obtener los valores de las 
propiedades del objeto, sin las claves.

Dependiendo de tu necesidad, puedes elegir uno u otro método. 
Si necesitas trabajar con ambos valores y claves, **`Object.entries()`** 
es más apropiado. Si solo necesitas los valores, **`Object.values()`** es 
la opción adecuada.
*/