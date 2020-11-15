const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');


const command = process.argv[2];
const words = process.argv.slice(3);

if (command === 'translate') {
    const translation = words.map(translateWord)
    console.log(translation.join(' '));
}   else if (command === 'encode') {
    const encoding = words.map(encodeWord);
    console.log(encoding.join(' '));
}

// or switch version 
// switch is perfect if ALL of the below is true:
// 1. you're only checking the status of ONE value
// 2. you're checking if it EXACTLY is one of a set of values


switch (command) {
    case 'translate':
        const translation = words.map(translateWord)
        console.log(translation.join(' '));
        break;
    case 'encode':
        const encoding = words.map(encodeWord);
        console.log(encoding.join(' '));
        break;
    default:
        console.log('Your choices for what to write after "node main.js" (and a space!) are:');
        console.log('* "encode" followed by a space and then as many letters as you want');
        console.log('* "translate" followed by a space and then as many words as you want');
}

// default is equivalent of else 

// const encoding = words.map(encodeWord);
// console.log(encoding.join(' '));

// const translation = words.map(translateWord)
// console.log(translation.join(' '));


















