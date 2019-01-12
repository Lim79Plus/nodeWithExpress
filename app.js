var express = require("express");
var app = express();

// set static page directory **for css, js etc
app.use(express.static("public"));
// set default view page extention
app.set("view engine", "ejs");

app.get("/",function(req, res) {
    res.render("home");
    // res.send("Welcome to the home page!");
});

app.get("/fallinglovewith/:animal",function(req, res) {
    var animal = req.params.animal;
    res.render("love",{animalVar: animal});
});

app.get("/posts",function(req, res) {
    var posts = [
        {title: "Post 01", auther :"Susy"},
        {title: "Post 02", auther :"MAX"},
        {title: "Post 03", auther :"Jone"}
    ];
    res.render("post", {posts: posts});
});

app.listen(3000, function() {
    console.log("Server is Listening!!");
});