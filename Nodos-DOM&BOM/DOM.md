# DOM

El DOM te permite interactuar y manipular los elementos de una página HTML mediante JavaScript. Puedes acceder a los nodos, modificar su contenido, agregar o eliminar nodos, cambiar estilos, atributos y mucho más. **Esta interacción entre el DOM y JavaScript es lo que permite crear páginas web dinámicas e interactivas.**

Recuerda que puedes usar métodos como **`document.querySelector`**, **`document.createElement`**, **`parentNode.appendChild`**, entre otros, para acceder y manipular los nodos en el DOM.

## ¿Qué es el DOM?

<aside>
🔥 **Esencialmente, comunica el contenido de la web (HTML) con los lenguajes de programación (JS) dotando de lógica a la web.**

</aside>

El Modelo de Objetos del Documentos (DOM) es un API o interfaz para programación de aplicaciones  de documentos HTML y XML.

Es una representación estructural del documento permitiendo la modificación de su contenido o su presentación visual.

La estructura del DOM  está compuesta por un conjunto de **NODOS**. 

![Captura de pantalla 2023-08-23 a las 11.32.47.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40c24578-fcd8-4da1-acde-140f43755f00/Captura_de_pantalla_2023-08-23_a_las_11.32.47.png)

## ¿Qué es un NODO?

<aside>
🔥   **Interfaz Padre de la que después heredan y se desarrollan el resto de elementos que nos encontramos en el árbol del DOM.**

</aside>

**Existen varios tipos de NODOS:**

- **Document** → **Representa todo el HTML** →**Nodo raíz del que derivan todos los demás nodos del árbol.**
- **Element** → **Representa a cada etiqueta de HTML** →  Representa las etiquetas HTML en el documento. Por ejemplo, los elementos **`<div>`**, **`<p>`**, **`<h1>`**, **`<a>`**, etc. son nodos de elemento. **Los nodos de elemento pueden tener nodos secundarios, que son los hijos.**
- **Attr.** → **Representa a los atributos de las etiquetas de HTML** → Ejemplo, en **`<a href="https://www.ejemplo.com">`**, el atributo **`href`** sería un nodo de atributo. **Los nodos de atributo son parte de los nodos de elemento.**
- **Text** → **Representa al texto que contiene las etiquetas HTML** → Ejemplo, si tienes **`<p>Este es un párrafo</p>`**, el "Este es un párrafo" se convierte en un nodo de texto. **Los nodos de texto son hijos de los nodos de elemento.**
- **Comment** → **Representa los comentarios  incluidos en el HTM**L.  → Ejemplo, **`<!-- Esto es un comentario -->`** crea un nodo de comentario en el árbol DOM. **Los nodos de comentario no afectan la visualización en la página y son útiles para anotaciones en el código.**

![Imagen nodos](nodos.png)
