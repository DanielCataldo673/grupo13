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
  }
  
  document.getElementById("enviarForm").addEventListener("click", fnEnviar);
  
  
  
  