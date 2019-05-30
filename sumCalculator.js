//Title: Sum Calculator
//Language: JavaScript
//Desciption: I'll be creating a function that sums all numbers inputed from the user. There is no restriction to how many numbers the user may input,
//and the user may stop inputing digits whenever they please. The calculator will only take input from prompt screen (no HTML).

function sumCalculator() {
	let stopInput = false;
	let calculator = 0;

	while(stopInput == false) {
		let input = prompt("What number would you like to add? Add only numbers, and type stop when you wish to stop");
		let number = parseFloat(input);
		if(input == null) {
			stopInput = true;
			alert("The result is " + calculator);
		}
		else if(input.toString().toLowerCase() === "stop") {
			stopInput = true;
			alert("The result is " + calculator);
		}
		else if(isNaN(number)) {
			alert("I'm *preeetty* sure that's not a number, try again")
		}
		else calculator += number;
	}
}

sumCalculator();