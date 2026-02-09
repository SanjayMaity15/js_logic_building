// String reverse

let str = "Javascript";
let reverse = "";
console.log(str.length);
for (let i = 0; i < str.length; i++) {
	reverse = str[i] + reverse;
}

console.log(reverse);

// short way using inbuilt method
console.log(str.split("").reverse().join(""));

// check palindrome

if (str === reverse) console.log("Palindrome");

// palindrome using two pinter technique

function isPalindrome(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}

	return true;
}

console.log(isPalindrome("madam"));

// count frequency of each character

let str2 = "banana";
let frequencyCount = {};
let maxFrequncyChar = "";
let maxFrequncyCharCount = 0;

for (let i = 0; i < str2.length; i++) {
	if (frequencyCount.hasOwnProperty(str2[i])) {
		frequencyCount[str2[i]] = frequencyCount[str2[i]] + 1;
	} else {
		frequencyCount[str2[i]] = 1;
	}

	if (maxFrequncyCharCount < frequencyCount[str2[i]]) {
		maxFrequncyChar = str2[i];
		maxFrequncyCharCount = frequencyCount[str2[i]];
	}
}

console.log(frequencyCount);
console.log(maxFrequncyChar);
console.log(maxFrequncyCharCount);

// Anagram string

// ex- silent, listen

function anagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	let count1 = {};
	let count2 = {};

	for (let char of str1) {
		count1[char] = (count1[char] || 0) + 1;
	}

	for (let char of str2) {
		count2[char] = (count2[char] || 0) + 1;
	}

	// Compare frequency maps
	for (let char in count1) {
		console.log(char);
		if (count1[char] !== count2[char]) return false;
	}

	return true;
}

console.log(anagram("silent", "listen")); // true
console.log(anagram("aab", "abb")); // false

//  Return first non repeating char

function nonRepeatChar(str) {
    const frequency = {}

    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1
    }

    for (let char of str) {
        if(frequency[char] === 1) return char
    }

    return null
}

console.log(nonRepeatChar("banabnaiikhhkpp"))


// Remove all duplicate characters keep first occurence

// input: "programming"
// output : progamin



function removeDuplicatesChar(str) {
    
    let output = ""
    for (let char of str) {
        if (!output.includes(char))
            output = output + char
    }

    return output
}

console.log(removeDuplicatesChar("programming"))

// Reverse only word in a sentence

// input: I love coding
// output : coding love i

function reverseOnlyWord(str) {
    
    strArray = str.split(" ");
    reverseStr = ""
    for (let i = strArray.length - 1 ; i >= 0; i--){
        reverseStr = reverseStr + `${strArray[i]} `
    }

    return reverseStr

}

console.log(reverseOnlyWord("I love coding"))


// Find longest word in a sentence

function findLogestWord(str) {
    let longWord = ""
    let longWordLength = 0;
    let strArray = str.split(" ")

    for (let word of strArray) {
        if (word.length > longWordLength) {
            longWord = word
            longWordLength = word.length
        }
    }
    
    return {longWord, longWordLength}

}

console.log(findLogestWord("I am a good boy"))

// Count the number of word in sentence

function countNumberOfWordInSentence(str) {
    const strArray = str.split(/\W/)
    
    return strArray.length
}

console.log(countNumberOfWordInSentence("I am a software engineer"))

// Find all substring of a string

// input = abc
// output : a, ab , abc, b, bc, c


function findSubstring(str) {
    const subStr = [];

    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j <= str.length; j++){
            subStr.push(str.slice(i, j))
        }
    }

    return subStr
}

console.log(findSubstring("abc"))


// Compress a string
// input: aaabbccccd
// output: a3b2c4d1


function compressString(str) {
    const frequency = {}
    
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1
    }

    let ans = Object.entries(frequency).flat(1).join("")
    return ans
}

console.log(compressString("aaabbccccd"))