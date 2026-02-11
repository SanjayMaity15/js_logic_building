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

const removeDuplicate = []

for (let i = 0; i < s.length; i++){
    if (!removeDuplicate.includes(s[i]))
        removeDuplicate.push(s[i])
}

// console.log(removeDuplicate)



// Merge two array

const my1 = [1, 2, 3]
const my2 = [4, 5]

// const arrayMerged = [...my1, ...my2]
// console.log(arrayMerged)

function mergedArray(my1, my2) {
    const mergeArray = []

    for (let elem of my1) {
        mergeArray.push(elem)
    }
    for (let elem of my2) {
        mergeArray.push(elem)
    }

    return mergeArray

}

console.log(mergedArray(my1, my2))



// Find the second largest element


// Find the second smallest element


// Rotate an to the right by k steps k = 2
// input: [1, 2, 3, 4, 5]
// output: [4, 5, 1, 2, 3]


// check if two array are equal or not

// input : [1, 2, 3] == [1, 2, 3]


// Count even or odd number in an array

// Find all unique pairs whose sum equal to target
// input : [1, 2, 3, 4, 5]  target = 6;
// output : (1, 5) (2, 4)



// Left shift an array by one position
// input: [1, 2, 3, 4, 5]
// output: [2, 3, 4, 5 , 1]
