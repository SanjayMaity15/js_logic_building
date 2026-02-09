// Find one string is a substring of another

// input: hellobro
// target: bro

function isSubstring(str, substr) {
    for (let i = 0; i < str.length; i++){
        let word = str.slice(i, i + substr.length)
        
        if (word === substr)
        {
            console.log(i)
            return true

        }

    }

    return false
}

console.log(isSubstring("hello world", "wor"))



// Count frequncy of each word

let sentence =
	"JavaScript is a powerful language and JavaScript is used to build web applications and JavaScript makes web development fast and powerful";


function frequencyOfEachWord(str) {
    const frequncy = {}
    const strArray = str.split(" ")

    for (let item of strArray) {
        
        frequncy[item] = (frequncy[item] || 0) + 1 
    }

    return frequncy
}

console.log(frequencyOfEachWord(sentence))



// check if a string pangram means it include all letter

let str = "The quick brown fox jumps over the lazy dog";

function pangram(str) {

    const allAlphabet = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()

    for (let char of allAlphabet) {
        if (!str.includes(char))
            return false
    }

    return true
}

console.log(pangram(str))


// check a string include all vowel or not


let str1 = "aeiouhwefj3hik";

function pangram(str) {
	const vowel = "aeiou";
	str = str.toLowerCase();

	for (let char of vowel) {
		if (!str.includes(char)) return false;
	}

	return true;
}

console.log(pangram(str1));


// Remove all duplicate word from a sentence
let sentence1 =
	"JavaScript is a powerful language and JavaScript is used to build web applications and JavaScript makes development easier and powerful";

function removeAllDuplicateWord(str) {
    const result = []
    const strArray = str.split(" ");

    for (let word of strArray) {
        if (!result.includes(word))
            result.push(word)

    }

    return result.join(" ")
}

console.log(removeAllDuplicateWord(sentence1))