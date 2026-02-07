// generate prime number program using function
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


// Fibonacci number

let n1 = 0;
let n2 = 1;
let next;


for (let i = 1; i <= 100; i++){
    console.log(n1)
    next = n1 + n2;
    n1 = n2;
    n2 = next
}



// Factorial

let num = 6;
let fact = 1;
for (let i = 1; i <= num; i++){
    fact *= i;
}

console.log(fact)