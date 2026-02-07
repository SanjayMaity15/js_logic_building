// 1 Split the number

// let num = 23472483;

// let arr = []

// while (num !== 0) {
//     let digit = num % 10;
//     arr.unshift(digit)
//     num  = Math.floor(num / 10)
// }

// console.log(arr)

// 1 reverse the number

// let num = 23472483;

// let rev = 0;

// while (num !== 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit
//     num  = Math.floor(num / 10)
// }

// console.log(rev)


// 3 Remove decimal point mathematically

let n = 12.34
// console.log(n.toString().split(".").join(""))

function removeDecimal(n) {
    while (!Number.isInteger(n)) {
		n *= 10;
    }
    
    return n;
}

console.log(removeDecimal(3325.345))


// 4 separate whole and fractional part of a number

let number = 34.456;

const [whole, fraction] = (number.toString().split("."))
console.log({ whole, fraction })
