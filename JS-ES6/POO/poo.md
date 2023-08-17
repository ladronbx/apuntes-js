## POO ( Programación Orientada a Objetos )

<aside>
⚠️ La **Programación Orientada a Objetos** (POO) es un **concepto que te permite organizar y estructurar tu código de una manera más eficiente**. En JavaScript ES6, puedes usar clases para implementar la POO.

</aside>

### **Clases en JavaScript (ES6):**

<aside>
⚠️ **`Clase`:** Imagina una clase como **un plano o una plantilla para crear objetos. Es como un molde que define cómo se verán y se comportarán los objetos.**

</aside>

Una **`clase`** en JavaScript **es un plano o plantilla para crear objetos con características y comportamientos similares**. Es una **forma de estructurar y organizar el código de manera más orientada a objetos**. Aquí tienes un ejemplo simple:

```jsx
class Animal { //**Se define una clase llamada Animal**
    constructor(nombre, tipo) { //**El constructor acepta dos parámetros:** nombre y tipo. Cuando se crea una nueva instancia de la clase Animal, estos valores se utilizan para inicializar las propiedades nombre y tipo del objeto
        this.nombre = nombre; //Propiedades del objeto: Dentro del constructor, this.nombre y this.tipo se utilizan para asignar los valores de los parámetros nombre y tipo a las propiedades correspondientes del objeto que se está creando.
        this.tipo = tipo; 
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);//**Método hacerSonido():** Fuera del constructor, se define un método llamado hacerSonido(). **Este método no acepta ningún parámetro.** Cuando se llama a este método en una instancia de la clase Animal, imprime un mensaje en la consola utilizando el valor de this.nombre. Por lo tanto, el mensaje impreso incluirá el nombre del animal y la frase "hace un sonido."    }
}

const perro = new Animal('Max', 'perro'); //**Creación de una instancia**: Después de definir la clase Animal, se crea una instancia de esta clase utilizando el constructor. **El objeto resultante se almacena en la variable perro.** Durante la creación de la instancia, se pasa 'Max' como valor para el parámetro
perro.hacerSonido(); // Output: "Max hace un sonido."

```

### **Constructor:**

El constructor es un método especial dentro de una clase que se llama automáticamente cuando se crea una nueva instancia de la clase. **Sirve para inicializar las propiedades del objeto.** En el ejemplo anterior, el constructor es el método `constructor(nombre, tipo)`.

### **Prototype:**

En JavaScript, **cada objeto tiene un enlace al objeto prototype**. El prototype **es un objeto que actúa como modelo para otros objetos, proporcionando propiedades y métodos que los objetos pueden heredar**. En ES6, la implementación de clases hace que el uso directo de prototypes sea menos común, pero en versiones anteriores de JavaScript, era una forma clave de implementar la herencia.

### **Instanciar:**

Instanciar es el **proceso de crear un objeto a partir de una clase**. En el ejemplo anterior, cuando haces `const perro = new Animal('Max', 'perro');`, estás instanciando un objeto `perro` basado en la clase `Animal`.

La POO es un paradigma de programación, una manera de  programar específica, donde se organiza el código en unidades denominadas **clases**, **de las cuales se crean los objetos que se relacionan entre sí para crear el coportamiento de la web.**

En  ES6 mejora la sintaxis de los prototype y usando los clásicos class popularmente aceptados en el resto de lenguajes con POO.

### **Clases VS Objetos**

Las clases y los objetos son conceptos relacionados pero diferentes en la programación orientada a objetos. **Las `clases` son como plantillas o planos para crear objetos con características similares. Los `objetos` son instancias individuales basadas en esas clases.** No es realmente "mejor" usar uno u otro; son componentes complementarios en la POO. Las clases definen la estructura y comportamiento, mientras que los objetos son las instancias concretas que interactúan en tu programa.

En POO hay varias terminologías que tenemos que tener claras para entender el paradigma. 

- Clases: Son  los planos del Objeto.
- Objetos: El medio el cual usamos.
- Instanciar: Es el proceso el cual, usamos una clase para elaborar un objeto. (new)

### Sintaxis de Clase

```jsx
class Tarea {
	constructor(texto, id) {
		console.log('tarea instanciada! con el texto:', texto);
		this.texto = texto;
		this.id = id;
		this.fecha = new Date();
	}

	fechaHoy() {
		this.fecha = new Date();
	}

}
```

```jsx
let tarea = new Tarea('comprar leche', 1); // "tarea instanciada!"

console.log(typeof tarea); // object
console.log(tarea); // Tarea { texto: 'comprar leche', id: 1,
fecha:{} }
```

**Constructor:** Es una función especial dentro de una clase que se ejecuta automáticamente cuando creas un nuevo objeto a partir de esa clase. Es como el proceso de ensamblar un objeto utilizando el molde.

**this:** Es una palabra clave que hace referencia al objeto que se está creando. Te permite acceder y modificar las propiedades del objeto dentro de los métodos de la clase.

Vamos a ver un ejemplo simple:

```jsx
class Mascota {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  saludar() {
    console.log(`¡Hola! Soy ${this.nombre} y soy un ${this.tipo}.`);
  }
}

// Crear objetos a partir de la clase
const perro = new Mascota('Max', 'perro');
const gato = new Mascota('Mittens', 'gato');

// Usar el método para saludar
perro.saludar(); // Resultado: ¡Hola! Soy Max y soy un perro.
gato.saludar(); // Resultado: ¡Hola! Soy Mittens y soy un gato.

```

En este ejemplo, `Mascota` es la clase que tiene un constructor para establecer las propiedades `nombre` y `tipo` cuando se crea un objeto. El método `saludar` utiliza el `this` para acceder a esas propiedades y mostrar un mensaje personalizado.