var express = require("express");
var app = express();

app.get("/",function(req, res) {
    res.render("home.ejs");
    // res.send("Welcome to the home page!");
});

app.get("/fallinglovewith/:animal",function(req, res) {
    var animal = req.params.animal;
    res.render("love.ejs",{animalVar: animal});
});

app.listen(3000, function() {
    console.log("Server is Listening!!");
});