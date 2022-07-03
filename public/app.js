const express = require("express");

const app = express();
//need to set engine
app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.send("This is home page.");
});

app.get("/contact", function (req, res){
    res.send("This is contact page.");
});

app.get("/profile/:id", function(req,res){
    res.render("profile", {id: req.params.id});
})

app.listen(3000, () => {
    console.log("server is running.");
})