
const verificarToken = async () => {
    const token = localStorage.getItem('jwt-token')

    const res = await fetch(`/login/verificarToken/${token}`)

    if (!res.ok) {
        window.location.href = "/login.html"
        throw Error("Problemas en login")
    }
}


verificarToken()


const logout = async () => {
    localStorage.removeItem("jwt-token")

    window.location.href = "/login.html"

    window.location.href="/login.html"

}

//solo si es admin puede ver el ABM de Productos
const idRol = localStorage.getItem('idRol')
let abmProductos = document.getElementById("abmProductos")

if (idRol == 2 && abmProductos != null) {
    abmProductos.hidden = true
}

//solo si es admin pueden ir al ABM de Productos o al modificar
const pathActual = window.location.pathname;


if (idRol == 2 && (pathActual == '/producto' || pathActual.includes('/modificar/') || pathActual == '/bienvenido')) {
    window.location.href = "/index.html";
    alert("El usuario no tiene acceso al recurso 🚧🚫");

}