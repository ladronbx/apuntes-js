## ¿Qué es la Asincronía? ¿Para qué sirve?

En programación muchas veces nos enontramos con tareas que pueden llevar tiempo en ejecutarse, como cargar datos de un servidor , realizar operaciones intensivas en recursos o esperar respuesta de otros sistemas. En un enfoque de programación **sincrónica**, tu código esperaría a que cada una de estas tareas se complete antes de continuar con la siguiente. **Esto puede ser problemático**, especialmente si una tarea lleva mucho tiempo, ya que bloquearía la ejecución de tu programa y haría que parezca que está "congelado" hasta que la tarea termine.

**Aquí es donde entra en juego la programación asíncrona.** *En lugar de esperar a que una tarea larga termine antes de pasar a la siguiente, puedes iniciar una tarea y permitir que tu programa continúe ejecutando otras acciones*. Una vez que la tarea asíncrona haya finalizado, se manejará el resultado o la respuesta en el momento adecuado.

**Un concepto clave en la programación asíncrona de JavaScript son las "funciones de devolución de llamada" (`callbacks`) y las "`promesas`".** Las funciones de devolución de llamada son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete una tarea. Las promesas son objetos que representan la eventual finalización (o falla) de una operación asíncrona y permiten un flujo más estructurado y legible.

- Cargar datos de un servidor
    
    Se refiere  al proceso de enviar información desde una fuente,  como un cliente (como una app web, una app móvil,...) a un servidor. Los servidores son computadoras poderosas diseñadas para almacenar, procesar y gestionar información, y se utilizan en una variedad de aplicaciones y servicios en línea. 
    
- Realizar operaciones intensivas en recursos
    
    Se refiere  a tareas que requieren una cantidad significativa  de recursos de hardware, como poder de procesamiento o memoria para llevarse a cabo. Estas operaciones pueden ser computacionalmente costosas y, **si se realizan de manera sincrónica, podrían bloquear la ejecución de otras partes del programa, haciéndolo sentir lento o congelado.**
    
    Ejemplo:
    Imagina una aplicación de edición de imágenes que debe aplicar filtros complicados a una imagen de alta resolución. Estos filtros podrían requerir una gran cantidad de cálculos matemáticos y procesamiento de píxeles. Si se realizan de manera sincrónica, la aplicación quedaría bloqueada durante el tiempo que lleva aplicar el filtro, lo que haría que la interfaz de usuario no responda. En cambio, si se realizan de manera asíncrona, la aplicación podría iniciar la operación de filtrado y continuar respondiendo a las interacciones del usuario mientras se procesa la imagen en segundo plano.
    
- Esperar respuesta de otros sistemas
    
    En muchos sistemas y aplicaciones, es común interactuar con servicios externos, como bases de datos, APIs de terceros o sistemas de archivo. **A veces, estas interacciones pueden ser lentas debido a la latencia de red o la carga del sistema externo. Si estas interacciones se manejan de manera sincrónica, tu programa tendría que esperar hasta que se obtenga una respuesta antes de continuar.**
    
    **Ejemplo**:
    Imagina una aplicación de clima que recopila datos en tiempo real de una API meteorológica en línea. Si se hace una solicitud sincrónica para obtener los datos del clima y la API tiene un tiempo de respuesta lento, la aplicación se bloquearía mientras espera la respuesta. Sin embargo, **si se maneja de manera asíncrona, la aplicación podría enviar la solicitud a la API y seguir respondiendo a otras interacciones mientras espera la respuesta. Una vez que se obtengan los datos del clima, se pueden actualizar en la interfaz de usuario.**
    


🔥 *La **programación asíncrona** es útil en estos casos porque permite que el programa siga siendo receptivo y utilizable incluso cuando hay tareas que llevan tiempo. Esto mejora la experiencia del usuario al evitar bloqueos y tiempos de espera prolongados.*
