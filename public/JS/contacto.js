const validarCampos = () =>{

  let campos = document.getElementsByClassName("requerido");


  for (let index = 0; index < campos.length; index++) {
    const campo = campos[index];
    
    if (campo.value == ""){
      campo.setCustomValidity("El campo es obligatorio");
      campo.reportValidity();

      return false;
    }
    else
    {
      campo.setCustomValidity("");
      campo.reportValidity();
    }
  }
  return true;

}

const fnEnviar = (e) => {
  e.preventDefault();
  if (validarCampos())
  {
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

  camposElegir.forEach(function(campo) {
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
  else
  {
    e.target.setCustomValidity("");
  }
}

//document.getElementById("myForm").addEventListener("submit", fnEnviar);
document.getElementById("enviarForm").addEventListener("click", fnEnviar);

document.getElementById("imageInput").addEventListener("change", fnSubirImagen);

// En este código se define la función de suscripción
async function myform() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const birthDate = document.getElementById('birthDate').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const city = document.getElementById('city').value;
  const conociste = document.getElementById('conociste').value;
  const pago = document.getElementById('pago').value;
  const imageInput = document.getElementById('imageInput').value;
  const mensaje = document.getElementById('mensaje').value;

  try {

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
      mensaje});

    console.log(body)
    const response = await fetch('http://localhost:8080/myform', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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