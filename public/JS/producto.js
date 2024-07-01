const crearProducto = async () => {
    const nombre = document.querySelector(`[name='nombre']`).value
    const caracteristicas = document.querySelector(`[name='caracteristicas']`).value
    let imagen = document.querySelector(`[name='imagen']`).value
    const precio = document.querySelector(`[name='precio']`).value
    const gramaje = document.querySelector(`[name='gramaje']`).value
    const variedad_id = document.querySelector(`[name='variedad_id']`).value

    if (imagen.substr(0, 12) == "C:\\fakepath\\") {
        imagen = imagen.substr(12);
    }

    const token = localStorage.getItem('jwt-token')
    const body = JSON.stringify({
        nombre,
        caracteristicas,
        imagen,
        precio,
        gramaje,
        variedad_id
    });

    const res = await fetch(`http://localhost:8080/producto`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: body
    })
    if (!res.ok) {
        alert("Error al crear el producto. Por favor, inténtalo de nuevo. 👎")
        throw Error("Error al crear el producto. Por favor, inténtalo de nuevo. 🔄")
    }

    alert("Producto creado exitosamente 👏")
    window.location.href = "http://localhost:8080/producto"
}

const modificarProducto = async () => {
    const idMod = document.querySelector(`[name='idMod']`).value
    const nombre = document.querySelector(`[name='nombre']`).value
    const caracteristicas = document.querySelector(`[name='caracteristicas']`).value
    let imagen = document.querySelector(`[name='imagen']`).value
    const precio = document.querySelector(`[name='precio']`).value
    const gramaje = document.querySelector(`[name='gramaje']`).value
    const variedad_id = document.querySelector(`[name='variedad_id']`).value
    let imagenActual = document.querySelector(`[name='imagenActual']`).value

    if (imagen.substr(0, 12) == "C:\\fakepath\\") {
        imagen = imagen.substr(12);
    }
    if (imagenActual.substr(0, 12) == "C:\\fakepath\\") {
        imagenActual = imagenActual.substr(12);
    }

    const token = localStorage.getItem('jwt-token')
    const body = JSON.stringify({
        idMod,
        nombre,
        caracteristicas,
        imagen,
        precio,
        gramaje,
        variedad_id,
        imagenActual
    });

    const res = await fetch(`http://localhost:8080/modificar?_metodo=PUT`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: body
    })
    if (!res.ok) {
        alert("Error al actualizar el producto. Por favor, inténtalo de nuevo. 🔄")
        throw Error("Error al actualizar el producto. Por favor, inténtalo de nuevo. 🔄")
    }

    alert("Producto actualizado exitosamente 🙌")
    window.location.href = "http://localhost:8080/producto"
}

const eliminarProducto = async (idEliminar) => {

    var respuesta = confirm("Esta seguro que desea eliminar el producto? 🚨")


    if (respuesta) {

        const token = localStorage.getItem('jwt-token')
        const body = JSON.stringify({

            idEliminar
        });


        const res = await fetch(`http://localhost:8080/producto?_metodo=DELETE`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: body
        })

        if (!res.ok) {
            alert("Error al eliminar el producto. Por favor, inténtalo de nuevo. 🔄")
            throw Error("Error al eliminar el producto. Por favor, inténtalo de nuevo. 🔄")
        }

        alert("Producto eliminado exitosamente 👍🗑️")
        window.location.href = "http://localhost:8080/producto"
    }
}

