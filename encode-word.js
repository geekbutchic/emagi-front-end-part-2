const emojis = require('./emojis.js');


// string-building version
// manual version 
// Inner Loop
// const encodeWord = function(word) {
//     let result = '';
//     for (const char of word) {
//         let found = false;
//         for (const emoji of emojis) {
//             if (emoji.letter === char.toLowerCase()) {
//                 found = true;
//                 result += emoji.symbol;
//             }
//         }

//         if (found === false) {
//             result += char;
//         }
//     }

//     return result;
// }

// Double Loop 
// Line 9 => for each character in our word go through each 
// for (const char of word)
// Line 10 => go through each emoji and look for the matching letter
// for (const emoji of emojis)
// Line 12 => when you have the matching letter append it to our results


// mapping version 
// does not use string building version
const encodeWord = function(word) {
    const letters = word.split('');
    const encodedLetters = letters.map(function(letter) {
        for (const emoji of emojis) {
            if (emoji.letter === letter) {
                return emoji.symbol;
            }
        }

        return letter;
    })

    return encodedLetters.join('');
}


module.exports = encodeWord
// When mapping over a str we can convert it by saying I want letters.
// word.split
// when splitting a string we make each character a separate element in an array 
// ['d', 'o', 'g']

// Line 31 is using an anonymous function
// This function will take in one letter
// Return matching emoji symbol

// Line 33 for every emoji.letter check is the same as our character
// If is just return emoji symbol




// using anonymous function
// if word: was 'dog'
// this would be our letters
// when we split we are taking those characters in an array.
// emojis are two symbols 
