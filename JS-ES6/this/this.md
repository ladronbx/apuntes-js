## .this

### `.this` → Hace referencia al contexto donde se ejecuta.


⚠️ **CON `.this` MEJOR NO USAR ARROW FUNCTION!! SIEMPRE PALABRA RESERVADA `function`.**

El "binding" (enlace) en JavaScript se refiere a cómo se establece y se conecta el valor de `this` en una función. `this` es una palabra clave especial que se refiere al objeto actual en el que se está ejecutando una función. Sin embargo, el valor de `this` puede variar dependiendo de cómo se llama y desde dónde se llama una función. **Hay cinco tipos principales de enlace en JavaScript que determinan cómo se establece el valor de `this` en una función:**

1. **Function Invocation (Llamada de Función):**
Cuando una función se llama directamente, el valor de `this` en el contexto de esa función se establece en el objeto global (`window` en el navegador o `global` en Node.js).
    
    ```jsx
    function globalFunction() {
      console.log(this); // En este caso, this apunta al objeto global (window en un navegador).
    }
    
    globalFunction();
    ```
    
2. **Method Invocation (Llamada de Método):**
Cuando una función es un método de un objeto y se llama a través de ese objeto, el valor de `this` se establece en el objeto en el que se llama el método.
    
    ```jsx
    const myObject = {
      property: 'value',
      myMethod() {
        console.log(this.property); // this hace referencia al objeto myObject.
      }
    };
    
    myObject.myMethod();
    ```
    
3. **Constructor Invocation (Llamada de Constructor):**
Cuando una función se usa como un constructor para crear una nueva instancia de un objeto, el valor de `this` se refiere a la nueva instancia que se está creando.
    
    ```jsx
    function Person(name) {
      this.name = name;
    }
    
    const person1 = new Person('Alice');
    console.log(person1.name); // "Alice"
    ```
    
4. **Indirect Invocation (Llamada Indirecta):**
Si se usa `call()`, `apply()` o `bind()` para llamar a una función, el valor de `this` se puede establecer explícitamente como el primer argumento de `call()` o `apply()`, o se puede preconfigurar utilizando `bind()`.
    
    ```jsx
    function greet(message) {
      console.log(`${message}, ${this.name}!`);
    }
    
    const user = { name: 'John' };
    
    greet.call(user, 'Hello'); // "Hello, John!"
    ```
    
5. **Arrow Function (Función de Flecha):**
Las funciones de flecha introducidas en ES6 no tienen su propio `this`. En cambio, heredan el valor de `this` del contexto en el que se definen.
    
    ```jsx
    const myObject = {
      property: 'value',
      regularFunction: function () {
        console.log(this.property); // this se refiere a myObject.
      },
      arrowFunction: () => {
        console.log(this.property); // this no se refiere a myObject, ya que las arrow functions no tienen su propio this.
      }
    };
    
    myObject.regularFunction(); // "value"
    myObject.arrowFunction(); // undefined (o algún otro valor dependiendo del contexto).
    ```
    

Cada uno de estos tipos de enlace determina cómo se establece el valor de `this` en una función y puede influir en cómo se comporta la función en diferentes contextos. Es importante entender los conceptos de enlace para manejar adecuadamente el valor de `this` y evitar errores al programar en JavaScript.