// Kata I: Calculadora con Callbacks

// Crear una calculadora con Suma, Resta,
// Multiplicación, División, Elevar y Raíces Cuadradas
// usando:
// ● DOM
// ● Callbacks

// Extra: Eventos


// #num1 #num2 #btnSuma #btnResta #btnMult #btnDiv

function Sumar(a, b, callback){
    const resultado = a + b;
    callback(resultado);
}
function Restar(a, b, callback){
    const resultado = a - b;
    callback(resultado);
}
function Multiplicar(a, b, callback){
    const resultado = a * b;
    callback(resultado);
}
function Dividir(a, b, callback){
    const resultado = a / b;
    callback(resultado);
}

document.querySelector("#btnSuma").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#num1").value),
        b = parseInt(document.querySelector("#num2").value);

    Sumar(a, b, function(r){
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Resultado: " + r;
    });
});

document.querySelector("#btnResta").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#num1").value),
        b = parseInt(document.querySelector("#num2").value);

    Restar(a, b, function(r){
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Resultado: " + r;
    });
});

document.querySelector("#btnMult").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#num1").value),
        b = parseInt(document.querySelector("#num2").value);

    Multiplicar(a, b, function(r){
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Resultado: " + r;
    });
});

document.querySelector("#btnDiv").addEventListener('click', () => {
    let a = parseInt(document.querySelector("#num1").value),
        b = parseInt(document.querySelector("#num2").value);

    Dividir(a, b, function(r){
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Resultado: " + r;
    });
});
