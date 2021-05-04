import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app: Express = express(); // Use Express Type declaration
const bodyParser = require('body-parser');
// const db = require('./database.js');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mysql = require('mysql');
const connection = mysql.createConnection({
  connectionLimit: 10, // default = 10
  host: 'localhost',
  user: 'root',
  password: 'dev1337',
  database: 'netsm',
  acquireTimeout: 6000000,
});
connection.connect();
connection.query('SELECT * FROM Greeting', (error: Error, rows: any) => {
  if (error) console.log('Error:', error);
  console.log('rows: ', rows);
});
connection.end();

/** LISTEN */
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));