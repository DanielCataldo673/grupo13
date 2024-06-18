const express = require('express')
const router = express.Router()
const controladores = require(`../controllers/mainControllerProducto`)
//const path = require('path')

router.get("/producto", controladores.getProducto)
router.post('/producto', controladores.crearRegistro)
router.get('/modificar/:id', controladores.getModificar)
router.put('/modificar', controladores.actualizar)
router.delete('/producto', controladores.eliminar)

module.exports = router