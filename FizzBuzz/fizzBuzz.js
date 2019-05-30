//Title: FizzBuzz
//Language: Javascript
//Description: It's fizzbuzz, yadda yadda, you know what to expect. Generate numbers from 1 to 100.
//If a number is a multiple of 3, print "Fizz", if it's a multiple of 5, print "Buzz", if both, print "FizzBuzz". Else, print the number.

function fizzBuzz() {
	for(i = 1; i <= 100; i++) {
		let print = "";
		if(i % 3 == 0) {
			print +="Fizz";
		}
		if(i % 5 == 0) {
			print += "Buzz";
		}
		if(print == "") {
			console.log(i);
		} else console.log(print);
	}
}

fizzBuzz();