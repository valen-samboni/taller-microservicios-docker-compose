const http = require('http');
const db = require('./db');

const server = http.createServer((req, res) => {

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/servicios') {

    db.query('SELECT * FROM servicios', (err, results) => {
      if (err) {
        console.log(err);
        res.writeHead(500);
        res.end("Error en la consulta");
        return;
      }

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(results));
    });

  } else {
    res.writeHead(200);
    res.end("Backend del SPA funcionando 💅");
  }

});

server.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});