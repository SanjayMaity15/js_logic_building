// Find factors of a number
let number = 100;
let factors = [];

for (let i = 1; i <= Math.sqrt(number); i++) {
	if (number % i === 0) {
		let mid = Math.floor(factors.length / 2);
		factors.splice(mid, 0, i);
		if (i !== number / i) factors.splice(mid + 1, 0, number / i);
	}
}

console.log(factors);

// Find multiple of 4 imit 30
let num = 4;
let limit = 30

let multiple = []



for (let i = 4; i <= limit; i = i + num){
    multiple.push(i)
}


console.log(multiple)


// HCF || GCD

let n1 = 12, n2 = 18;
let min = Math.min(n1, n2)

for (let i = min; i >= 1; i--){
    if (n1 % i === 0 && n2 % i === 0) {
        console.log(i)
        break;
        
    }
}


// LCM

let n11 = 12, n22 = 18, n33 = 467;
let max = Math.max(n11, n22, n33)

for (let i = max; ; i += max) {
	if (i % n11 === 0 && i % n22 === 0 && i % n33 === 0) {
		console.log(i)
		break; // exit loop once LCM is found
	}
}


// perfect number

let n = 28;
let sum = 0;
for (let i = 1; i <= (Math.floor(n / 2)); i++){
    if (n % i === 0)
        sum += i;
}

console.log(sum === n ? "Perfect" : "not")


// Second highest GCD

let num1 = 7, num2 = 8

let minn = Math.max(num1, num2)
let gcd = 1
let second;
for (let i = 1; i <= minn; i++){
    if (num1 % i === 0 && num2 % i === 0) {
        second = gcd
        gcd = i
    }
}

console.log(gcd)
console.log(second)