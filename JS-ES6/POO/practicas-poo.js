
/*class Coche {
    constructor(marca, modelo, cv) {
        this.marca = marca;
        this.modelo = modelo;
        this.cv = cv;
    }

    cocheTexto() {
        console.log(`El coche es de marca ${this.marca} su modelo es ${this.modelo} y tiene una potencia de ${this.cv}cv!`);
    }
}

const mercedes = new Coche('Mercedes', 'Clase E', 400);

mercedes.cocheTexto(); // Llamar al método cocheTexto en la instancia mercedes


const opel = new Coche('Opel','Zafira',140)

opel.cocheTexto();


class Animal{
    constructor(tipo,raza,edad){
        this.tipo = tipo;
        this.raza = raza;
        this.edad = edad;
    }
    animalTexo(){
        console.log(`El ${this.tipo}, es de raza ${this.raza} y tiene ${this.edad}`);
    }
}

const mono = new Animal('mono','africano',3);
mono.animalTexo();





class Consola{
    constructor(marca, modelo, year){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year; 
    }
    imprime(){
        console.log(`La consola es ${this.marca}, modelo ${this.modelo}  y es del año ${this.year}`)
    }
}

const play1 = new Consola('Sony','ps1', 1998);
play1.imprime();

*/

class Fruta {
    constructor(tipo, precio) {
        this.tipo = tipo;
        this.precio = precio;
    }
    imprime() { //Creo un método para la clase Frutas
        console.log(`La ${this.tipo}, tiene un precio de ${this.precio}`);
    }
}

const manzana = new Fruta('manzana', 33); //Creo  una instancia
manzana.imprime(); //accedo al objeto y utilizo el método imprime
/*

1. **Declaración de la clase `Fruta`**:
   - Definiste una clase llamada `Fruta` con un constructor que acepta dos parámetros: `tipo` y `precio`.
   - El constructor inicializa las propiedades `tipo` y `precio` del objeto creado a partir de la clase.

2. **Método `imprime()`**:
   - Has creado un método llamado `imprime()` dentro de la clase `Fruta`.
   - Este método imprime un mensaje en la consola que muestra el tipo de fruta y su precio utilizando las propiedades `this.tipo` y `this.precio`.

3. **Creación de una instancia `manzana`**:
   - Has creado una instancia de la clase `Fruta` llamada `manzana` utilizando el constructor y proporcionando los valores `'manzana'` y `33` como argumentos.

4. **Llamada al método `imprime()` en la instancia `manzana`**:
   - Has llamado al método `imprime()` en la instancia `manzana`, lo que accede a las propiedades del objeto y muestra el mensaje formateado en la consola.

*/

//this
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

const persona1 = new Persona('Ana');
persona1.saludar(); // "Hola, mi nombre es Ana"

//En este ejemplo, this.nombre hace referencia a 
//la propiedad nombre del objeto actual persona1.

