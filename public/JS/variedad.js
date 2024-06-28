const obtenerVariedad = async (idVariedad) =>{
    const token = localStorage.getItem('jwt-token')
	
	const res = await fetch(`http://localhost:8080/listaVariedades/${idVariedad}`,
		{
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
		}
	});

	if (!res.ok) {
		window.location.href="/login.html"
		throw Error("Problemas en login")
	}

	const data = await res.json()
	return data
}
