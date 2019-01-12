var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// set static page directory **for css, js etc
app.use(express.static("public"));
// set for useing request body
app.use(bodyParser.urlencoded({extended: true}));
// set default view page extention
app.set("view engine", "ejs");

var friends = ["Dave", "Mindy", "Chris"];

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

app.get("/friends",function(req, res) {
    res.render("friends", {friends: friends});
});

app.post("/addfriend",function(req, res) {
    var newFriend = req.body.newfriend;
    // console.log(newFriend);
    if (newFriend != "") {
        friends.push(newFriend);
    }
    // call redirect app.get("/friends")
    res.redirect("/friends");
});

app.listen(3000, function() {
    console.log("Server is Listening!!");
});