document.querySelector("#cColor").addEventListener('onmouseover', funCambioColor)

function funCambioColor() {
    const caColoranio = document.querySelectorAll("h3")
    console.log(caColoranio)
caColoranio.style="color: red; background: blue;"

}
document.querySelector("historia").addEventListener('onmouseover', mostrarParrafo)

const mostrarParrafo =() => {
    const parrafo1 = document.querySelector("hisotira-5")
    parrafo1.style.display = "none"
}