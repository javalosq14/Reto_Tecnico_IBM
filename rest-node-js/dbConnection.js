const mysql = require('mysql');

module.exports = () => {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'IBMSUM',
		port: 3307
	})
}
