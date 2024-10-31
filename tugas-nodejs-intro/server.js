const http = require('http');

const server = http.createServer((req, res) => {
  
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server running at <http://localhost:3000/>');
});
