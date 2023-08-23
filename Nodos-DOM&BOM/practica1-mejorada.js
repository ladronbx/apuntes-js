var parrafo = document.querySelector(".parrafo");

// Cambiar estilo de fondo
function changeBackgroundColor(color) {
    parrafo.style.backgroundColor = color;
}

// Cambiar color de texto
function changeTextColor(color) {
    parrafo.style.color = color;
}

// Cambiar tamaño de fuente
function changeFontSize(size) {
    parrafo.style.fontSize = size + 'px';
}

// Mostrar u ocultar párrafo
function toggleVisibility() {
    parrafo.style.visibility = (parrafo.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

// Cambiar contenido del párrafo
function changeContent(content) {
    parrafo.textContent = content;
}

// Evento de escucha en el contenedor de botones
var buttonsContainer = document.getElementById("buttons-container");
buttonsContainer.addEventListener('click', function (event) {
    var buttonId = event.target.id;
    switch (buttonId) {
        case "fondoAmarillo":
            changeBackgroundColor("yellow");
            break;
        case "fondoAzul":
            changeBackgroundColor("blue");
            break;
        case "fondoRojo":
            changeBackgroundColor("red");
            break;
        case "textoBlanco":
            changeTextColor("white");
            break;
        case "textoNegro":
            changeTextColor("black");
            break;
        case "tamanyoFuenteGrande":
            changeFontSize(40);
            break;
        case "tamanyoFuentePeque":
            changeFontSize(20);
            break;
        case "visible":
        case "invisible":
            toggleVisibility();
            break;
        case "original":
            changeContent(`Este texto cambiará de color cuando se presione un botón. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolorem iure quaerat et dolores laborum, voluptates provident facilis. Quos quibusdam earum
            quis debitis eius inventore facilis dolore. Officia inventore magnam ratione.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed sunt illo corrupti tenetur laboriosam
            impedit, eum perspiciatis sequi dignissimos voluptatibus consectetur commodi rerum accusamus reprehenderit,
            doloribus quis laborum voluptates.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis commodi mollitia dolorem recusandae
            sapiente voluptas facilis labore laborum! Voluptatum nihil debitis dolorem id, iure dolore perferendis
            consequatur impedit at?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus magnam molestiae saepe, consectetur ea
            blanditiis ipsam illum asperiores laboriosam eligendi et ipsum fuga doloribus nulla modi ullam labore in
            veritatis!`);
            break;
        case "cambio":
            changeContent("Hola, has cambiado el contenido del texto! Si pulsas el botón de al lado 'ORIGINAL', volveré a cambiar al texto original! :)");
            break;
    }
});
