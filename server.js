"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var PORT = process.env.PORT;
var app = express_1.default(); // Use Express Type declaration
var bodyParser = require('body-parser');
// const db = require('./database.js');
// ===============================================================================================
// CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors_1.default);
app.use(helmet_1.default());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'dev1337',
    database: 'netsm'
});
connection.connect(function (err) {
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
app.listen(PORT, function () { return console.log("Running on http://localhost:" + PORT + "!"); });
