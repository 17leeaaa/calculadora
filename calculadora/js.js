// Suma y división
function calcularSuma() {
    document.getElementById('errorSuma').classList.add('hidden');

    const numero1 = document.getElementById('suma1').value;
    const numero2 = document.getElementById('suma2').value;

    if (!numero1 || !numero2) {
        mostrarError('errorSuma', 'Por favor, ingresa ambos números');
        return;
    }

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
        mostrarError('errorSuma', 'Por favor, ingresa números válidos');
        return;
    }

    const suma = num1 + num2;
    const division = suma / 1.19;

    mostrarResultado('textoSuma', 'valorSuma', 'resultadoSuma', `(${num1} + ${num2}) ÷ 1.19`, division);
}

function limpiarSuma() {
    document.getElementById('suma1').value = '';
    document.getElementById('suma2').value = '';
    document.getElementById('errorSuma').classList.add('hidden');
    document.getElementById('resultadoSuma').classList.add('hidden');
}

// Resta
function calcularResta() {
    document.getElementById('errorResta').classList.add('hidden');

    const numero1 = document.getElementById('resta1').value;
    const numero2 = document.getElementById('resta2').value;

    if (!numero1 || !numero2) {
        mostrarError('errorResta', 'Por favor, ingresa ambos números');
        return;
    }

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
        mostrarError('errorResta', 'Por favor, ingresa números válidos');
        return;
    }

    const resta = num1 - num2;

    mostrarResultado('textoResta', 'valorResta', 'resultadoResta', `${num1} - ${num2}`, resta);
}

function limpiarResta() {
    document.getElementById('resta1').value = '';
    document.getElementById('resta2').value = '';
    document.getElementById('errorResta').classList.add('hidden');
    document.getElementById('resultadoResta').classList.add('hidden');
}

// Funciones compartidas
function mostrarError(id, mensaje) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = mensaje;
    errorElement.classList.remove('hidden');
}

function mostrarResultado(textoId, valorId, containerId, operacion, resultado) {
    document.getElementById(textoId).textContent = `Operación: ${operacion}`;
    document.getElementById(valorId).textContent = resultado.toFixed(2);
    document.getElementById(containerId).classList.remove('hidden');
}

// Limpiar error al escribir
['suma1','suma2','resta1','resta2'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        const errorId = id.startsWith('suma') ? 'errorSuma' : 'errorResta';
        document.getElementById(errorId).classList.add('hidden');
    });
});

// Enter para calcular
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (document.activeElement.id.startsWith('suma')) {
            calcularSuma();
        } else {
            calcularResta();
        }
    }
});
