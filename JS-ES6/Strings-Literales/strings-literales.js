/*
USO DE PLANTILLAS
Se puede sustituir valores dentro de un string sin necesidad de estar 
concatenando. De forma que yo puedo tener una plantilla de texto y
sustituir variables dentro de ella de manera sencillla.
*/

/*
Ejemplo -> Le preguntamos al usuario Nombre y apellidos y 
si lo hacemos como hasta ahora sería concatenando. De esta manera:
*/

var nombre = prompt("Introduce tu nombre: ");
var apellidos = prompt("Introduce tus apellidos: ");
var texto = "Mi nombre es "+nombre+".<br/> Y mis apellidos son: "+apellidos+".";

document.write(texto);

/*
Ejemplo -> Usando la plantilla sería de esta manera:
Se evita concatenar. Y se queda limpio el código
*/

var nombre2 = prompt("Introduce tu nombre: ");
var apellidos2 = prompt("Introduce tus apellidos: ");
var texto2 = `
    <h1>Hola qué tal</h1>
    <h3>Mi nombre es:  ${nombre2}</h3>
    <h3>Mis apellidos son: ${apellidos2}</h3>
`;

document.write(texto2);
