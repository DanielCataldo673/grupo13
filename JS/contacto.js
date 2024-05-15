<<<<<<< HEAD
const validarCampos = () => {
  let campos = document.getElementsByClassName("requerido");
=======
const validarCampos = () =>{

  var campos = document.getElementsByClassName("requerido");
>>>>>>> 987137ce75aea614f03fab96bd054e99a807cf97

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
<<<<<<< HEAD
=======
}

const fnEnviar = (e) => {
  e.preventDefault();
  if (validarCampos())
  {
    let btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.click();
  }
>>>>>>> 987137ce75aea614f03fab96bd054e99a807cf97
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

const fnEnviar = (e) => {
  e.preventDefault();
  if (validarCampos())
  {
    let btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.click();
    limpiarCampos(); // Llamar a la función para limpiar los campos
  }
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

<<<<<<< HEAD
document.getElementById("enviarForm").addEventListener("click", fnEnviar);
document.getElementById("imageInput").addEventListener("change", fnSubirImagen);
=======
//document.getElementById("myForm").addEventListener("submit", fnEnviar);
document.getElementById("enviarForm").addEventListener("click", fnEnviar);

document.getElementById("imageInput").addEventListener("change", fnSubirImagen);
>>>>>>> 987137ce75aea614f03fab96bd054e99a807cf97
