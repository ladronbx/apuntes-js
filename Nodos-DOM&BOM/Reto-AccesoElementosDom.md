## Reto-Investigación: Acceso a elementos del  DOM

Estudia acerca de las propiedades innerText , innerHTML, textContent y value. Una vez domines el significado de ellas, ¿serías capaz de introducir contenido en el DOM usando **innerHTML**?

1. **innerText:**
La propiedad `innerText` devuelve o establece el contenido de texto visible de un elemento, incluyendo el texto y el formato de línea, pero excluyendo cualquier contenido HTML. Esta propiedad solo muestra el texto visible, omitiendo los elementos HTML.

Ejemplo:

```html
<p id="myParagraph">Texto <span>con HTML</span></p>

```

```
let paragraph = document.getElementById("myParagraph");
console.log(paragraph.innerText); // Resultado: "Texto con HTML"

```

1. **innerHTML:**
La propiedad `innerHTML` devuelve o establece el contenido HTML de un elemento, incluyendo cualquier etiqueta HTML y su contenido. Esto significa que puedes agregar o modificar elementos y contenido HTML.

Ejemplo:

```html
<div id="myDiv">Contenido <span>original</span></div>

```

```
let div = document.getElementById("myDiv");
div.innerHTML = "Nuevo contenido <strong>modificado</strong>";

```

1. **textContent:**
La propiedad `textContent` devuelve o establece el contenido de texto de un elemento, incluyendo todo el texto dentro del elemento, pero excluyendo cualquier contenido HTML y el formato de línea.

Ejemplo:

```html
<p id="myParagraph">Texto <span>con HTML</span></p>

```

```jsx
let paragraph = document.getElementById("myParagraph");
console.log(paragraph.textContent); // Resultado: "Texto con HTML"

```

1. **value:**
La propiedad `value` se utiliza principalmente con elementos de formulario (como `input` y `textarea`). Devuelve o establece el valor actual del elemento de formulario.

Ejemplo:

```html
<input type="text" id="myInput" value="Valor inicial">

```

```jsx
let input = document.getElementById("myInput");
console.log(input.value); // Resultado: "Valor inicial"

```

- Con la propiedad `innerHTML` puedes introducir contenido en el DOM. Por ejemplo:
    
    ```html
    <div id="myContainer"></div>
    
    ```
    
    ```jsx
    let container = document.getElementById("myContainer");
    container.innerHTML = "<p>Nuevo contenido</p>";
    
    ```
    
    Recuerda que aunque `innerHTML` es poderosa para manipular el contenido HTML, también puede ser vulnerable a ataques de scripts maliciosos si se utiliza con contenido no confiable. Siempre es recomendable validar y escapar el contenido antes de insertarlo en el DOM para garantizar la seguridad de tu aplicación web.