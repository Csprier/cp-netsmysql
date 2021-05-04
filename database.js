const mysql = require('mysql');

const db = mysql.createPool({
	connectionLimit: 10, // default = 10
	host: 'localhost',
	user: 'root',
	password: 'dev1337',
	database: 'netsm',
	acquireTimeout: 6000000,
});

db.query('SELECT * FROM Greeting', (error, results) => {
	if (error) console.log('Error:', error);
	console.log('Results: ', results);
});

// db.getConnection((error, connection) => {
// 	if (error) console.log('Error:', error);
// 	connection.release();
// });

// db.on('connection', function (connection) {
// 	connection.query('SELECT * FROM Greeting', (error, results) => {
// 		if (error) console.log('Error:', error);
// 		console.log('Results: ', results);
// 		connection.release();
// 	});
// });

// db.end((err) => {
// 	// all connections in the pool have ended
// });

module.exports = db;
