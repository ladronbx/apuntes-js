// OBJECT ENTRIES
// Es un método añadido a Object que recibe como parámetro un
// objeto y lo que nos devuelve es un array que contiene tantos arrays como
// propiedades tenga el objeto con la clave y valor de las propiedades


const obj = {
    test: 1,
    foo: true,
    string: 'nombre'
}

console.log(Object.entries(obj));