## Herencia ( extends y super )

<aside>
⚠️ La herencia y estos conceptos son fundamentales en la programación orientada a objetos, ya que te permiten crear jerarquías de clases y reutilizar código de manera eficiente.

</aside>

### **Herencia**:

La herencia es un concepto fundamental en la programación orientada a objetos que **permite a una clase (llamada subclase o clase derivada) heredar propiedades y métodos de otra clase (llamada superclase o clase base)**. La idea es que una subclase puede aprovechar y extender el comportamiento de la superclase sin tener que duplicar código.

**`extends`**:
La palabra clave `extends` se usa en JavaScript para **establecer la relación de herencia entre dos clases.** En otras palabras, **una clase que utiliza `extends` se declara como una subclase de la clase que está después de `extends`. La subclase heredará propiedades y métodos de la superclase.**

**`super`**:
`super` es una referencia especial en JavaScript que se utiliza **para acceder y llamar a los métodos y constructores de la superclase**. Permite a **una subclase invocar el constructor de su superclase para inicializar propiedades heredadas.** También se puede utilizar para llamar a métodos heredados en la subclase.

Aquí tienes un ejemplo simplificado para comprender mejor:

```jsx
class Animal { //SUPERCLASE
    constructor(nombre) { //Propiedades construidas de la SUPERCLASE
        this.nombre = nombre;
    }

    saludar() { //método de la SUPERCLASE
        console.log(`Hola, soy un animal llamado ${this.nombre}`);
    }
}

class Perro extends Animal { //extends para establecer relacion de Perro (SUBCLASE) con Animal (SUPERCLASE)
    constructor(nombre, raza) {
        super(nombre); //super : para acceder al constructor nombre de la SUPERCLASE Animal
        this.raza = raza;
    }

    ladrar() {
        console.log('¡Guau, guau!'); //Método unico de la subclase
    }
}

const miPerro = new Perro('Max', 'Golden Retriever');
miPerro.saludar(); // "Hola, soy un animal llamado Max"
miPerro.ladrar(); // "¡Guau, guau!"

```

En este ejemplo, `Animal` es la superclase y `Perro` es la subclase que extiende `Animal`. Usamos `extends` para establecer la herencia. El uso de `super` en el constructor de `Perro` invoca el constructor de `Animal` para inicializar la propiedad `nombre`. El método `saludar()` es heredado de `Animal` y el método `ladrar()` es específico de `Perro`.