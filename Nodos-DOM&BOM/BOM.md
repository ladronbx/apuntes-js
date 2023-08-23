## ¿Qué es el BOM?

<aside>
🔥 **El objeto window representa la ventana completa del navegador. Mediante este objeto, es posible mover, redimensionar y manipular la ventana actual del navegador. Incluso es posible abrir y cerrar nuevas ventanas de navegador.**

</aside>

El BOM (Browser Object Model - Modelo de Objeto del Navegador) consiste como bien indica su nombre, en un navegador de objetos, en este caso de JavaScript. Éste contiene los elementos navegador, historia, pantalla,  localización y document,  éstos a su vez son hijos del nodo window. En el NODO document (documento) se encuentra el DOM (Modelo de Objetos de Documento), modelo de objeto de documento, que representa el contenido de la página. Puedes manipularlo usando JS.

El BOM (Browser Object Model) es una parte del navegador que proporciona una interfaz para interactuar con la ventana del navegador. Este modelo permite a los desarrolladores acceder y manipular aspectos relacionados con la ventana y el entorno del navegador, como la manipulación de ventanas, el historial de navegación, la pantalla, la ubicación y más.

**El objeto window representa la ventana completa del navegador. Mediante este objeto, es posible mover, redimensionar y manipular la ventana actual del navegador. Incluso es posible abrir y cerrar nuevas ventanas de navegador:**

```jsx
mywindow = window.open('','','width=200, height=100'); //abrir ventana
mywindow.document.write('Hola, Mundo!'); ((escribir contenido en la ventana
mywindow.moveBy(250, 250);//moverla ventana
mywindow.focus();//enfocar la ventana
```

En el código se explica cómo se puede usar el objeto `window` del BOM para realizar diversas acciones en la ventana del navegador:

1. **Abrir una nueva ventana:** Utilizando el método `window.open()`, puedes abrir una nueva ventana del navegador. En el ejemplo proporcionado, se crea una nueva ventana sin URL específica (`''`) y se define su tamaño mediante las propiedades `width` y `height`. El resultado es que se abre una ventana con las dimensiones especificadas.
2. **Escribir contenido en la ventana:** Una vez que has abierto una nueva ventana, puedes utilizar el objeto `document` de esa ventana para escribir contenido en ella. En el ejemplo, se utiliza `mywindow.document.write()` para insertar el texto "Hola, Mundo!" en la ventana recién abierta.
3. **Mover la ventana:** El método `moveBy()` se utiliza para mover la ventana abierta en función de las coordenadas especificadas. En el ejemplo, se mueve la ventana en 250 píxeles en ambas direcciones horizontal y vertical.
4. **Enfocar la ventana:** Mediante el método `focus()`, puedes enfocar la ventana abierta, lo que significa que se traerá al frente y estará lista para recibir interacciones del usuario.

En resumen, este fragmento de código ilustra cómo el BOM permite abrir una nueva ventana del navegador, escribir contenido en ella, moverla y enfocarla utilizando los métodos y propiedades proporcionados por el objeto `window`. El BOM es una herramienta poderosa para interactuar con la ventana y el entorno del navegador, y es esencial para la creación de ventanas emergentes, control de ventanas y más.