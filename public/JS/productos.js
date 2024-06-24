const buscarListado = async () =>{
    const res = await fetch(`http://localhost:8080/producto`);
	const data = await res.json()
	return data
}

const main = document.querySelector(`#listado`)

const listadoProductos = async () =>{

	const respuesta = await buscarListado()
	const resultados = respuesta.results

	resultados.forEach((producto, i) => {
		const bloqueInfo = document.createElement(`article`)
		/* bloqueInfo.setAttribute(`class`, `pokemon`) */
		bloqueInfo.innerHTML = `
        <img src="/img/webp/${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.variedad_id}</h2>
			<h4>${producto.nombre}</h4>
            <p>${producto.caracteristicas}</p>
			<a href="producto.html" id="${(i+1)}">Leer Más<</a>`
		bloqueInfo.querySelector(`a`).addEventListener(`click`, guardarId)
		main.appendChild(bloqueInfo)
	})
}

listadoProductos()

const guardarId = (e) => localStorage.setItem(`id`, e.target.id)




    

        /* const productoHTML = `
            <div class="producto">
                <h4>${registro.nombre}</h4>
                <p>${registro.caracteristicas}</p>
                <h4>${registro.precio}</h4>
                <h4>${registro.gramaje}</h4>
                <h4>${registro.variedad_id}</h4>
            </div>`;
        
        listaHTML.innerHTML += productoHTML;
    }); */