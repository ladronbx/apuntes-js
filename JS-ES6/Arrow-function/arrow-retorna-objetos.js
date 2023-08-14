// Antes se hacía así
function creaPersona (nombre, edad){
    return{
        nombre: nombre,
        edad: edad,
    }
}

console.log(creaPersona("Pepe",27));

// Ahora se puede hacer así desde ES6
const creaPersonaArrow = (nombre, edad) => ({ nombre: nombre, edad: edad });

console.log(creaPersonaArrow("Pepa",27));






let singulares = ['manzana', 'banana', 'naranja'];
let plurales = singulares.map(fruta => fruta +'s');

console.log(plurales);