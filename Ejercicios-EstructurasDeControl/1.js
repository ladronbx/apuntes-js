// Programa que pida dos números y que nos diga cual es el mayor, 
// el menor y si son iguales.

const n1 = parseInt(prompt('Dime el primer  número',0));
const n2 = parseInt(prompt('Dime el segundo  número',0));

if(n1 < n2){
    console.log(`El segundo numero es el mayor, ya que ${n1} es menor a ${n2}`);
}else if(n1 > n2){
    console.log(`El primer numero es el mayor, ya que ${n1} es mayor a ${n2}`);
}else{
    console.log(`Son los mismos numeros ${n1} ${n2}`);
}
