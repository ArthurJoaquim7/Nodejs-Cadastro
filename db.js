import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

//VARIABLE
const port = process.env.PORT || 8081;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbData = process.env.DB_DATA;

export const db = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbData
});
