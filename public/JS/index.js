const verificarToken = async () =>{
    const token = localStorage.getItem('jwt-token')
    
    const res = await fetch(`http://localhost:8080/login/verificarToken/${token}`)  
  
      if (!res.ok) {
          window.location.href="/login.html"
          throw Error("Problemas en login")
      }
}

verificarToken()

//const fnLinkProductos = async (e) => {
//     const token = localStorage.getItem('jwt-token')
// 	const res = await fetch(`http://localhost:8080/producto`)
// 	// 	{
// 	// 		method: 'GET',
// 	// 		headers: {
// 	// 			"Content-Type": "application/json",
// 	// 			"Authorization": `Bearer ${token}`
// 	// 	}
// 	// });

// 	if (!res.ok) {
// 		window.location.href="/login.html"
// 		throw Error("Problemas en login")
// 	}
// }
  
// document.getElementById("linkProductos").addEventListener("click", fnLinkProductos);
