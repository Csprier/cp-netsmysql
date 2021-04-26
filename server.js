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
var pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.database
});
pool.getConnection(function (error, connection) {
    connection.query('SELECT 1 + 1 AS solution', function (error, rows, fields) {
        if (error)
            console.error(error);
        console.log('The solution is: ', rows[0].solution);
        connection.release();
    });
});
pool.on('connection', function (connection) {
    console.log('Connected!');
});
pool.end(function (error) { return console.error(error); });
app.get('/', function (req, res) {
    res.send('<h1>Hello from server.ts!</h1>');
});
app.listen(PORT, function () { return console.log("Running on http://localhost:" + PORT + "!"); });
/** CONNECTION */
// const connection = mysql.createConnection(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.database}`);
// connection.connect((error: Error) => {
//   if (error) {
//     console.error('error connecting: ' + error.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });
// connection.query('SELECT 1 + 1 AS solution', (error: Error, rows: any, fields: any) => {
//   if (error) console.error(error);
//   console.log('The solution is: ', rows[0].solution);
//   connection.release();
// });
