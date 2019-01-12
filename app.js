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

app.get("/posts",function(req, res) {
    var posts = [
        {title: "Post 01", auther :"Susy"},
        {title: "Post 02", auther :"MAX"},
        {title: "Post 03", auther :"Jone"}
    ];
    res.render("post.ejs", {posts: posts});
});

app.listen(3000, function() {
    console.log("Server is Listening!!");
});