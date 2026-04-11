// 1st method for swapping 2 number by using extra 1 extra variable

let a1 = 10;
let a2 = 20;

console.log(`Before a1 = ${a1}`);
console.log(`Before a2 = ${a2}`);

let temp = a1;
a1 = a2;
a2 = temp;

console.log(`After a1 = ${a1}`);
console.log(`After a2 = ${a2}`);

// 2nd method for swapping two numbers 

let p = 30;
let q = 40;

console.log(`Before p = ${p}`);
console.log(`Before q = ${q}`);

p = p+q;
q = p-q;
p = p-q;

console.log(`After p = ${p}`);
console.log(`After q = ${q}`);

// 3rd method for swapping two numbers 