// 2nd max element form the array 

let arr = [5,4,325,324,5,436,567,56,7,65];
// let arr = [5,4,4,4,6,6,88,88];

let maxNum = arr[0];
let secMaxNum = 0;

for(let i = 0; i<arr.length ; i++){
    if(arr[i]>maxNum){
        secMaxNum = maxNum;
        maxNum = arr[i];
    }else if(arr[i]>secMaxNum && arr[i] != maxNum){
        secMaxNum = arr[i];
    }
}

console.log(maxNum);
console.log(secMaxNum);
