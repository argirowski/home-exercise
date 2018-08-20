var express = require("express");

var app = express();

app.get("/", function(request, response) {
	response.send("Hello there, welcome to my exercise");
});

app.get("/speak/:animalName", function(request, response) {
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof",
		cat: "Meow",
		goldfish: "..."
	}
	var name = request.params.animalName.toLowerCase();
	var sound = sounds[name];


	response.send("The " + name + " says " + sound);
});

app.get("/repeat/:message/:randomTimes", function(request,response) {
	var message = request.params.message;
	var randomTimes = Number(request.params.randomTimes);
	var result = "";

	for(var i = 0; i < randomTimes; i++) {
		result += message + " ";
	}

	response.send(result);
});

app.get("*", function(request, response) {
	response.send("Sorry, Page Not Found !!!");
});

app.listen(8008, function() {
	console.log("This Route is Functional");
});