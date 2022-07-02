const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: "Thuta",
        age: 21,
        address: "Yangon"
    }

    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');