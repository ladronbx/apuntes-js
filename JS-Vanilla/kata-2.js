alert('Se ha iniciado la calculadora.');

var n1 = parseInt(prompt("Indica el primer número:",0));
var n2 = parseInt(prompt("Indica el segundo número:",0));

alert('Primer número es ' + n1);
alert('Segundo número es ' + n2);

document.write("<h3>"+"SUMA : "+ n1 + " + " + n2 + " = "+ parseInt(n1+n2)+"</h3>");
document.write("<h3>"+"RESTA : "+ n1 + " - " + n2 + " = "+ parseInt(n1-n2)+"</h3>");
document.write("<h3>"+"MULTIPLICACIÓN : "+ n1 + " * " + n2 + " = "+ parseInt(n1*n2)+"</h3>");
document.write("<h3>"+"DIVISIÓN : "+ n1 + " / " + n2 + " = "+ parseInt(n1/n2)+"</h3>");

document.write("<h4>"+"*************************"+"</h4>")