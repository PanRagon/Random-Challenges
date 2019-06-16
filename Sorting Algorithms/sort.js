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


//Merge Sort

function divide(arr) {
	if(arr.length < 2) {
		return arr;
	}
	else {
		let middle = Math.floor(arr.length / 2);
		let arr1 = arr.slice(0, middle);
		console.log(arr1);
		let arr2 = arr.slice(middle);
		//Divide array until there's only 1 value left, then start sorting
		return conquer(divide(arr1), divide(arr2));
	}
}


function conquer(arr1, arr2) {
	//Store values in sorted order
	let sorted = [];
	while(arr1.length && arr2.length) {
		if(arr1[0] <= arr2[0]) {
			sorted.push(arr1.shift());
		}
		else {
			sorted.push(arr2.shift());
		}
	}
	//Build a final array of sorted values
	let sortedArray = [...sorted, ...arr1, ...arr2];
	console.log(sorted);
	return sortedArray;
}

let sortedArray = divide(unsortedArray);
console.log(sortedArray)