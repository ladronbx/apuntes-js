/*
Convertir a Mayúsculas:
Escribe una Arrow Function que tome una cadena como parámetro y la convierta en mayúsculas.
*/



const mayuscula = texto => texto.toUpperCase();
console.log(mayuscula("este texto deberia convertirse a mayuscula"));



/*
********** EXPLICACIÓN PASO A PASO **********
1. Palabra reservada 'const': const es una palabra reservada en JavaScript que se utiliza 
para declarar una variable constante. Una vez que se le asigna un valor, no puede ser 
reasignado a otro valor.

2. Declaramos esta variable constante con el nombre 'mayuscula': En este paso, estamos declarando
 una variable constante llamada mayuscula. Esta variable se utilizará para almacenar la Arrow 
 Function que se está definiendo a continuación.

3. A continuación, le añadimos el símbolo '=' para asignarle un valor a esta variable constante:
 Después del símbolo '=', estamos asignando un valor a la variable mayuscula. El valor que estamos 
 asignando es la Arrow Function que sigue.

4. 'texto': En la Arrow Function, texto es un parámetro que le estamos 
ando a la función. Este parámetro representa la cadena que pasaremos a la función para convertir a mayúsculas.

5. '=>' : es la sintaxis de la Arrow Function: Después del parámetro texto, usamos el símbolo '=>' para indicar 
que lo que sigue es el cuerpo de la función.

6. 'texto.toUpperCase();' es el cuerpo de la Arrow Function: Aquí estamos utilizando el método toUpperCase() 
en el parámetro texto, que es la cadena que pasamos como argumento. Este método convierte todos los 
caracteres de la cadena en letras mayúsculas.

7. 'console.log(...)': Esto se utiliza para imprimir el resultado en la consola. Estamos llamando a la Arrow Function 
mayuscula con la cadena "este texto deberia convertirse a mayuscula" como argumento y pasando su resultado 
a console.log() para imprimirlo.

*/