
//Declarar variables y enlazarlas con los elementos HTML
var amarillo = document.getElementById("fondoAmarillo");
var azul = document.getElementById("fondoAzul");
var rojo = document.getElementById("fondoRojo");



var textoBlanco = document.getElementById("textoBlanco");
var textoNegro = document.getElementById("textoNegro");


//Declarar funciones
function yellow() {
    parrafo.style.backgroundColor = "yellow";
}
function blue() {
    parrafo.style.backgroundColor = "blue";
}
function red() {
    parrafo.style.backgroundColor = "rgb(255, 0, 0)";
}
function textoWhite() {
    parrafo.style.color = "white";
}
function textoBlack() {
    parrafo.style.color = "black";
}


//Agregar evento click
amarillo.addEventListener('click', yellow);
azul.addEventListener('click', blue);
rojo.addEventListener('click', red);
textoBlanco.addEventListener('click', textoWhite);
textoNegro.addEventListener('click', textoBlack);

//Tamaño fuente
var tamanyoGrande = document.getElementById("tamanyoFuenteGrande");
var tamanyoPeque = document.getElementById("tamanyoFuentePeque");
tamanyoGrande.addEventListener('click', function () {
    parrafo.style.fontSize = "40px";
})
tamanyoPeque.addEventListener('click', () => { parrafo.style.fontSize = "20px"; })

//Ocultar y mostrar párrafo
var visible = document.getElementById("visible");
var invisible = document.getElementById("invisible");

visible.addEventListener('click', () => { parrafo.style.visibility = "visible"; });
invisible.addEventListener('click', () => { parrafo.style.visibility = "hidden"; });


var parrafo = document.querySelector(".parrafo");
//Cambiar contenido párrafo
var original = document.getElementById("original");
var cambio = document.getElementById("cambio");

original.addEventListener('click', () => {
    parrafo.textContent = `Este texto cambiará de color cuando se presione un botón. Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dolorem iure quaerat et dolores laborum, voluptates provident facilis.Quos quibusdam earum
quis debitis eius inventore facilis dolore.Officia inventore magnam ratione.
Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo sed sunt illo corrupti tenetur laboriosam
    impedit, eum perspiciatis sequi dignissimos voluptatibus consectetur commodi rerum accusamus reprehenderit,
        doloribus quis laborum voluptates.
Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore officiis commodi mollitia dolorem recusandae
sapiente voluptas facilis labore laborum! Voluptatum nihil debitis dolorem id, iure dolore perferendis
consequatur impedit at ?
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus magnam molestiae saepe, consectetur ea
blanditiis ipsam illum asperiores laboriosam eligendi et ipsum fuga doloribus nulla modi ullam labore in
        veritatis!` });
cambio.addEventListener('click', () => { parrafo.textContent = "Hola, has cambiado el contenido del texto! Si pulsas el botón de  al lado 'ORIGINAL',  volveré a cambiar al texto original! :)" });