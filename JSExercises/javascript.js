console.log("hehehe");

// declare a variable
var myName = "George";
myName = "not George";
console.log(myName);
let number = 8;
const num = 10;

// Declare vs assign a variable
var a;
var a = "a";

// Code OutPut
var outPut = "First Line\n\t\\Second Line\nThird Line";
console.log(outPut);

// Concat Strings
var concat = "Hello" + " Hello Again";
console.log(concat);

// String + Variable
var name = "George";
var age = 30;
var info = "Hello, my name is " + name + " and i am " + age + " years old.";
console.log(info);

// Variable + String
var one = "one";
var two = "two";
one +=two;
console.log(one);

// Lenght of string
var name = "Maximilian";
var nameLenght = name.length;
console.log(nameLenght);

// Bracket Notation
var numbers = "321326546749874654";
var findNumber = numbers[10];
console.log(findNumber);

// Find Last Character in String
var numbers = "111111112";
var findLastNumber = numbers[numbers.length - 1];
console.log(findLastNumber);

// Multiple values in an array
var array = ["George", 30, true];
var nestedArray = [12, 58, "nested", [22, "another nested",38]];
console.log(array);
console.log(nestedArray);

// Modify Array with Indexes
var index = ["hello", "hello", "hello", "hello", "hello"];
index[2] = "replaced hello";
console.log(index);

// Multidimensional Arrays
var multi = [[3, 4, 6, 7], [11, 25, 41, 35], [236, 451, 857, 999]];
var accessMulti = multi[2][3];
console.log(accessMulti);

// Push
var arr = [1, 2, 3];
var pushArr = arr.push([4, 5, 6, 7]);
console.log(pushArr);

// Pop
var start = [1, 2, 3, 4, 5, 48];
var popStart = start.pop();
console.log(popStart);

// Shift
var start = [99, 2, 3, 4];
var shiftStart = start.shift();
console.log(shiftStart);

// Unshift
var start = [4, 5, 6];
var unshiftStart = start.unshift([1, 2, 3]);
console.log(unshiftStart);

// Functions
function firstFunc() {
	console.log("My First Function");
}

firstFunc();
firstFunc();
firstFunc();

// Function Arguments

function argFunc(a, b, c) {
	console.log(a + b + c);
}

argFunc(3, 4, 3);

// Return Statement
function subtract(num) {
	return num - 4;
}
console.log(subtract(10));

// Assigment with Returned Value
var assig = 0;
function changeAssig(num) {
	return (num + 2) * 4;
}

var assig = changeAssig(3);
console.log(assig);

// Boolean
function bool() {
	return true;
}
console.log(bool());

// IF Statement
function trueOrFalse(isItTrue) {
	if(isItTrue) {
		return "Yes, it is True";
	} else {
		return "No, it is False";
	}
}
console.log(trueOrFalse(false));

// Equality Operator
function checkIfEqual(num) {
	if(num == 10) {
		return "The Numbers Match";
	} else {
		return "Sorry, the numbers are different";
	}
}
console.log(checkIfEqual(20));

// Strict Equality Operator
function strictEqual(num) {
	if(num === 14) {
		return "The values are strictly equal";
	} else {
		return "The values are NOT strictly equal";
	}
}
console.log(strictEqual("14"));

// Inequality Operator
function notEqual(num) {
	if(num != 10) {
		return "Values are NOT equal";
	} else {
		return "Values ARE equal";
	}
}
console.log(notEqual(14));

// Strict Inequality Operator
function strNotEqual(num) {
	if(num !== 15) {
		return "Values are strictly NOT equal";
	} else {
		return "Values ARE stricly equal";
	}
}
console.log(strNotEqual("15"));

// Greater than Operator
function isGreat(num) {
	if(num > 50) {
		return "Number is greater than 50";
	} else {
		return "Number is smaller than 50";
	}
}
console.log(isGreat(78));

// Greater or Equal
function greatOrEqual(num) {
	if(num >= 10) {
		return "10 or Larger"
	} else {
		return "Less than 10"
	}
}
console.log(greatOrEqual(10));

// Logical And Operator
function testLogic(num) {
	if(num >= 50 && num <= 100) {
		return " The Number is Between 50 and 100";
	} else {
		return "The Number is Smaller Than 50 OR Larger Than 100";
	}
}
console.log(testLogic(45));

// Logical OR Operator
function testLogicOr(num) {
	if(num <= 100 || num >= 200) {
		return "The Number is Less than 100 or More than 200";
	} else {
		return "The Number is Between 101 and 199";
	}
}
console.log(testLogicOr(199));

// Else If Statement
function elseIf(num) {
	if(num == 10) {
		return "The number is 10";
	} else if(num ==20) {
		return "The number is 20";
	} else {
		return "The number is not 10 or 20";
	}
}
console.log(elseIf(15));

