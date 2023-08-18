// Iteración asíncrona
// Se ha introducido el await para bucles for , lo cual permite iterar sobre iterables
// asíncronos (promesas). Se tiene que utilizar dentro de funciones asíncronas como
// cualquier await , tal como ya vimos sobre async/await.
// El bucle quedaría así:

for await (const variable of iterable) {
}