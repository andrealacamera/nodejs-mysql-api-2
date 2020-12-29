const dotenv = require("dotenv");
const { createPool } = require("mysql");
dotenv.config();

const pool = createPool({
    port: process.env.DB_PORT,
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWD,
    database: process.env.DB_DATABASE,
    connectionLimit: 15
});

module.exports = pool;