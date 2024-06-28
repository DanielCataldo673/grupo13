const verificarToken = async () =>{
    const token = localStorage.getItem('jwt-token')
    
    const res = await fetch(`http://localhost:8080/login/verificarToken/${token}`)  
  
      if (!res.ok) {
          window.location.href="/login.html"
          throw Error("Problemas en login")
      }
}

verificarToken()


const logout = async () => {
    localStorage.removeItem("jwt-token")
    window.location.href="/login.html"
  }