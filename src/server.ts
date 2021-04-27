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



pool.end((error: Error) => console.error(error));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from server.ts!</h1>');
});
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));

/** CONNECTION */
const connection = mysql.createConnection(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.database}`);
connection.connect((error: Error) => {
  if (error) throw error;
  console.log('connected as id: ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', (error: Error, rows: any, fields: any) => {
  if (error) console.error(error);
  console.log('The solution is: ', rows[0]);
  connection.release();
});

connection.end(function (error: Error) {
  if (error) console.log('error:' + error.message);
  console.log('Close the database connection.');
});

/** POOL */
// const pool = mysql.createPool({
//   host: process.env.HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.database
// });

// pool.getConnection((error: Error, connection: any) => {
//   connection.query('SELECT 1 + 1 AS solution', (error: Error, rows: any, fields: any) => {
//     if (error) console.error(error);
//     console.log('The solution is: ', rows[0].solution);
//     connection.release();
//   });
// });

// pool.on('connection', (connection: any) => {
//   console.log('Connected!');
// });