document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');
    
    calcularBtn.addEventListener('click', function() {
        const radioInput = document.getElementById('radioInput');
        const perimetroResultado = document.getElementById('perimetroResultado');
        const areaResultado = document.getElementById('areaResultado');
        
        const radio = parseFloat(radioInput.value);
        const pi = 3.14;
        
        const perimetro = 2 * pi * radio;
        const area = pi * (radio ** 2);
        
        perimetroResultado.textContent = `El perímetro es: ${perimetro}`;
        areaResultado.textContent = `El área es: ${area}`;
    });
});
