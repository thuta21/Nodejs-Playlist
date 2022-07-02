const http = require("node:http");
const fs = require("node:fs");

var readMyStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");

readMyStream.on("data", (chunk) => {
    console.log("new chunk received");
    console.log(chunk);
})

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify({
//         data: 'Hello World!'
//     }));
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');