## Reto-Investigación: (DOM) Investiga sus métodos y propiedades

Sería muy útil que investigues acerca de los métodos y propiedades del DOM (Document Object Model)

Algunos de los más interesantes a buscar y que más uso tienen serían:

- **createElement(),**
- **documentElement,**
- **getElementById() o finalmente querySelector().**

## 1. `createElement()`

El método `createElement()` se utiliza para crear un nuevo elemento HTML en el DOM. Puedes crear elementos como `<div>`, `<p>`, `<img>`, etc., y luego manipularlos y agregarlos a la página.

```jsx
// Crear un elemento <p>
const nuevoParrafo = document.createElement("p");

// Agregar contenido al párrafo
nuevoParrafo.textContent = "¡Este es un nuevo párrafo!";

// Agregar el párrafo al cuerpo del documento
document.body.appendChild(nuevoParrafo);

```

## 2. `documentElement`

La propiedad `documentElement` proporciona acceso al elemento raíz del documento, que suele ser el elemento `<html>`. Esto puede ser útil para acceder a propiedades y atributos del elemento `<html>`.

```jsx
// Acceder al elemento <html> del documento
const elementoHtml = document.documentElement;

// Cambiar el color de fondo del elemento <html>
elementoHtml.style.backgroundColor = "lightgray";

```

## 3. `getElementById()` y `querySelector()`

Estos métodos se utilizan para seleccionar elementos del DOM en función de su identificador o selector CSS. `getElementById()` selecciona elementos por su atributo `id`, mientras que `querySelector()` permite usar selectores CSS más generales.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Seleccionar Elementos</title>
</head>
<body>
    <div id="miDiv">Este es un div con id.</div>
    <p class="parrafo">Este es un párrafo con clase.</p>

    <script>
        // Usando getElementById()
        const divConId = document.getElementById("miDiv");
        divConId.textContent = "¡Cambié el contenido del div con id!";

        // Usando querySelector()
        const parrafoConClase = document.querySelector(".parrafo");
        parrafoConClase.textContent = "¡Cambié el contenido del párrafo con clase!";
    </script>
</body>
</html>

```

En este ejemplo, `getElementById()` selecciona el elemento con el `id="miDiv"` y `querySelector()` selecciona el elemento con la clase `parrafo`.

## Otros Métodos y Propiedades Interesantes

Aquí tienes algunos métodos y propiedades adicionales del DOM que son útiles y populares:

- `appendChild()`: Agrega un nodo hijo al final de un elemento.
- `removeChild()`: Elimina un nodo hijo de un elemento.
- `setAttribute()`: Establece un atributo en un elemento.
- `addEventListener()`: Agrega un controlador de eventos a un elemento.
- `classList`: Propiedad para trabajar con clases CSS en un elemento.
- `innerHTML` y `textContent`: Propiedades para obtener o establecer el contenido HTML o texto de un elemento.