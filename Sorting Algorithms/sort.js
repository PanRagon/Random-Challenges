var unsortedArray = [];

while(unsortedArray.length < 100) {
	unsortedArray.push(Math.floor(Math.random() * 1001));
}

console.log(unsortedArray);


//Bubble Sort

function bubbleSort(arr) {
	let swap = false;
	
	do {
		swap = false;
		for(let i=0; i < arr.length-1; i++) {
			if(arr[i] > arr[i + 1]) {
				const temp = arr[i];

				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swap = true;
			}
		}
	}

	while(swap);
	return arr;
}

let sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);