// isEven

// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

function isEven(num) {
	return num % 2 === 0;
}

// factorial

function factorial(num) {
	var result = 1;
	for (var i = 2; i <= num; i++) {
		result *= i;
	}
	return result;
}

// kebabToSnake

function kebabToSnake(str) {
	var newStr = str.replace(/-/, "_");
	return newStr;
}