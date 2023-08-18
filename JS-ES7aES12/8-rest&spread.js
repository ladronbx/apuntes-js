// REST & SPREAD NOVEDADES ES9
// Básicamente, viene a ser lo mismo que se puede hacer con los parámetros de las
// funciones y los arrays desde ES6, pero con propiedades de objetos:


// Rest en objetos
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

// Rest en arrays
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...restNumbers] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(restNumbers); // Output: [3, 4, 5]

// Spread en objetos
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const contactInfo = {
    email: 'john@example.com',
    phone: '123-456-7890'
};

// Usando el operador de Spread para combinar las propiedades de person y contactInfo en mergedPerson
const mergedPerson = { ...person, ...contactInfo };

console.log(mergedPerson);
// Output: { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890' }

// Spread en arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]