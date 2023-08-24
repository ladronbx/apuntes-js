//1. Cambiar el contenido de los párrafos con .getElementByTagName()
//se necesita iterar los elementos p con un bucle for
let parrafos = document.getElementsByTagName("p");

for(let i = 0; i < parrafos.length; i++ ){
    parrafos[i].textContent = "Hola, me han modificado con js";
}

//2. Cambiar de color todos los botones que encuentre en el html
let botones = document.getElementsByClassName("boton");
for(let i  = 0; i < botones.length; i++){
    botones[i].addEventListener('click', () => {
        botones[i].style.background = "yellow";
    });
};

// 3.  getElementById(): Encuentra un elemento con un id "miElemento" y cambia su texto interno a 
//"¡Soy un elemento especial!".
let  elementoEspecial = document.getElementById("miElemento");
elementoEspecial.textContent = "¡Soy un elemento especial!";

// 4. getElementsByName(): Encuentra todos los elementos con el atributo name igual a "correo"
//  y cambia su atributo `placeholder` a "Ingresa tu correo".
let mail = document.getElementsByName("correo");
for(let i = 0; i < mail.length; i++){
    mail[i].placeholder = "Ingresa tu correo";
}

// 5. querySelector(): Selecciona el primer elemento de clase "destacado" y cambia su tamaño de fuente a 20px.
let destaca = document.querySelector(".destacado");
destaca.style.fontSize = "20px";

// 6. querySelectorAll(): Selecciona todos los elementos 
// `<a>` que tengan el atributo `href` que comience con "https" y agrega la clase "enlace-externo".


// 6. querySelectorAll(): Selecciona todos los elementos <a> que tengan el atributo href que comience con "https" y agrega la clase "enlace-externo".
let enlacesExternos = document.querySelectorAll('a[href^="https"]');
enlacesExternos.forEach(enlace => {
    enlace.classList.add('enlace-externo');
});


// 7. element.appendChild(): Crea un nuevo elemento `<li>`, agrega el texto "Nuevo ítem" y agrégalo 
// como último elemento en una lista desordenada `<ul>` existente.