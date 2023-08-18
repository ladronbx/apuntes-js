// Object.fromEntries

// Ahora puedes tomar arrays de entradas y 
// formar un objeto a partir de ellas con  .fromEntries().
// AhoraAnteriormente, sólo teníamos Object.entries que 
// tomaba un objeto y devolvía una matriz de [KeyboardEvent, value] pares.

const entries = new  Map([
    ['nombre', 'Geek'],
    ['apellido', 'Hubs']
]);

const obj = Object.fromEntries(entries);

console.log(obj); // Object { nombre: "Geek", apellido: "Hubs" }
