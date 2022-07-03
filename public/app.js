const express = require("express");

const app = express();
var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//need to set engine
app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.get("/", function (req, res){
    res.render("index");
});

app.get("/contact", function (req, res){
    res.render("contact", {qs: req.query});
});

app.post("/contact", urlencodedParser, function (req, res){
    console.log(req.body)
    res.render("contact-success", {data: req.body});
});

app.get("/profile/:id", function(req,res){
    res.render("profile", {id: req.params.id});
})

app.listen(3000, () => {
    console.log("server is running.");
})