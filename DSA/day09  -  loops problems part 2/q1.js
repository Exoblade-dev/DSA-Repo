// how to check if a number is prime or not 

let prompt = require("prompt-sync")()
let n = prompt("Enter the number : ");

// method 1
console.log("1st Method");

let count = 0;

for (let i = 1; i <= n ; i++) {
    if(n%i === 0) count++;
}
if(count>2) console.log("Not Prime");
else console.log("Prime");

// method 2
console.log("2nd Method");

let count1 = 0;

if (n<=1) {
    console.log("Not Prime");
}

for(let i = 2 ; i<n ; i++){
    if(n%i === 0) count1++;
}
if(count1>0){
    console.log("Not Prime");
}else{
    console.log("Prime");
}

// method 3

console.log("3rd Method");


if(n<=1) console.log("Not Prime");
else if(n === 2) console.log("Prime");
else if(n%2 === 0) console.log("Not Prime");
else {
    let isPrime = true;
    for(let i = 0; i<=Math.floor(Math.sqrt(n));i+=2){
        if(n%i === 0){
            isPrime = false;
            break;
        }
    }
    console.log(isPrime?"Prime":"Not Prime");
}


