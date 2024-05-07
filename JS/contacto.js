const fnEnviar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  btnEnviar.click();
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

document.getElementById("myForm").addEventListener("submit", fnEnviar);

document.getElementById("imageInput").addEventListener("change", fnSubirImagen);
