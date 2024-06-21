document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch(`http://localhost:8080/producto`);
    const datos = await res.json();
    const listaHTML = document.querySelector(`#producto`);

    listaHTML.innerHTML = '';
    
    const MAX_WORDS = 30; // Establece el máximo de palabras a mostrar

    datos.forEach(registro => {
        // Recortar el texto de las características
        let palabras = registro.caracteristicas.split(' ');
        if (palabras.length > MAX_WORDS) {
            palabras = palabras.slice(0, MAX_WORDS);
            registro.caracteristicas = palabras.join(' ') + '...'; // Agregar puntos suspensivos al final si se recortó
        }

        const productoHTML = `
            <div class="producto">
                <h4>${registro.nombre}</h4>
                <p>${registro.caracteristicas}</p>
                <h4>${registro.precio}</h4>
                <h4>${registro.gramaje}</h4>
                <h4>${registro.variedad_id}</h4>
                <form method="POST" action="/producto?_metodo=DELETE" style="display:flex">
                    <input type="hidden" name="idEliminar" value="${registro.id}">
                    <button><a href="/modificar/${registro.id}">Modificar</a></button>
                    <input type="submit" value="Eliminar">
                </form>
            </div>`;
        
        listaHTML.innerHTML += productoHTML;
    });
});