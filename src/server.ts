import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app: Express = express(); // Use Express Type declaration
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** POOL */
// const pool = mysql.createPool({
//   host: 'localhost:3306',
//   user: 'root',
//   password: 'dev1337',
//   database: 'netsm'
// });

// pool.query('SELECT * FROM Greeting', (data: any, error: Error) => {
//   if (error) console.error(error);
//   console.log(data);
// });

/** CONNECTION */
// const connection = mysql.createConnection(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.database}`);
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'dev1337'
});

db.connect((error: Error) => {
  if (error) console.log('An error has occurred when trying to connect to the database.');
  console.log('Connection established.');
});

db.end((error: Error) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
  if (error) console.log('error: ', error);
  else console.log('done: ');
});

/** LISTEN */
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));