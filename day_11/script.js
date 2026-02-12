// Find missing number from range 1 to N

// input: [1, 2, 3, 5];
// output: 4

function findMissingNumber(arr) {
	let n = arr.length + 1;
	let total = (n * (n + 1)) / 2;
	let arrayTotal = 0;

	for (let i = 0; i < arr.length; i++) {
		arrayTotal += arr[i];
	}

	return total - arrayTotal;
}

// console.log(findMissingNumber([1, 3, 4, 7, 6, 5]));

// Move all zeros to the end

// input: [1, 2, 0, 6, 0]
// output: [1, 2, 6, 0, 0]

function moveAllZeroEnd(arr) {
	let position = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			arr[position] = arr[i];
			position++;
		}
	}

	for (let i = position; i < arr.length; i++) {
		arr[i] = 0;
	}

	return arr;
}

// console.log(moveAllZeroEnd([1, 2, 0, 6, 0, 0, 78, 45, 678, 38, 0, 456, 0, 67, 35]));

// Find the first repeatative character

// input: [1, 2, 5, 6, 45, 6, 5, 89]
// output: 5

function findFirstRepeataiveNumber(arr) {
	let arr1 = [];

	for (let elem of arr) {
		if (arr1.includes(elem)) {
			return elem;
		} else {
			arr1.push(elem);
		}
	}
}

// console.log(findFirstRepeataiveNumber([1, 2, 5, 6, 45, 6, 5, 89]))

// Find the sub arrays

function subArray(arr) {
	const subArray = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j <= arr.length; j++) {
			subArray.push(arr.slice(i, j));
		}
	}

	return subArray;
}

// console.log(
// 	subArray([-2, 1, -3, 4, 34, 65, 234, 54, -34, 34, 67, -353, -2341]),
// );

// Find the sum of maximum subarray means long subarray


// This approach is not optimized
function subArray(arr) {
	let maximum = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j <= arr.length; j++) {
			let subArray = arr.slice(i, j);
			let sum = 0;
			for (let i = 0; i < subArray.length; i++) {
				sum += subArray[i];
			}

			if (sum > maximum) {
				maximum = sum;
			}
		}
	}

	return maximum;
}

// console.log(subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function findMaximumSumOfLongSubArrayKadanes(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0]

    for (let i = 1; i < arr.length; i++){
        currentSum = Math.max(arr[i], arr[i] + currentSum)
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

// console.log(findMaximumSumOfLongSubArrayKadanes([1, 4, -5, 7, -3]))

function findMaxSubUsingAndReturnArrayAlso(arr) {
	let maxSum = arr[0];
	let currentsum = arr[0]

	let start = 0, end = 0, tempStart = 0;

	for (let i = 1; i < arr.length; i++){
		if (arr[i] > arr[i] + currentsum) {
			currentsum = arr[i];
			tempStart = i;
		} else {
			currentsum += arr[i];
		}


		if (currentsum > maxSum) {
			maxSum = currentsum;
			start = tempStart;
			end = i
		}

	}

	const maxSubArray = arr.slice(start, end + 1)

	return {maxSubArray, maxSum}
}

console.log(findMaxSubUsingAndReturnArrayAlso([-2, 4, 7, -5, 67, -345, 2, 12, -5634, 3, 3533,  3, -4, 56]))

// H/W

// Find the longest subarray with sum = k
// input: [1, 2, 3, 4, 5] K = 9
// output: [2, 3, 4] = 9

function longestSubArrayWithSumK(arr, k) {
	
	let maxLength = 0
	let maxSubArray;

	for (let i = 0; i < arr.length; i++){
		for (let j = i + 1; j <= arr.length; j++){
			let subArray = arr.slice(i, j);
			let sum = 0;
			for (let i = 0; i < subArray.length; i++){
				sum+= subArray[i]
			}

			if (sum === k && subArray.length > maxLength) {
				maxLength = subArray.length;
				maxSubArray = subArray;
			}
		}
	}

	return {maxSubArray, maxLength}


}

console.log(longestSubArrayWithSumK([1, 2, 3, 4, 5], 9))




// Find the length of longest subarray with no repeating element
// input: [1, 2, 3, 1, 2, 3, 4]
// output: 4




// maximum subarray (kadane algo)
// input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// output: [4, -1, 2, 1]




// Find the longest incresing subarray(continuous)

// input: [1, 2, 2, 3, 4, 5]
// output: length = 4, subarray = [2, 3, 4, 5]

