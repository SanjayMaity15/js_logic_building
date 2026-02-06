// decimal to binary

// let decimalNum = 8;
// let multiply = 1;
// let result = 0;

// while (decimalNum !== 0) {
//     let digit = decimalNum % 2;
//     result = (digit * multiply) + result
//     decimalNum = Math.floor(decimalNum / 2)
//     multiply *= 10
// }

// Decimal to octal

// let decimalNum = 8;
// let multiply = 1;
// let result = 0;

// while (decimalNum !== 0) {
// 	let digit = decimalNum % 8;
// 	result = digit * multiply + result;
// 	decimalNum = Math.floor(decimalNum / 8);
// 	multiply *= 10;
// }

// console.log(result)


// octal to decimal

let decimalNum = 345;
let multiply = 1;
let result = 0;

while (decimalNum !== 0) {
	let digit = decimalNum % 10;
	result = digit * multiply + result;
	decimalNum = Math.floor(decimalNum / 10);
	multiply *= 8;
}

console.log(result)

// binary to decimal

let decimalNum = 345;
let multiply = 1;
let result = 0;

while (decimalNum !== 0) {
	let digit = decimalNum % 10;
	result = digit * multiply + result;
	decimalNum = Math.floor(decimalNum / 10);
	multiply *= 8;
}

console.log(result)
