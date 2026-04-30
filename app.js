const http = require('http');

http.createServer((req, res) => {
  res.end('Backend initial commit 🚀');
}).listen(3000);
