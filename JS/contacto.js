const validarCampos = () =>{

  var campos = document.getElementsByClassName("requerido");

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
  }
}

// function fnEnviar(){
//   let btnEnviar = document.getElementById("btnEnviar");
//   btnEnviar.click();
// }

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
