// 1 Find maximum of three

let n1 = 8, n2 = 8, n3 = 1;

if (n1 >= n2 && n1 >= n3) {
    console.log("The greater is ", n1)
} else if (n2 >= n1 && n2 >= n3) {
    console.log("The greater is ", n2);
    
} else {
    console.log("The greater is ", n3)
}


// 2 check the number is positive, negative , zero
let n = 7;

if (n > 0) {
    console.log("Positive")
} else if (n === 0) {
    console.log("Zero")
} else {
    console.log("Negative")
}


// 3 calculate electricity bill

let unit = 230;
let totalBill = 0;


// 0 - 100 -> 5 rupees
// 101 - 200 -> 7
// 201 - 300 -> 10
// 301 -> 12

if (unit <= 100) {
    totalBill = 100 * 5
} else if (unit <= 200) {
    totalBill = 100 * 5 + (unit - 100) * 7
} else if (unit <= 300) {
    totalBill = 100 * 5 + 100 * 7 + (unit - 200) * 10
} else {
    totalBill = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12
}

console.log(totalBill)


// 4 check vowel

const str = "aeiouAEIOU"

function checkVowel(char) {
    if (str.includes(char))
    {
        return "Vowel"
    } 

    return false
}


console.log(checkVowel("a"))


// 5 Leap year

function checkLeapYear(year) {
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)
        return "Leapyear"

    return false
}

console.log(checkLeapYear(2001))