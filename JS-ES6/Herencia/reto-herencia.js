/*
Serías capaz de crear la estructura para un simulador 
de carreras de coche con las diferentes
características:

-Circuitos:
 *No de Vueltas
 *Km Por Vueltas

-Coches:
 *Velocidad (Random)
 *Gasolina.
 *Tiempo de Repostaje.
 *Duración de los Neumáticos.

 Debes de usar Clases y Herencia, la forma de mostrar 
los datos y la “jugabilidad” quedan a tu elección.
Es un reto que te llevará tiempo pero estoy seguro 
de que lo conseguirás.
*/

class Circuito {
    constructor(nombre, vueltas, kmPorVuelta) {
        this.nombre = nombre;
        this.vueltas = vueltas;
        this.kmPorVuelta = kmPorVuelta;
    }
}

class Coche {
    constructor(nombre) {
        this.nombre = nombre;
        this.velocidad = Math.floor(Math.random() * 200) + 100; // Velocidad en km/h
        this.gasolina = 100; // Nivel de gasolina en porcentaje
        this.tiempoRepostaje = 10; // Tiempo en segundos para repostar
        this.duracionNeumaticos = 3; // Duración en vueltas
    }

    conducir(vueltas) {
        console.log(`${this.nombre} está conduciendo en el circuito...`);
        for (let i = 1; i <= vueltas; i++) {
            if (this.gasolina <= 0) {
                console.log(`¡${this.nombre} se quedó sin gasolina en la vuelta ${i}!`);
                break;
            }
            if (i % this.duracionNeumaticos === 0) {
                console.log(`${this.nombre} cambió neumáticos en la vuelta ${i}`);
            }
            this.gasolina -= this.kmPorVuelta * this.vueltas / 10;
        }
        console.log(`${this.nombre} completó las ${vueltas} vueltas.`);
    }
}

class CocheRapido extends Coche {
    constructor(nombre) {
        super(nombre);
        this.velocidad += 50; // Aumentamos la velocidad para coches rápidos
    }
}

// Crear un circuito
const circuito = new Circuito("Circuito de Prueba", 10, 5);

// Crear coches
const coche1 = new Coche("Coche A");
const coche2 = new CocheRapido("Coche B");

// Simulación de carreras
coche1.conducir(circuito.vueltas);
coche2.conducir(circuito.vueltas);
