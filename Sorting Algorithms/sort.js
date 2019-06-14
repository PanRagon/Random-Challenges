var unsortedArray = [];

while(unsortedArray.length < 10) {
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
	console.log(arr);
	return arr;
}

//Insertion Sort

function insertionSort(arr) {
	for(var i = 0; i < arr.length; i++) {
		let store = arr[i];
		for(var j = i - 1; j > -1 && arr[j] > store; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = store;
	}
	return arr;
}

let sortedArray = insertionSort(unsortedArray);
console.log(sortedArray)