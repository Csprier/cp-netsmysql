const mysql = require('mysql');

const db = mysql.createPool({
	connectionLimit: 10, // default = 10
	host: 'localhost',
	user: 'root',
	password: 'dev1337',
	database: 'netsm',
	acquireTimeout: 6000000,
});

module.exports = db;
