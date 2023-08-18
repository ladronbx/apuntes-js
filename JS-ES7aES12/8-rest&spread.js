// REST & SPREAD NOVEDADES ES9
// Básicamente, viene a ser lo mismo que se puede hacer con los parámetros de las
// funciones y los arrays desde ES6, pero con propiedades de objetos:

const obj = {
    name: 'John',
    age: 32,
    city: 'New York',
    address: 'Address...'
};

const { name, age, ...rest } = obj;

console.log(name); // Output: John
console.log(age); // Output: 32
console.log(rest); // Output: { city: 'New York', address: 'Address...' }

