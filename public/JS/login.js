const validarCampos = () => {
  let campos = document.getElementsByClassName("requerido");

  for (let index = 0; index < campos.length; index++) {
    const campo = campos[index];

    if (campo.value === "") {
      campo.setCustomValidity("El campo es obligatorio");
      campo.reportValidity();
      return false;
    } else {
      campo.setCustomValidity("");
      campo.reportValidity();
    }
  }
  return true;
}

const login = async () => {
  if (validarCampos()) {
    const user = document.querySelector(`[name='user']`).value;
    const password = document.querySelector(`[name='password']`).value;

    const resp = await fetch(`login/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, password })
    });

    if (resp.status === 404) {
      alert("Usuario no válido ⚠️");
    } else if (resp.status === 401) {
      alert("Password incorrecto ⚠️");
    } else {
      const data = await resp.json();
      localStorage.setItem("jwt-token", data.token);
      localStorage.setItem("idRol", data.idRol);
      window.location.href = "/index.html";
    }
  }
}