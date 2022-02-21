const http = require('http');
const routes = require('./routes');

// //create request listener
// function requestListener(req, res) {
//   //   res.writeHead(200, { "Content-Type": "text/plain" });
//   //   res.end("Hello World\n");
// }
//create server
const server = http.createServer(routes);

server.listen(3000);
