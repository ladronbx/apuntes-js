/*
******-USANDO IF!!!-******

RANGOS NOTAS
0 - 4: Insuficiente.

5 - 6: Suficiente.

7 - 8: Notable.

9 - 10: Sobresaliente.
*/

nota = parseInt(prompt("¿Qué nota has sacado?",0));

if(nota < 5){
    document.write("<h3>"+"Tu nota es : Insuficiente."+"</h3>")
}else if(nota >= 5 && nota < 7){
    document.write("<h3>"+"Tu nota es : Suficiente."+"</h3>")
}else if(nota >= 7 && nota < 9){
    document.write("<h3>"+"Tu nota es : Notable."+"</h3>")
}else if(nota >= 9){
    document.write("<h3>"+"Tu nota es : Sobresaliente."+"</h3>")
}