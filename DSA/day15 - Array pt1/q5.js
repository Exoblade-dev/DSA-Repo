// max element of the array 

let arr = [5,4,325,324,5,436,567,56,7,65];

let maxNum = arr[0];

for(let i = 0; i<arr.length ; i++){
    maxNum>arr[i]?maxNum=maxNum:maxNum=arr[i];
}

console.log(maxNum);
