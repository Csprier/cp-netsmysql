import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app: Express = express(); // Use Express Type declaration
const bodyParser = require('body-parser');
const db = require('./database.js');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.query('SELECT * FROM Greeting', (req: Request, res: Response, error: Error) => {
  if (error) console.log('Error in query:', error);
  console.log('Response:', res);
});

/** LISTEN */
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));