const express = require("express");

const app = express();
//need to set engine
app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.get("/", function (req, res){
    res.render("index");
});

app.get("/contact", function (req, res){
    res.render("contact");
});

app.get("/profile/:id", function(req,res){
    res.render("profile", {id: req.params.id});
})

app.listen(3000, () => {
    console.log("server is running.");
})