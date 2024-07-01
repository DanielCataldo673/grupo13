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
    contactar();
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

  let camposElegir = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');

  camposElegir.forEach(function (campo) {
    campo.checked = false; // Deseleccionar el checkbox o radio
  });
}

const fnSubirImagen = (e) => {
  let archivo = e.target.files[0];

  let extension = archivo.name.split(".")[1];

  if (extension != "png" && extension != "jpg") {
    document.getElementById("imageInput").value = ""
    e.target.setCustomValidity("El archivo debe ser .png o .jpg");
    e.target.reportValidity();
  }
  else {
    e.target.setCustomValidity("");
  }
}

//document.getElementById("myForm").addEventListener("submit", fnEnviar);
document.getElementById("enviarForm").addEventListener("click", fnEnviar);

document.getElementById("imageInput").addEventListener("change", fnSubirImagen);

// En este código se define la función de guardar contacto
async function contactar() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const birthDate = document.getElementById('birthDate').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const city = document.getElementById('city').value;

  const tiposConociste = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
    .map(item => item.value)
    .join(', ');
  const conociste = tiposConociste;

  const pago = document.querySelector('input[type=radio]:checked') == null ? "" : document.querySelector('input[type=radio]:checked').value;
  const imageInput = document.getElementById('imageInput').value;
  const mensaje = document.getElementById('mensaje').value;

  try {
    const token = localStorage.getItem('jwt-token')
    const body = JSON.stringify({
      firstname,
      lastname,
      birthDate,
      email,
      telefono,
      city,
      conociste,
      pago,
      imageInput,
      mensaje
    });

    const response = await fetch('http://localhost:8080/contactar', {
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
    console.error('Error al contactar:', error);
  }
}
