
/*
¿Serías capaz de hacer un programa como el que hemos hecho en la kata
que no sea sensible a mayúsculas, palabras con acento y no cuente
espacios?

Es más, ¿podrías ir más allá y realizarlo por tercera vez contando el número
de palabras y letras?
*/
let contadorPalabrasLetras = string => {
    string = string.toLowerCase().replace(/[áéíóúü]/g, 'a');
  
    let palabras = string.split(/\s+/).filter(word => word !== '');
    let letras = string.replace(/\s/g, '').split('');
  
    return {
      palabras: palabras.length,
      letras: letras.length
    };
  };
  
  let resultadoPalabrasLetras = contadorPalabrasLetras("¡Hola, esto es un ejemplo! 123");
  
  console.log(resultadoPalabrasLetras);
  