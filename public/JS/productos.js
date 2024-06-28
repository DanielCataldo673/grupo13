const buscarListado = async () =>{
  const token = localStorage.getItem('jwt-token')
  
  const res = await fetch(`http://localhost:8080/listaProductos/0`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
    }
	})

	if (!res.ok) {
		window.location.href="/login.html"
		throw Error("Problemas en login")
	}

	const data = await res.json()
	
  return data
}

const main = document.querySelector(`#listado`)

const listadoProductos = async () =>{

	const resultados = await buscarListado()

    let listaHTML = document.querySelector(`#listado`)//id de donde se inyecta el producto
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
              <p>${producto.descripcion}...</p>
              <a href="/detalleProducto/${producto.id}">Leer Más</a>
            </div>
          </div> `
	})
}

listadoProductos()

const guardarId = (e) => localStorage.setItem(`id`, e.target.id)