// Multiple Else if Statements
function multSt(num) {
	if(num < 5) {
		return "Very Small";
	} else if(num < 10) {
		return "Small";
	} else if(num < 15) {
		return "Medium";
	} else if(num < 20) {
		return "Large";
	} else {
		return "Huge";
	}
}
console.log(multSt(10));

// Else if Exercise
var names = ["George", "Thommy", "Jerry", "Billy", "Mandy", "Dexter", "Johnny Bravo"];
function guessName(par, name) {
	if(name == 1) {
		return names[0];
	} else if(name <= par - 2) {
		return names[1];
	} else if(name <= par - 1) {
		return names[2];
	} else if(name == par) {
		return names[3];
	} else if(name <= par + 1) {
		return names[4];
	} else if(name <= par + 2) {
		return names[5];
	} else if(name <= par + 3) {
		return names[6];
	}
}
console.log(guessName(5, 8));

// Switch Statement
function swithcStat(val) {
	var answer;
	switch(val) {
		case 1:
		answer = "one";
		break;
		case 2:
		answer = "two";
		break;
		case 3:
		answer = "three";
		break;
	}
	return answer;
}
console.log(swithcStat(3));

// Default Option in Switch
function defaultSwitch(val) {
	var answer;
	switch(val) {
		case 1:
		answer = "apple";
		break;
		case 2:
		answer = "orange";
		break;
		case 3:
		answer = "watermelon";
		break;
		default:
		answer = "some other fruit";
		break;
	}
	return answer;
}
console.log(defaultSwitch(58));

// Return Boolean From Function
function isLess(a, b) {
	return a > b;
}

console.log(isLess(10, 15));

// JavaScript Objects
var person = {
	"name": "George",
	"age": 30,
	"city": "Skopje",
	"friends": ["Superman", "Aquaman", "Batman"]
}

// Accessing Object Properties
// dot notation
var nameValue = person.name;
console.log(nameValue);
// bracket notation
var cityValue = person["city"];
console.log(cityValue);

// Adding Properties to an Object
var newPerson = {
	"name": "Donald",
	"age": 35,
	"city": "Moscow"
}
newPerson.hobbies = ["Running", "Hiking", "Networking"];
console.log(newPerson);

// Delete Properties from an Object
var deleteHobbies = {
	"name": "Dick",
	"age": 44,
	"city": "Texas",
	"hobbies": ["Riding Bikes", "Drinking in bars", "Trucking"]
}
delete deleteHobbies.hobbies;
console.log(deleteHobbies);

// Testing Objects For Properties
var testObj = {
	"city": "Skopje",
	"country": "Macedonia",
	"continent": "Europe"
};
function checkObj(checkProp) {
	if(testObj.hasOwnProperty(checkProp)) {
		return testObj[checkProp];
	} else {
		return "Object Not Found !!!"
	}
}
console.log(checkObj("village"));

// Accessing Nested Objects
var nestedObj = {
	"house": {
		"inside": {
			"living room": "couch",
			"bathroom": "mirror"	
		},
		"outside": {
			"garden": "grass"
		}
	}
};
var livingRoom = nestedObj.house.inside["living room"];
console.log(livingRoom);

// Assesing Nested Arrays
var myPlants = [
	{
		type: "cactus",
		list: [
		"green",
		"pointy",
		"deserty"
		]
	},
	{
		type: "rose",
		list: [
		"red",
		"pretty",
		"girly"
		]
	}
];

var secondPlant = myPlants[1].list[1];
console.log(secondPlant);

// While Loop Iteration
var myArr = [];
var i = 0;

while(i <= 10) {
	myArr.push(i);
	i++;
};
console.log(myArr);

// For Loop Iteration
var myArr = [];
for(var i = 0; i <=10; i++) {
	myArr.push(i);
}
console.log(myArr);

// For Loop Odd Numbers Iteration
var myArr = [];
for(var i = 1; i < 10; i+=2) {
	myArr.push(i);
}
console.log(myArr);

// For Loop Even Numbers
var myArr = [];
for(var i = 0; i <= 10; i+=2) {
	myArr.push(i);
}
console.log(myArr);

// For Loop Backwards Iteration
var myArr = [];
for(var i = 10; i >= 0; i--) {
	myArr.push(i);
}
console.log(myArr);

// For Loop Odd Numbers Backwards Iteration
var myArr = [];
for(var i =9; i > 0; i-=2) {
	myArr.push(i);
}
console.log(myArr);

// For Loop Array Iteration
var myArr = [88, 125, 478, 698, 223];
var finalArr;
for (var i = 0; i < myArr.length; i++) {
	finalArr += myArr[i];
}
console.log(finalArr);

