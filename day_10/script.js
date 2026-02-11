// Find the maximum and minimum of an array

const arr = [2, 56, 23, 78, 232, 67, 42, 12, 90];

let max_Value = Number.MIN_SAFE_INTEGER;
let min_Value = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > max_Value) {
		max_Value = arr[i];
	}
	if (arr[i] < min_Value) {
		min_Value = arr[i];
	}
}

// console.log({ max_Value, min_Value })

// Reverse an array in manual way

const array = [234, 546, 2, 56, 245, 789, 45];

let left = 0;
let right = array.length - 1;

while (left < right) {
	let temp = array[left];
	array[left] = array[right];
	array[right] = temp;
	left++;
	right--;
}

// console.log(array)

// check the array is sorted or not accending

const array1 = [1, 2, 3, 4, 5];

let isSorted = true;

for (let i = 0; i < array1.length - 1; i++) {
	if (array1[i] > array1[i + 1]) {
		isSorted = false;
		break;
	}
}

// console.log(isSorted)

// check the array is sorted or not accending

const array11 = [5, 3, 2];

let isSortedd = true;

for (let i = 0; i < array11.length - 1; i++) {
	if (array11[i] < array11[i + 1]) {
		isSortedd = false;
		break;
	}
}

// console.log(isSortedd)

// check the array is sorted or not accending or decending or unsorted

// const array2 = [1, 2, 3, 4, 5];

// let isSorted2 = "";

// for (let i = 0; i < array2.length - 1; i++){
//     if (array2[i] > array2[i + 1])
//     {
//         isSortedd = "Acccending";
//         break;
//     }
// }

// console.log(isSorted2)

const s = [1, 2, 3, 4, 5, 6, 3, 2];

const result = s.filter((elem, index, arr) => arr.indexOf(elem) === index);

// console.log(result)

const removeDuplicate = [];

for (let i = 0; i < s.length; i++) {
	if (!removeDuplicate.includes(s[i])) removeDuplicate.push(s[i]);
}

// console.log(removeDuplicate)

// Merge two array

const my1 = [1, 2, 3];
const my2 = [4, 5];

// const arrayMerged = [...my1, ...my2]
// console.log(arrayMerged)

function mergedArray(my1, my2) {
	const mergeArray = [];

	for (let elem of my1) {
		mergeArray.push(elem);
	}
	for (let elem of my2) {
		mergeArray.push(elem);
	}

	return mergeArray;
}

// console.log(mergedArray(my1, my2))

// Find the second largest element

function findSecondLargestInArray(arr) {
	let max_Value = Number.MIN_SAFE_INTEGER;
	let secondMax_Value = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max_Value) {
			secondMax_Value = max_Value;
			max_Value = arr[i];
		}
		if (arr[i] > secondMax_Value && arr[i] < max_Value) {
			secondMax_Value = arr[i];
		}
	}

	return secondMax_Value;
}

// console.log(findSecondLargestInArray([1, 2, 3, 43, 8,967, 234, 7,232, 4, 5, 6]))

// Find the second smallest element

function findSecondSmallestInArray(arr) {
	let smallest = Number.MAX_SAFE_INTEGER;
	let secondSmallest = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			secondSmallest = smallest;
			smallest = arr[i];
		}

		if (arr[i] < secondSmallest && arr[i] < smallest) {
			secondSmallest = arr[i];
		}
	}

	return secondSmallest;
}

// console.log(findSecondSmallestInArray([234, 56, 23, 6, 237, 78,48]))

// Rotate an to the right by k steps k = 2
// input: [1, 2, 3, 4, 5]
// output: [4, 5, 1, 2, 3]

function rightShiftByK(arr, k) {
	let n = arr.length;

	for (let i = 0; i < k; i++) {
		let lastElem = arr[n - 1];

		for (let j = n - 1; j > 0; j--) {
			arr[j] = arr[j - 1];
		}

		arr[0] = lastElem;
	}

	return arr;
}

// console.log(rightShiftByK([1, 2, 3, 4, 5], 2))

// check if two array are equal or not

// input : [1, 2, 3] == [1, 2, 3]

function checkBothArrayValueSameOrNot(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;
}

// console.log(checkBothArrayValueSameOrNot([1,2, 3], [1, 2, 3]))

// Count even or odd number in an array

function countEvenAndOddNumber(arr) {
	let even = [];
	let odd = [];

	for (let el of arr) {
		if (el % 2 === 0) {
			even.push(el);
		} else [odd.push(el)];
	}

	return { even, odd };
}

// console.log(countEvenAndOddNumber([2, 45, 3, 6, 9, 56, 89, 754,345, 442, 64, 75]))

// Find all unique pairs whose sum equal to target
// input : [1, 2, 3, 4, 5]  target = 6;
// output : (1, 5) (2, 4)

function findUniquePair(arr, target) {
	const finalResult = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				const result = `${arr[i]} ${arr[j]} indexes are ${i} ${j}`;
				finalResult.push(result);
			}
		}
	}

	return finalResult;
}

// console.log(findUniquePair([1, 2, 3, 4, 5], 6));

// Left shift an array by one position
// input: [1, 2, 3, 4, 5]
// output: [2, 3, 4, 5 , 1]

function leftShiftByK(arr, k) {
	let n = arr.length;

	for (let i = 0; i < k; i++) {
		let firstElem = arr[0];

		for (let j = 0; j < n -1; j++) {
			arr[j] = arr[j + 1];
		}

		arr[n - 1] = firstElem;
	}

	return arr;
}

console.log(leftShiftByK([1, 2, 3, 4, 5], 1));