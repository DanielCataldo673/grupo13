const buscarListado = async () =>{
  const token = localStorage.getItem('jwt-token')
  
  const res = await fetch(`/listaProductos/1`, {
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
            <p>${producto.descripcion}...</p>
            <a href="/detalleProducto/${producto.id}">Leer Más</a>
          </div>
        </div> `
})
}
const buscarVariedad = async () =>{

const variedad = await obtenerVariedad(1) //1 corresponde a Especias

let listaHTML = document.querySelector(`#variety`)//id de donde se inyecta el producto

listaHTML.innerHTML += `
    <header>
      <h1>${variedad[0].nombre}</h1>
    </header>
    <p class="productos-parra">${variedad[0].descripcion}</p> `
}

listadoProductos()
buscarVariedad()

const guardarId = (e) => localStorage.setItem(`id`, e.target.id)
