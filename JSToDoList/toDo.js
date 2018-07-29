var todos = ["Save a kitten"];

var input = prompt("What Would You Like To Do ?");


while(input !== "quit") {
	if (input === "list") {
		printList();
		
} 	else if(input === "new") {
	addTodo();
} else if (input === "delete") {
	deleteToDo();
}
	input = prompt("What Would You Like To Do ?");
}
	console.log("OK, you quit the app");

	function printList() {
		console.log("**************")
		todos.forEach(function(todo, i) {
			console.log(i + ": " + todo);
		});
		console.log("**************");
	}

	function addTodo() {
	var newTodo = prompt("Enter A New To Do");
	todos.push(newTodo);
	console.log(newTodo + " Added To Do");
	}

	function deleteToDo() {
	var index = prompt("Enter Index of To Do To delete");
	todos.splice(index, 1);
	console.log("Deleted To Do");
	}