// Nesting For Loops
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
function multiplyAll(arr) {
	var product = 1;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			product *= arr[i][j];
		}
	}
	return product;
}
console.log(product);

// Iterate With Do While Loops
var myArr = [];
var i = 10;
do {
	myArr.push(i);
	i++;
} while (i < 5);
console.log(i, myArr);

// Generate Random Fractions
function randomFunc() {
	return Math.random();
}
console.log(randomFunc());

// Generate Random Whole Numbers
var randomNum = Math.floor(Math.random() * 100);

function randomWholeNum() {
	return Math.floor(Math.random() * 100);
}
console.log(randomWholeNum());
console.log(randomNum);

// Generate Random Whole Numbers within a Range
function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myRandom = randomRange(10, 20);
console.log(myRandom);

// ParseInt Function
function convertToInt(str) {
	return parseInt(str);
}
console.log(convertToInt("180"));

// Parseint Function with a Radix
function convertToIntTwo(str) {
	return parseInt(str, 2);
}
console.log(convertToIntTwo("10011"));

// Ternary Operator
function checkEqual (a, b) {
	return a === b ? true : false;
}

console.log(checkEqual(5, 26));

// Multiple Ternary Operators
function checkNum(num) {
	return num > 0 ? "Positive Number" : num < 0  ? "Negative Number" : "The Number is Zero";
}
console.log(checkNum(-20));

// Arrow Functions for Anonymous Functions
// anonymous function
var magic = function() {
	return new Date();
}
// arrow function
var magic2 = () => {
	return new Date();
}
// shortened version
const magic3 = () => new Date();

// Arrow Functions with Parameters
const myConcat = (par1, par2) => par1.concat(par2);

console.log(myConcat([1, 2, 3,], [4, 5, 6]));

// Higher Order Functions
const realNumArr = [2, 2.2, -12.8, 3.14, 44, -11, 5, 6.47];

const squareList = (arr) => {
	const squareInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	return squareInt;
};
const squareInt = squareList(realNumArr);
console.log(squareInt);

// Higher Order Arrow Functions
const increment = (function() {
	return function increment (num, val = 1) {
		return num + val;
	}
})();
console.log(increment(10, 12));
console.log(increment(10));

// Using Rest operator with functions
const sum = (function() {
	return function sum(...args) {
		return args.reduce((a, b) => a + b, 0);
	};
})();
console.log(sum(2 , 4, 4, 28));

// Using Spread Operator to Evaluate Arrays
const arr1 = ["january", "february", "march", "april", "may"];
let arr2;
(function() {
	arr2 = [...arr1];
	arr1[0] = "Not a Month"
})();
console.log(arr1);
console.log(arr2);

// Destructuring in Objects
const AVG_TEMPERATURES = {
	today: 32.5,
	tommorow: 28.8
};
function getTemp(avgTemp) {
	const {tommorow : tommorowTemp} = avgTemp;
	return tommorowTemp;
}
console.log(getTemp(AVG_TEMPERATURES));

// Destructuring in Nested Objects
const LOCAL_FORECAST = {
	today: {min: 10, max: 15},
	tommorow: {min: 18, max: 23}
};
function getMaxofTom(forecast) {
	"use strict";
	const {tommorow:  {max: maxOfTom}} = forecast;
	return maxOfTom; 
}
console.log(getMaxofTom(LOCAL_FORECAST));

// Desctructuring to Assign Variables from Arrays
const [x, y, , , z] = [1, 2, 3, 4, 5, 6, 7];
console.log(x, y, z);

let q= 10, w = 20;
(() => {
	"use strict";
	[q, w] = [w, q];

})();
console.log(q);
console.log(w);

// Desctructuring with Rest Operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
	const [ , , ...arr3] = list;
	return arr3;
}
const arr3 = removeFirstTwo(source);
console.log(source);
console.log(arr3);

// Strings Using Template Literals
const person1 = {
	name: "George Argirowski",
	age: 30
};
const greeting = `Hello, my name is ${person1.name} and i am ${person1.age} years old`;
console.log(greeting);

// Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("George", 30, "Male"));

// Concise Declarative Functions
const bike = {
	gear: 3,
	setGear(newGear) {
		"use strict";
		this.gear = newGear;
	}
};
bike.setGear(14);
console.log(bike.gear);

// Getters and Setters
function makeClass() {
	class Thermostat {
		constuctor(temp) {
			this._temp = 5 / 9 * (temp - 32);
		}
		get temperature() {
			return this._temp;
		}
		set temperature(updatedTemp) {
			return this._temp = updatedTemp;
		}
	}
			return Thermostat;

}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);

