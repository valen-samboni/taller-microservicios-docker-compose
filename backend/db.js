const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'tienda'
});

// Función para intentar conexión varias veces
function connectWithRetry() {
  connection.connect((err) => {
    if (err) {
      console.log("MySQL no listo, reintentando en 5 segundos...");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("Conectado a MySQL");

      // Crear tabla servicios
      const createTable = `
        CREATE TABLE IF NOT EXISTS servicios (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nombre VARCHAR(100)
        )
      `;

      connection.query(createTable, (err) => {
        if (err) {
          console.log("Error creando tabla");
        } else {
          console.log("Tabla lista");

          // Insertar datos
          const insert = `
            INSERT INTO servicios (nombre)
            VALUES 
            ('Pestañas pelo a pelo'),
            ('Diseño de cejas'),
            ('Limpieza facial'),
            ('Uñas acrilicas')
          `;

          connection.query(insert, (err) => {
            if (err) {
              console.log("Datos ya existen o error");
            } else {
              console.log("Datos insertados");
            }
          });
        }
      });
    }
  });
}

connectWithRetry();

module.exports = connection;