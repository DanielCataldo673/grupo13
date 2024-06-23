const express = require('express');
const router = express.Router();
const controladores = require('../controllers/mainControllerProducto');

const multer = require ('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `public/img/`)
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + "_" + file.originalname)
    }
})

const uploadFile = multer({storage})

router.get('/producto', controladores.getProducto);

router.post('/producto', uploadFile.single('imagen'), controladores.crearRegistro);//ejecuta multer

router.post('/producto', controladores.crearRegistro);
router.get('/modificar/:id', controladores.getModificar);
router.put('/modificar', controladores.actualizar); // Modifica la ruta y asóciala al método PUT // era /modificar/:id
router.delete('/producto', controladores.eliminar);

module.exports = router;