// Hacer un programa :  Calculadora

// variables
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var resultado = document.getElementById("resultado");

// función de suma
function sumar() {
    var valorN1 = parseFloat(n1.value);
    var valorN2 = parseFloat(n2.value);
    var suma = valorN1 + valorN2;
    resultado.textContent = suma;
}

// función de resta
function restar() {
    var valorN1 = parseFloat(n1.value);
    var valorN2 = parseFloat(n2.value);
    var resta = valorN1 - valorN2;
    resultado.textContent = resta;
}

// función de multiplicación
function multiplicar() {
    var valorN1 = parseFloat(n1.value);
    var valorN2 = parseFloat(n2.value);
    var producto = valorN1 * valorN2;
    resultado.textContent = producto;
}

// función de división
function dividir() {
    var valorN1 = parseFloat(n1.value);
    var valorN2 = parseFloat(n2.value);

    if (valorN2 !== 0) {
        var cociente = valorN1 / valorN2;
        resultado.textContent = cociente;
    } else {
        resultado.textContent = "No se puede dividir por cero";
    }
}

// asignar eventos a los botones
mas.addEventListener("click", sumar);
menos.addEventListener("click", restar);
multi.addEventListener("click", multiplicar);
divi.addEventListener("click", dividir);





