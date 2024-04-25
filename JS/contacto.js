const fnEnviar = () => {
  let btnEnviar = document.getElementById('btnEnviar');
  btnEnviar.click();
}

// function fnEnviar(){
//   let btnEnviar = document.getElementById('btnEnviar');
//   btnEnviar.click();
// }

document.getElementById("myForm").addEventListener("submit", fnEnviar);
