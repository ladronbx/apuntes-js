//variables html

var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");

var mas = document.getElementById("mas");
var menos = document.getElementById("menos");
var multi = document.getElementById("multi");
var divi = document.getElementById("divi");

var resultado = document.getElementById("resultado");


// eventos con funcion flecha
mas.addEventListener('click', () => {
    var valor1 = parseFloat(n1.value);
    var valor2 = parseFloat(n2.value);
    var suma = valor1 + valor2;
    resultado.textContent = suma;
});

menos.addEventListener('click', () => {
    var valor1 = parseFloat(n1.value);
    var valor2 = parseFloat(n2.value);
    var resta = valor1 - valor2;
    resultado.textContent = resta;
});

multi.addEventListener('click', () => {
    var valor1 = parseFloat(n1.value);
    var valor2 = parseFloat(n2.value);
    var multiplicar = valor1 *valor2;
    resultado.textContent = multiplicar;
});

divi.addEventListener('click', () => {
    var valor1 = parseFloat(n1.value);
    var valor2 = parseFloat(n2.value);
    var dividir = valor1 / valor2;
    resultado.textContent = dividir;
});

