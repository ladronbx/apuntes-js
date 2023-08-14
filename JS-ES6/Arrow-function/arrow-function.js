//Función 'normal' hasta ES6
function sumar (a, b) {
    return a + b;
}

console.log(sumar(5,5));

/* 
**************** 1. Palabra reservada 'function'
**************** 2. Declaramos el nombre de la función "sumar"
**************** 3. Parámetros entres paréntesis "(a, b)"
**************** 4. {
**************** 5. Palabra reservada 'return' + instrucciones "a + b"
**************** 6. }
*/


// ***** ARROW FUNCTION *****

//Arrow function
const multiplicar = (a, b) => {
    return a * b;
}

console.log(multiplicar(5,5));


/* 
Flecha (=>): Esta es la característica distintiva de las Arrow Functions. 
Reemplaza la palabra clave 'function'. En esencia, indica que lo que sigue 
es la definición de una función.
**************** 1. Palabra reservada 'const' (variable constante inmutable)
**************** 2. Declaramos el nombre de la función "multiplicar"
**************** 3. = y parámetros entres paréntesis "(a,b)"
**************** 4. =>
**************** 5. Palabra reservada 'return' + instrucciones "a * b"
**************** 6. }
*/


//Arrow in line
const restar = ( a, b) => a - b

console.log(restar(5,5));

//Arrow in line con un  ÚNICO  parámetro
const elevar = a  => a * a

console.log(elevar(5));






