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
// const db = require('./database.js');
app.use(helmet_1.default());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'dev1337',
    database: 'netsm',
    acquireTimeout: 6000000,
});
connection.connect();
connection.query('SELECT * FROM Greeting', function (error, rows) {
    if (error)
        console.log('Error:', error);
    console.log('rows: ', rows);
});
connection.end();
/** LISTEN */
app.listen(PORT, function () { return console.log("Running on http://localhost:" + PORT + "!"); });
