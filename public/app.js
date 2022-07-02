const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');