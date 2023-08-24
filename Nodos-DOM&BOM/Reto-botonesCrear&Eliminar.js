// ## Reto: Crea y elimina elementos dinámicamente

// Crea una vista frontal capaz de agregar elementos o de eliminarlos usando dos 
// botones distintos (uno para añadir y otro para eliminar) que actúen sobre el mismo input. 
// Si eres capaz de crear un tercer botón que elimine por completo todos los 
// elementos estarás rizando el rizo!

//Crear variables
let contenedor = document.getElementById("contenedor");
let elementos = document.getElementsByTagName("li");
//Botones
let crear = document.getElementById("crear");
let eliminarUno = document.getElementById("eliminarUno");
let eliminarTodo = document.getElementById("eliminarTodo");

//cambiar de color los 'elementos'
for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "purple";
}

//Asignar nuevos elementos pulsando botón 'crear'
crear.addEventListener('click', () => {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo Elemento";
    nuevoElemento.style.color = "red";
    //Importante recordar mencionarlo como hijo de 'contenedor'
    contenedor.appendChild(nuevoElemento);
});

//Asignar evento al botón eliminarUno con el objetivo que elimine uno por uno los elementos de  la lista, 
// tanto los 'elementos' como los 'nuevoElemento'
eliminarUno.addEventListener('click', () => { 
    let elementos = document.querySelectorAll("#contenedor li");
    if (elementos.length > 0) {
        elementos[elementos.length - 1].remove();
    }
});


//Asignar evento al botón 'eliminarTodo'
eliminarTodo.addEventListener('click', () => {
    let elementos = document.querySelectorAll("#contenedor li");
    elementos.forEach(item => {
        item.remove();
    });
});