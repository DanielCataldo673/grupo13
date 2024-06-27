const obtenerVariedad = async (idVariedad) =>{
    const res = await fetch(`http://localhost:8080/listaVariedades/${idVariedad}`);
	  const data = await res.json()
	return data
}
