/*
function imprimirMensaje(mensaje, callback) { //2 parámetros. mensaje  y callback
    setTimeout(function() {
      console.log(mensaje);
      callback(); // Llamamos al callback después de imprimir el mensaje
    }, 2000); // Esperamos 2 segundos (simulando una tarea asíncrona)
  }
  
  function mostrarSaludo() {
    console.log("¡Hola, mundo!");//tercero. despues de 2s
  }
  
  imprimirMensaje("Este es un mensaje asincrónico.", mostrarSaludo); //segundo. despues de 2s
  console.log("Este es un mensaje sincrónico."); //primero. inmediatamemnte
  
  // Salida esperada:
  // Este es un mensaje sincrónico.(INMEDIATAMENTE)
  // Este es un mensaje asincrónico. (2s después)
  // ¡Hola, mundo!(2s después)




//   Crea una función llamada sumaAsincrona que tome dos números y un callback. 
//   La función debe simular una tarea asincrónica en la que suma los dos números 
//   después de un retraso de 1 segundo y luego llama al callback con el resultado.

function sumaAsincrona(a, b, callback) {
    setTimeout(function () {
        const resultado = a + b;
        callback(resultado); // Llamamos al callback con el resultado
    }, 1000);
}

console.log("Mensaje sincrónico");

// Llamamos a sumaAsincrona con un callback que imprime el resultado
sumaAsincrona(2, 4, function (resultado) {
    console.log("El resultado es:", resultado);
});
s
  */

// Crea una función contarHasta que tome un número y un callback. 
// La función debe contar desde 1 hasta el número proporcionado, 
// imprimiendo cada número después de un retraso de 500 ms.

function contarHasta(numero, callback) {
    let contador = 1;
    const interval = setInterval(function () {
        console.log(contador);
        contador++;
        if (contador > numero) {
            clearInterval(interval);
            callback();
        }
    }, 500); // Imprimir cada número cada 500 ms
}

function finalizarConteo() {
    console.log("Conteo finalizado.");
}

contarHasta(10, finalizarConteo);
