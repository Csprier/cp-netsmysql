const mysql = require('mysql');

/** CONNECTION */
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'dev1337',
	database: 'netsm',
});

db.connect((error) => {
	if (error)
		console.log(
			'An error has occurred when trying to connect to the database:',
			error
		);
	console.log('Connection established.');
});

db.end((error) => {
	// The connection is terminated gracefully
	// Ensures all previously enqueued queries are still
	// before sending a COM_QUIT packet to the MySQL server.
	if (error) console.log('error: ', error);
	console.log('Database connection terminated.');
});

module.exports = db;
