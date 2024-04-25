const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'heathcare',
  port: 3306 // Default MySQL port
});

module.exports = pool;
