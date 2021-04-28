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
var db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dev1337'
});
db.connect(function (error) {
    if (error)
        console.log('An error has occurred when trying to connect to the database.');
    console.log('Connection established.');
});
db.end(function (error) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
    if (error)
        console.log('error: ', error);
    else
        console.log('done: ');
});
// connection.query('SELECT * FROM Greeting', (row: any, error: Error) => {
//   if (error) console.error(error);
//   console.log(row);
// });
/** SERVE HTML */
// app.get('/', (req: Request, res: Response) => {
//   res.send('<h1>Hello from server.ts!</h1>');
// });
/** LISTEN */
app.listen(PORT, function () { return console.log("Running on http://localhost:" + PORT + "!"); });
