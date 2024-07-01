const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')

router.post('/registro', loginController.registro)
router.post('/login', loginController.login)
router.get('/logout', loginController.logout)
router.get('/verificarToken/:token', loginController.verificarToken)

module.exports = router