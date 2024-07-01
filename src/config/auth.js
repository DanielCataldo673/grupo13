const jwt = require('jsonwebtoken')
const jwtconfig = require('./jwtconfig')

module.exports = (req, res, next) => {
	const authHeader = req.headers['authorization']
	if (!authHeader) return res.status(403).send({ auth: false, message: 'No se proveyó un token' })
	const token = authHeader.split(' ')[1]
	if (!token) return res.status(403).send({ auth: false, message: 'Token errado' })
	jwt.verify(token, jwtconfig.secretKey, (err, coded) => {
		if (err) return res.status(403).send({ auth: false, message: 'Token no autorizado' })

		next()
	})
}