// 1 print number from 1 to N

let n1 = 5;
for (let i = 1; i <= n1; i++) {
    console.log(i)
}

// 2 print number from N to 1 without chainging the loop condition of above question

let n2 = 5;
for (let i = 1; i <= n1; i++) {
	console.log(n2 - i + 1);
}

// 3 Print all even number from 1 to N

let n3 = 100;
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 4 sum of first n natural number

let n4 = 10;
console.log(n4 * (n4 +1)/2)

// 5 Product (factorial ) of N

function fact(num) {
    if (num <= 0) {
        return null
    }

    if (num === 0 || num === 1) {
        return 1
    }

    return num * fact(num - 1)
}

console.log(fact(6))

// 6 Sum of all even number upto N


let n5 = 100;
let sum = 0;
for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
        sum += i;
	}
}

console.log(sum)


// 7 Print square of number from 1 to N

function squareNumber(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i ** 2)        
    }
}

console.log(squareNumber(20))