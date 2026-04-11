// reverse the array without the extra space 

let arr = [10,20,30,40,50];
console.log(arr);

let i = 0;
let j = arr.length-1;

while(i<j){
    
    [arr[i],arr[j]] = [arr[j],arr[i]]; 

    i++;
    j--;
}

console.log(arr);
