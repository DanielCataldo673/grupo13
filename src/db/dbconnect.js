const mysql = require('mysql2')

const pool = mysql.createPool({
	host: 'sql10.freesqldatabase.com',
	user: 'sql10713142',
	password: 'VtsJ15DZ9h',
	database: 'sql10713142',
	port: 3306,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
})

module.exports = {
	conn: pool.promise()
}