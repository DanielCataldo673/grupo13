/* COSTO DE ENVIOS */


function mostrarCalculadora() {
    let calculadora = document.getElementById("calculadora");
    calculadora.style.display = "block";
}

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
            envio = 'Comunicarse con Mío Sole para coordinar envio';
    }

    if (condicionCumplida) {
        alert("El costo de envío es: " + envio);
    } else {
        alert(envio);
    }
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("km").value = "";
    document.getElementById("kg").value = "";
}

function cerrarCalculadora() {
    var calculadora = document.getElementById("calculadora");
    calculadora.style.display = "none";
}



