const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  fs.readFile('index.html', (err, data) => {

    if (err) {
      res.writeHead(500);
      res.end("Error");
      return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();

  });

});

server.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});