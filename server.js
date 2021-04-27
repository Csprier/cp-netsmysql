"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT;
var app = express_1.default(); // Use Express Type declaration
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(helmet_1.default());
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
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'dev1337'
});
connection.query('SELECT * FROM Greeting', function (row, error) {
    if (error)
        console.error(error);
    console.log(row);
});
/** SERVE HTML */
// app.get('/', (req: Request, res: Response) => {
//   res.send('<h1>Hello from server.ts!</h1>');
// });
/** LISTEN */
app.listen(PORT, function () { return console.log("Running on http://localhost:" + PORT + "!"); });
