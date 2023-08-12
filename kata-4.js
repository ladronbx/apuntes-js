/*
******-USANDO SWITCH!!!-******

RANGOS NOTAS
0 - 4: Insuficiente.

5 - 6: Suficiente.

7 - 8: Notable.

9 - 10: Sobresaliente.
*/

nota = parseInt(prompt("¿Qué nota has sacado?",0));

switch(nota){
    case 1:
    case 2:
    case 3:
    case 4:
        document.write("<h3>"+"Tu nota es : Insuficiente."+"</h3>")
    break;
    case 5:
    case 6:
        document.write("<h3>"+"Tu nota es : Suficiente."+"</h3>")
    break;
    case 7:
    case 8:
        document.write("<h3>"+"Tu nota es : Notable."+"</h3>")
    break;
    default:
        document.write("<h3>"+"Tu nota es : Sobresaliente."+"</h3>")
    break;

}