var n = parseInt(prompt("Dime qué número deseas multiplicar del 0 al 10?",0));

for(var i = 0; i <= 10; i++ ){
    document.write("<h5>"+i+" * "+n+" = "+(i*n)+"</h5>");
}