const validarCampos = () => {

  let campos = document.getElementsByClassName("requerido");

  for (let index = 0; index < campos.length; index++) {
    const campo = campos[index];

    if (campo.value == "") {
      campo.setCustomValidity("El campo es obligatorio");
      campo.reportValidity();

      return false;
    }
    else {
      campo.setCustomValidity("");
      campo.reportValidity();
    }
  }
  return true;

}

const fnEnviar = (e) => {
  e.preventDefault();
  if (validarCampos()) {
    suscribir();
    let btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.click();
    limpiarCampos();
  }
}

const limpiarCampos = () => {
  let campos = document.getElementsByClassName("requerido");

  for (let index = 0; index < campos.length; index++) {
    const campo = campos[index];
    campo.value = ""; // Limpiar el valor del campo
  }
}

document.getElementById("enviarForm").addEventListener("click", fnEnviar);


// En este código se define la función de suscripción
async function suscribir() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const birthDate = document.getElementById('birthDate').value;
  const street = document.getElementById('street').value;
  const city = document.getElementById('city').value;
  const zipcode = document.getElementById('zipcode').value;
  const color = document.getElementById('color').value;
  const email = document.getElementById('email').value;
  const spice1 = document.getElementById('spice1').value;
  const spice2 = document.getElementById('spice2').value;
  const spice3 = document.getElementById('spice3').value;

  try {
    const token = localStorage.getItem('jwt-token')
    const body = JSON.stringify({
      firstname,
      lastname,
      birthDate,
      street,
      city,
      zipcode,
      color,
      email,
      spice1,
      spice2,
      spice3
    });

    const response = await fetch('/suscribir', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: body,

    });

    //const data = await response.json();
    //console.log(data);

  } catch (error) {
    console.error('Error al suscribir:', error);
  }
}

// Este código se llama cuando se envía el formulario de suscripción
// document.getElementById('formulario-suscripcion').addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevenir el envío del formulario por defecto
//   suscribir();
// });