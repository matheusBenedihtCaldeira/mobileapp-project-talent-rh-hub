"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pg = require('pg'); var _pg2 = _interopRequireDefault(_pg); 
const { Client } = _pg2.default;
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

const db_conn = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

const connectDB = async () => {
    try {
        await db_conn.connect();
        console.log("Connected with PostgreSQL!");
    } catch (err) {
        console.error("Erro ao conectar: " + err);
    }
};

connectDB();

exports. default = db_conn;