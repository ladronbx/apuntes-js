/*
Vamos a desarrollar un programa, que a partir
de una lista de películas, diga al usuarios que
películas pueden ver o no, según estas reglas.

1. La edad del usuario tiene que ser mayor o
igual a la edad recomendada de la película.

2. Por seguridad, se necesita, nombre, edad.



Listado de Películas:
1. Soy Leyenda, +13
2. Rey León, +3
3. La Marca del Demonio +18
4. A todo Gas +8
*/
var nombre = prompt('Introduce tu nombre: ');
var edadUsuario = Number(prompt('¿Qué edad tienes?'));
var pelisPermitidas = [];

var listaPeliculas = [
    {titulo: 'Soy Leyenda', edad: 13},
    {titulo: 'Rey León', edad: 3},
    {titulo: 'La Marca del Demonio', edad: 18},
    {titulo: 'A todo Gas', edad: 8},
];

for (var i = 0; i < listaPeliculas.length; i++) {
    if (edadUsuario >= listaPeliculas[i].edad) {
        pelisPermitidas.push(listaPeliculas[i].titulo);
    }
}

document.write(nombre + ' puede ver las siguientes pelis: ' + pelisPermitidas.join(', '));
