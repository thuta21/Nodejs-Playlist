const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readMyStream = fs.createReadStream(__dirname + "/index.html", "utf8");

    readMyStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');