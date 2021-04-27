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
const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'dev1337',
  database: 'netsm'
});

connection.query('SELECT * FROM Greeting', (data: any, error: Error) => {
  if (error) console.error(error);
  console.log(data);
});

/** SERVE HTML */
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from server.ts!</h1>');
});

/** LISTEN */
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));