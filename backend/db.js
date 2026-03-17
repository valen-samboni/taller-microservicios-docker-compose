const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'tienda'
});

connection.connect((err) => {
  if (err) {
    console.log("Error conectando a MySQL");
  } else {
    console.log("Conectado a MySQL");
  }
});

module.exports = connection;