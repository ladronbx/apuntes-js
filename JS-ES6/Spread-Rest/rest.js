/*
Rest: Son una forma de capturar un número variablede argumentos en una función.

Ejemplo: 
Una función que multiplique pero no sabemos cuantos argumentos introduciremos


function multi(...numbers) {
    if (numbers.length === 0) {
      return 0; // Si no se pasan argumentos, devolvemos 0
    }
    
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
      result *= numbers[i]; // result = result * numbers[i]
    }
    
    return result;
  }
  
  console.log(multi(2, 2)); // Devuelve 24 (2 * 3 * 4)
  console.log(multi(5, 6));    // Devuelve 30 (5 * 6)
  console.log(multi());        // Devuelve 0 porque no se pasaron argumentos



Ejemplo:  
Una función que reste pero no sabemos cuantos argumentos introduciremos


*/
function resta(...numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}

console.log(resta(7, 5));


/*
¿Por qué en la función que se multiplica se inicializa 'let result = 1;' 
y en cambio en la función resta 'let result = numbers[0];'?

La diferencia en cómo se inicializan las variables `result` en las 
funciones `multi` y `resta` se debe a la operación que se realiza en cada caso 
y cómo afecta el valor inicial.

**En la función `multi`:**

En la función `multi`, estás multiplicando una serie de números. 
Cuando quieres multiplicar una secuencia de números, si inicias 
`result` en 0, el resultado siempre sería 0, ya que cualquier 
número multiplicado por 0 da como resultado 0. Por eso, en el caso 
de multiplicación, se inicia `result` en 1, que es el valor neutro 
en multiplicación. De esta manera, cuando el bucle comienza a multiplicar 
números, empieza con un valor que no alterará el resultado.

**En la función `resta`:**

En la función `resta`, estás restando una serie de números. Si iniciases 
`result` en 0, todos los números que resta tendrían un valor absoluto más 
grande que el resultado, lo que no es lo que deseas en una operación de resta. 
Por ejemplo, si tienes `7 - 5`, comenzar con `result` en 0 daría como 
resultado -5, lo cual no es correcto. En cambio, inicias `result` en el primer 
número del array (`numbers[0]`), para que la resta comience con el primer 
número y luego el bucle reste los números siguientes.

Para aclarar más esto, en una resta, si comienzas con `result` en 0, 
estarías realizando la resta acumulativa de los números. Al iniciar 
`result` con el primer número del array, estableces la base correcta 
para la operación de resta.

En resumen, las diferencias en cómo se inicializa `result` en las 
funciones `multi` y `resta` se deben a las propias 
operaciones (multiplicación y resta) y cómo se afecta el cálculo 
resultante al usar un valor inicial específico.
*/