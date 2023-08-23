## Reto-Investigación: (BOM) Investiga acerca del objeto Window

Te recomiendo que investigues acerca de las propiedades del objeto Window y su uso correspondiente.
Algunos ejemplos de éstas son **frames**, **length** o **defaultStatus**.

El objeto `window` en JavaScript representa la ventana del navegador y proporciona acceso a muchas propiedades y métodos que permiten interactuar con la ventana y su contenido. Aquí tienes algunos ejemplos de propiedades y métodos del objeto `window` junto con una breve explicación y ejemplos de uso:

1. **`window.frames`**: Proporciona acceso a los marcos (frames) contenidos en la ventana. Un marco es un elemento HTML que puede contener otra página web.
    
    Ejemplo:
    
    ```jsx
    // Acceder a un marco por su nombre o índice
    var iframe = window.frames["nombreDelMarco"];
    
    ```
    
2. **`window.length`**: Devuelve la cantidad de marcos en la ventana.
    
    Ejemplo:
    
    ```jsx
    // Obtener el número de marcos en la ventana
    var numberOfFrames = window.length;
    
    ```
    
3. **`window.defaultStatus`**: Establece o devuelve el mensaje de estado predeterminado para la barra de estado del navegador.
    
    Ejemplo:
    
    ```jsx
    // Establecer el mensaje de estado predeterminado
    window.defaultStatus = "¡Bienvenido a mi sitio web!";
    
    ```
    
4. **`window.location`**: Proporciona información sobre la URL actual de la ventana y permite redirigir a otras páginas.
    
    Ejemplo:
    
    ```jsx
    // Redirigir a una URL diferente
    window.location.href = "<https://www.ejemplo.com>";
    
    ```
    
5. **`window.open()`**: Abre una nueva ventana o pestaña del navegador con las opciones especificadas.
    
    Ejemplo:
    
    ```jsx
    // Abrir una nueva ventana
    var nuevaVentana = window.open("<https://www.ejemplo.com>", "_blank", "width=500,height=300");
    
    ```
    
6. **`window.alert()`**: Muestra un cuadro de diálogo de alerta con el mensaje especificado.
    
    Ejemplo:
    
    ```jsx
    // Mostrar una alerta al usuario
    window.alert("¡Hola, mundo!");
    
    ```
    
7. **`window.confirm()`**: Muestra un cuadro de diálogo de confirmación con un mensaje y botones "Aceptar" y "Cancelar".
    
    Ejemplo:
    
    ```jsx
    // Mostrar un cuadro de confirmación y obtener la respuesta del usuario
    var respuesta = window.confirm("¿Estás seguro?");
    
    ```
    
8. **`window.prompt()`**: Muestra un cuadro de diálogo de entrada donde el usuario puede ingresar texto.
    
    Ejemplo:
    
    ```jsx
    // Solicitar al usuario que ingrese su nombre
    var nombre = window.prompt("Por favor, ingresa tu nombre:");
    
    ```
    
9. **`window.scrollTo()`**: Desplaza la ventana hasta una posición específica en la página.
    
    Ejemplo:
    
    ```jsx
    // Desplazar la ventana a la posición vertical 500
    window.scrollTo(0, 500);
    
    ```
    
10. **`window.innerWidth` y `window.innerHeight`**: Devuelven el ancho y alto del área visible de la ventana del navegador.
    
    Ejemplo:
    
    ```jsx
    // Obtener el ancho y alto de la ventana del navegador
    var ancho = window.innerWidth;
    var alto = window.innerHeight;
    
    ```
    

Estos son solo algunos ejemplos de las propiedades y métodos disponibles en el objeto `window`. El objeto `window` es una parte esencial del BOM y proporciona una amplia gama de capacidades para interactuar con la ventana y el entorno del navegador.