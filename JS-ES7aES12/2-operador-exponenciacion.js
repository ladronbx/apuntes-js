// Operador de exponenciación
// Permite calcular la potencia de un número.
// Le indicamos el número base y el exponente y nos hará el cálculo elevando el
// número base al exponente.


const base = 3;
const exponente = 10;

// Usando el operador de exponenciación (**)
console.log(base ** exponente); // 59049 (3 elevado a la potencia 10)

// Usando la función Math.pow()
console.log(Math.pow(base, exponente)); // 59049 (3 elevado a la potencia 10)

/*
Utiliza el operador de exponenciación (**) para calcular 
la potencia de un número y luego lo compara con el resultado 
obtenido utilizando la función Math.pow() para el mismo cálculo. 
Ambos enfoques son válidos para calcular la potencia de un número 
a un exponente dado. Aquí tienes una explicación de cómo funciona 
cada parte:

*/