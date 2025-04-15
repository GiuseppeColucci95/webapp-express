//import mysql2
const mysql = require('mysql2');

//credentials
const credentials = {
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
}

//create connection instance
const connection = mysql.createConnection(credentials);

//connection to mysql
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

//export connection
module.exports = connection;