const fs = require("fs");

fs.readFile("readme.txt", "utf8", function (err, data){
    fs.writeFile("write.txt",data, () => {
        console.log('success');
    });
})
