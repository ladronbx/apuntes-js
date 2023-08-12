
var n = prompt("De qué numero quieres la tabla de multiplicar?",0);
var multiplicador = 0;
var x = prompt("La tabla comenzará a multiplicar desde el número 0. Escribe hasta qué número : ");

while(multiplicador <= x){
    document.write("<h5>"+n+" * "+multiplicador+" = "+(n*multiplicador)+"</h5>");
    ++ multiplicador;
}
