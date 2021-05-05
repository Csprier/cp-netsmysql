import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;
const app: Express = express(); // Use Express Type declaration
const bodyParser = require('body-parser');
// const db = require('./database.js');

// ===============================================================================================
// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors);

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'dev1337',
  database: 'netsm'
});
connection.connect((err: Error) => {
  if (err) {
    console.error('error connecting ==>> ' + err.stack);
    return;
  }
  console.log('connected as id ==>> ' + connection.threadId);
});
// connection.connect((error: Error) => {
//   if (error) {
//     console.log('Error ==>> ', error);
//   }
//   console.log('Connection established!');
//   connection.query('SELECT * FROM Greeting', (error: Error, rows: any) => {
//     if (error) console.log('Query error ==>> ', error);
//     console.log('Message:', rows);
//     connection.end();
//   })
// });
connection.end();

// connection.query('SELECT * FROM Greeting', (error: Error, rows: any) => {
//   if (error) console.log('Query error ==>> ', error);
//   console.log('Message:', rows);
//   connection.end();
// })

/** LISTEN */
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));