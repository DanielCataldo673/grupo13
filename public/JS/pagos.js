/* COSTO DE ENVIOS */

function mostrarCalculadora() {
    let calculadora = document.getElementById("calculadora");
    calculadora.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button2').addEventListener('click', mostrarCalculadora);

    document.getElementById('calcularBtn').addEventListener('click', calcular);
    document.getElementById('limpiarBtn').addEventListener('click', limpiarCampos);
    document.getElementById('cerrarBtn').addEventListener('click', cerrarCalculadora);
});

function calcular() {
    let distancia = parseInt(document.getElementById("km").value);
    let peso = parseInt(document.getElementById("kg").value);
    let envio;
    let condicionCumplida = false;

    switch (true) {
        case distancia <= 50 && peso <= 25:
            envio = "$5.000";
            condicionCumplida = true;
            break;
        case distancia > 50 && distancia <= 100 && peso <= 25:
            envio = "$10.000";
            condicionCumplida = true;
            break;
        case distancia > 100 && distancia <= 200 && peso <= 25:
            envio = "$15.000";
            condicionCumplida = true;
            break;
        default:
            envio = 'Comunicarse con Mío Sole para coordinar el envío';
    }

    if (condicionCumplida) {
        alert("El costo de envío es: " + envio);
    } else {
        alert(envio);
    }
    limpiarCampos(); // Limpia los campos después de calcular el envío
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("km").value = "";
    document.getElementById("kg").value = "";
}

function cerrarCalculadora() {
    let calculadora = document.getElementById("calculadora");
    calculadora.style.display = "none";
    limpiarCampos(); // Limpia los campos al cerrar la calculadora
}
    