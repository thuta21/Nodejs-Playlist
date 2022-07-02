const fs = require("fs");

// create dir and store write file
/*fs.mkdir("stuff", () => {
    fs.readFile("readme.txt", (err, data) => {
        fs.writeFile("stuff/writeme.txt", data, () => {
            console.log("success")
        })
    })
})*/

fs.unlink("./stuff/writeme.txt", () => {
    fs.rmdir("stuff", () => {
        console.log('success');
    })
})
