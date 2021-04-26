import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;
const app: Express = express(); // Use Express Type declaration
const bodyParser = require('body-parser');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from server.ts!</h1>');
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}!`));