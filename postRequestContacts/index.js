var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var contacts = ["George", "Mary", "Kate", "Max", "Suzy", "Daniel", "Brittney"];

app.get("/", function(request, response) {
	response.render("home");
});

app.get("/contacts", function(request, response) {
	
	response.render("contacts", {contacts: contacts});
});

app.post("/addcontact", function(request, response) {
	var newContact = request.body.newcontact;
	contacts.push(newContact);
	response.redirect("/contacts");
});

app.listen(8008, function() {
	console.log("A Simple Express App");
});