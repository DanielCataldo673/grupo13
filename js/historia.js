/*  AL HACER CLICK SOBRE EL AÑO en la linea historica
cambia el color y queda fijo..agregar mostrar el parrafo 
oculto. POR ahora reeplazado por h3:hover en css*/
document.querySelector("#cColor").addEventListener('onmouseover', funCambioColor)

function funCambioColor() {
    const caColoranio = document.querySelectorAll("h3")
    console.log(caColoranio)
caColoranio.style="color: yellow; background: blue;"
}

/*  BOTON "VER MAS" muestra el parrafo 'porqué elegirnos'*/ 
document.querySelector("#ver_mas").addEventListener('click',mostrarMas)

function mostrarMas() {
    const porQueElegir = document.querySelector("#k")
    porQueElegir.style.display = "block"
}