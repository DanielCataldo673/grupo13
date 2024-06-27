const buscarListado = async () =>{
    const res = await fetch(`http://localhost:8080/variedad`);
	const data = await res.json()
	return data
}

const main = document.querySelector(`#variety`)

const ListaVariedades = async () =>{

	const resultados = await buscarListado()

    let listaHTML = document.querySelector(`#variety`)//id de donde se inyecta el producto
    listaHTML.innerHTML = ''

	resultados.forEach((variedad, i) => {

        listaHTML.innerHTML += `
        <div class="articulo3">
        <header>
          <h1>${variedades.nombre}</h1>
        </header>
        <p class="productos-parra">${variedades.descripcion}</p>
      </div> 
          `
	})
}
ListaVariedades()

const guardarId = (e) => localStorage.setItem(`id`, e.target.id)
