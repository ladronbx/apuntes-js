// Object getOwnPropertyDescriptors
// El método Object.getOwnPropertyDescriptors() devuelve la descripción
// de las propiedades del objeto pasado por el parámetro

const persona = {
    brazos: 2,
    piernas:  2,
    cabeza: 1,
    feliz: true
}

console.log(Object.getOwnPropertyDescriptors(persona));