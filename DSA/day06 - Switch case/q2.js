let prompt = require("prompt-sync")();
let str = prompt("Enter the string : ");

let consonant =0;
let vowel = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    switch(ch){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":{
            vowel++;
            break;
        }
        default:{
            consonant++;
            break;
        }
    }
}
console.log(`vowel = ${vowel}`);
console.log(`consonant = ${consonant}`);