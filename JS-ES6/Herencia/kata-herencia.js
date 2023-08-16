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

class Vehiculo {
    constructor(marca, matricula, ruedas, puertas, años, velocidad) {
        this.marca = marca;
        this.matricula = matricula;
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.años = años;
        this.velocidad = velocidad;
    }
    correr() {
        return this.velocidad += 10;
    }
    frenar() {
        return this.velocidad = 0;
    }
    aparcar() {
        return console.log("Aparcado!");
    }
}


class Coche extends Vehiculo {
    constructor(marca, matricula, ruedas, puertas, años) {
        super(marca, matricula, ruedas, puertas, años);
        this.consumo = 'Diesel';
    }
}
class Coche extends Vehiculo {
    constructor(marca, matricula, ruedas, puertas, años) {
        super(marca, matricula, ruedas, puertas, años);
    }
}
class Patin extends Vehiculo {
    constructor(marca, matricula, ruedas, años) {
        super(marca, matricula, ruedas, años);
    }
}
class Bicicleta extends Vehiculo {
    constructor(marca, matricula, ruedas, años) {
        super(marca, matricula, ruedas, años);
    }
}