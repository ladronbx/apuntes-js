/*
Crea un Objeto Vehículo el cual aproveches la
herencia para crear Coche, Moto, Patin y Bicicleta.
Con Características:
+ Marca
+ Matricula
+ No Ruedas
+ No Puertas
+ Años
+ Velocidad
+ Correr() => velocidad += 10
+ Frenar() => velocidad = 0
+ Aparcar() => console.log(Aparcao!!)
*/

class Vehiculos {
    constructor(marca, matricula, nruedas, npuertas, anyos, velocidad) {
        this.marca = marca;
        this.matricula = matricula;
        this.nruedas = nruedas;
        this.npuertas = npuertas;
        this.anyos = anyos;
        this.velocidad = velocidad;
    }

    velocidad() {
        return velocidad + 10;
    }

    frenar() {
        return velocidad = 0;
    }

    aparcar() {
        return console.log("APARCADO!");
    }
}

//Coche, Moto, Patin y Bicicleta

class Coche extends Vehiculos {
    constructor(marca, matricula, nruedas, npuertas, anyos, velocidad, combustible) {
        super(marca, matricula, nruedas, npuertas, anyos, velocidad);
        this.combustible = combustible;
    }

}
class Moto extends Vehiculos {
    constructor(marca, matricula, nruedas, anyos, velocidad) {
        super(marca, matricula, nruedas, 0, anyos, velocidad);
    }
}
class Patin extends Vehiculos {
    constructor(marca, matricula, nruedas, anyos, velocidad) {
        super(marca, matricula, nruedas, 0, anyos, velocidad);
    }

}
class Bicicleta extends Vehiculos {
    constructor(marca, nruedas, anyos) {
        super(marca, undefined, nruedas, 0, anyos);
    }
    noContamino() {
        console.log("No contamino!")
    }
}

const yamaha = new Moto('Yamaha','3343LKB',2,2017,197);

console.log(yamaha);

const bmx = new Bicicleta('BMX', 2, 1996);

console.log(bmx);
bmx.noContamino();