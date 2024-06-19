const express = require('express');
const router = express.Router();
const controladores = require('../controllers/mainControllerProducto');

router.get('/producto', controladores.getProducto);
router.post('/producto', controladores.crearRegistro);
router.get('/modificar/:id', controladores.getModificar);
router.put('/modificar/:id', controladores.actualizar); // Modifica la ruta y asóciala al método PUT
router.delete('/producto', controladores.eliminar);

module.exports = router;