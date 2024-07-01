const { conn } = require('../db/dbconnect')
const jtoken = require('jsonwebtoken')
const crypt = require('bcryptjs')
const jwtconfig = require('./../config/jwtconfig.js')

module.exports = {
	registro: async (req, res) => {

		const { user, password, nombrecompleto, email, idRol } = req.body

		const [[valido]] = await conn.query(`SELECT * FROM usuarios WHERE username = ?`, user)

		if (valido !== undefined) {

			res.status(404).send('Ya existe Usuario')
		} else {
			const passEncriptada = await crypt.hash(password, 5)
			const [creado] = await conn.query(`INSERT INTO usuarios (username, password, nombre_completo, email, id_rol) VALUES (?, ?, ?, ?, ?);`, [user, passEncriptada, nombrecompleto, email, idRol])
			res.redirect('/login.html')
		}
	},

	login: async (req, res) => {

		const { user, password } = req.body
		const [[valido]] = await conn.query(`SELECT * FROM usuarios WHERE username = ?`, user)

		if (valido === undefined) {
			res.status(404).send('Usuario no encontrado')
		} else if (!(await crypt.compare(password, valido.password))) {
			res.status(401).send({ auth: false, token: null })
		} else {
			token = jtoken.sign({ id: valido.id }, jwtconfig.secretKey, { expiresIn: jwtconfig.tokenExpiresIn })
			res.status(201).send({ auth: true, token, idRol: valido.id_rol })

		}
	},

	logout: async (req, res) => {
		res.redirect('/login.html')
	},

	verificarToken: async (req, res) => {
		try {

			const token = req.params.token
			const valido = jtoken.verify(token, jwtconfig.secretKey)

			res.status(200).send({ auth: true })
		} catch (error) {
			res.status(500).send({ auth: false, message: "Token Expirado" })
		}

	},
}