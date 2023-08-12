//Se le solicita al usuario 2 números. 
var n1 = parseInt(prompt("Dime el pimer número.",0));
var n2 = parseInt(prompt("Dime el segundo número.",0));

//Se le solicita al usuario la operación que desea. 
var operacion = prompt("Dime qué operación deseas realizar: sumar, restar, multiplicar, dividir");



// Se crean las funciones
function sumar (n1, n2){
    return "<h5>"+n1+" + "+n2+" = "+(n1+n2)+"</h5>";
}
function restar (n1, n2){
    return "<h5>"+n1+" - "+n2+" = "+(n1-n2)+"</h5>";
}
function multiplicar (n1, n2){
    return "<h5>"+n1+" * "+n2+" = "+(n1*n2)+"</h5>";
}
function dividir (n1, n2){
    return "<h5>"+n1+" / "+n2+" = "+(n1/n2)+"</h5>";
}

if(operacion === "sumar"){
    document.write(sumar(n1,n2));
}else if(operacion === "restar"){
document.write(restar(n1,n2));
}else if(operacion === "multiplicar"){
    document.write(multiplicar(n1,n2));
}else if(operacion === "dividir"){
    document.write(dividir(n1,n2));
}else{
    alert("Refresca y escribe de nuevo la operación correctamente.");
}