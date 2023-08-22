// Hacer un programa que muestre:  Tabla de multiplicar introducido por pantalla.
var n = parseInt(prompt('Dime un número', 0));


while ((isNaN(n)) || (n < 0)){
    alert('Introduce correctamente el número.')
    n = parseInt(prompt('Dime un número', 0));
}
//Muy largo de escribir!!! MEJOR UN FOR
// console.log(`
// ${1} * ${n} = ${1*n};
// ${2} * ${n} = ${2*n};
// ${3} * ${n} = ${3*n};
// ${4} * ${n} = ${4*n};
// ${5} * ${n} = ${5*n};
// ${6} * ${n} = ${6*n};
// ${7} * ${n} = ${7*n};
// ${8} * ${n} = ${8*n};
// ${9} * ${n} = ${9*n};
// ${10} * ${n} = ${10*n};
// `);

var i = 0;
for(i = 1; i <= 10;  i++){
    console.log(`${i} * ${n} = ${i*n}`);
}
