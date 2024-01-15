// Your code goes here
const rapid = (str) => {
    let consonants = []

    for (let element of str.toLowerCase()) {
        if (['a','e','i','o','u'].includes(element) == false) {
            consonants.push(element.toUpperCase())
        }
    }
    return consonants.join('')
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));