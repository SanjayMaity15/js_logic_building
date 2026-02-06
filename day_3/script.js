// 1. Print square star pattern

let row = 5;
let col = 5;

for (let i = 1; i <= row; i++){
    let star = ""
    for (let j = 1; j <= col; j++){
        star += "* "
    }
    console.log(star)
}

// 2. Print right angle star pattern

let row = 5;
let col = 5;

for (let i = 1; i <= row; i++){
    let star = ""
    for (let j = 1; j <= i; j++){
        star += "* "
    }
    console.log(star)
}

3 Print inverted right angle star pattern

 let row = 5;
let col = 5;

for (let i = row; i > 0; i--){
    let star = ""
    for (let j = 1; j <= i ; j++){
        star += "* "
    }
    console.log(star)
}

4 Print piramid pattern

 let row = 5;


for (let i = 1; i <= row; i++){

    let space = ""
    for (let z = 1; z <= row - i; z++){
        space += "  "
    }

    let star = ""
    for (let j = 1; j <= i * 2 - 1; j++){
        star += "* "
    }
    console.log(space,star)
}

// 2nd way

let row = 5;
for (let i = 1; i <= row; i++) {
	let space = "  ".repeat(row - i);
	let star = "* ".repeat(i * 2 - 1);
	console.log(space + star);
}


// 5 . Reverse piramid


let row = 5;

for (let i = row; i >= 1; i--){

    let space = ""
    for (let z = i; z < row ; z++){
        space += "  "
    }

    let star = ""
    for (let j = 1; j <= i * 2 - 1; j++){
        star += "* "
    }
    console.log(space,star)
}



// 6 Hollow square

 let row = 7;
let col = 7;

for (let i = 1; i <= row; i++){
    let star = ""

    for (let j = 1; j <= col; j++){
        if (i === 1 || i === row || j === 1 || j === col) {
            star += "* "
        } else {
            star += "  "
        }
    }
    console.log(star)
}


// 7 Hollow piramid

let row = 5;
let col = 5;

for (let i = 1; i <= 5; i++){
    let star = ""
    
    for (let z = i; z < row; z++){
        star += "  "
    }

    for (let j = 1; j <= i * 2 - 1; j++){
        if (i === 1 || i === row || j === 1 || j === i * 2 - 1 ) {
            
            star += "* "
        } else {
            star += "  "
        }
    }   

    console.log(star)
}