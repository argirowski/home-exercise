var express = require("express");

var app = express();

app.get("/", function(request, response) {
	response.render("home.ejs");
	// response.send("<h1>Welcome To The Home Page</h1><h2>Welcome Again</h2>");
});

app.get("/fallinlovewith/:thing", function(request, response) {
	var thing = request.params.thing;
	// response.send("You fell in love with a " + thing);
	response.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(request, response) {
	var posts = [
	{title: "Post 1", author: "George"},
	{title: "Post 2", author: "Suzy"},
	{title: "Post 3", author: "Megan"},
	{title: "Post 4", author: "Hulio"},
	{title: "Post 5", author: "Brittney"}
	];
	response.render("posts.ejs", {posts: posts})
});

app.listen(3000, function() {
	console.log("Some More Express");
});