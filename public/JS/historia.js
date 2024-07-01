


let porQueElegir = document.querySelector("#k");
let isOpen = false;

document.querySelector("#ver_mas").addEventListener('click', function () {
    if (!isOpen) {
        porQueElegir.style.display = "block";
        isOpen = true;
    } else {
        porQueElegir.style.display = "none";
        isOpen = false;
    }
});

document.querySelector("#cColor").addEventListener('mouseover', funCambioColor);

function funCambioColor() {
    const caColoranio = document.querySelectorAll("h3");
    caColoranio.forEach(h3 => {
        h3.style.color = "yellow";
        h3.style.background = "blue";
    });
}