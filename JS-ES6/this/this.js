/*
const persona = {
    nombre : 'Pablo', //nombre = propiedad (Es una variable, dentro de persona. Sólo existe dentro de persona)
    apellido :'Pérez',
    edad: 26
}

// ¿Cómo accedo a las propiedades del objeto?
// 1. nombreObjeto.propiedad
console.log(persona.apellido);

//2. nombreObjeto["propiedad"]
console.log(persona["edad"]);

*/
const IVA_GENERAL = 1.21;

const IVA_REDUCIDO = 1.10;

const item1 = {
    precio: 15,
    cantidad: 2,
    impuestos: IVA_GENERAL,
    calcularTotal: function (){
        return this.precio * this.cantidad * this.impuestos
    }
}

const item2 = {
    precio: 25,
    cantidad: 3,
    impuestos: IVA_REDUCIDO,
    calcularTotal: function (){
        return this.precio * this.cantidad * this.impuestos
    }
}
const factura = {
    item1,
    item2,
    calcularTotal: () => {
        return item1.calcularTotal() + item2.calcularTotal()
    }
}

console.log(factura.calcularTotal());




