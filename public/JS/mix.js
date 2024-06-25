const buscarListado = async () =>{
    const res = await fetch(`http://localhost:8080/listaProductos/3`);
	const data = await res.json()
	return data
}

const main = document.querySelector(`#listado`)

const listadoProductos = async () =>{

	const resultados = await buscarListado()

    let listaHTML = document.querySelector(`#listado`)
    listaHTML.innerHTML = ''

	resultados.forEach((producto, i) => {

        listaHTML.innerHTML += ` 
          <div class="cartas">
            <div class="cover">
              <img src="img/webp/${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="description">
              <h2>${producto.nombre_variedad}</h2>
              <h4>${producto.nombre}</h4>
              <p>${producto.caracteristicas}</p>
              <a href="producto.html">Leer Más</a>
            </div>
          </div> `
	})
}

listadoProductos()

const guardarId = (e) => localStorage.setItem(`id`, e.target.id)
