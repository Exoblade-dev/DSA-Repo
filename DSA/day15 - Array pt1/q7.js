// reverse the array with extra space 

let arr1 = [43,24,2,423,2,3,12,4,34,3];
let len1 = arr1.length;

let arr2 = [];

let j = 0;
for(let i = len1-1 ; i>=0 ; i--){
    arr2[j] = arr1[i];
    j++;
}

console.log(arr1);
console.log(arr2);


