const mysql = require('mysql2')

const pool = mysql.createPool({
	host: 'mysql-miosole.alwaysdata.net',
	user: 'miosole',
	password: 'Miosole67304#$',
	database: 'miosole_04',
	port: 3306,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
})

module.exports = {
	conn: pool.promise()
}