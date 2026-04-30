const http = require('http');

http.createServer((req, res) => {
  res.end('CI/CD triggered successfully 🚀');
}).listen(3000);
