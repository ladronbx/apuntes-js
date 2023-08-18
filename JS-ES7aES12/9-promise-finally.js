// PROMISE .finally()

// .finally() es una función introducida en las promesas que se ejecutará siempre al
// finalizar la promesa, es decir, se ejecutará tanto si la promesa se ejecuta con éxito
// o es rechazada.
// Por tanto, ahora tendríamos tres posibles funciones callback para las promesas
// que serían .then(), .catch() y .finally().


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
    .finally(() => console.log('Esto se mostrará siempre!'));