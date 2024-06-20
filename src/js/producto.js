document.querySelector('body').onload = async () => {
	const res = await fetch(`http://localhost:8080/producto`)
	const datos = await res.json()
	let listaHTML = document.querySelector(`#producto`)
	listaHTML.innerHTML = ''
	datos.forEach(registro => {
		listaHTML.innerHTML += `
		<form method="POST" action="/producto?_metodo=DELETE" style="display:flex">
			<h4>${registro.nombre}</h4>
			<h4>${registro.caracteristicas}</h4>
			<h4>${registro.imagen}</h4>
			<h4>${registro.precio}</h4>
			<h4>${registro.gramaje}</h4>
			<h4>${registro.variedad_id}</h4>
			<input type="hidden" name="idEliminar" value="${registro.id}">
			<h4><button><a href="/modificar/${registro.id}">Modificar</a></h4>
			<h4><input type="submit" value="Eliminar"></h4>
		</form>`
	})

}
