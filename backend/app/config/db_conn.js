import pkg from 'pg'; 
const { Client } = pkg;
import dotenv from 'dotenv';

dotenv.config();

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

export default db_conn;