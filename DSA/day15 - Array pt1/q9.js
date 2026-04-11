// move all zeros to left and one to right 

let arr = [0,1,0,1,1,0,0,1,0,0,1,1,0,1];

let interpose = 0;
for(let i = 0; i < arr.length ; i++){
    if (arr[i] === 0){
        [arr[i],arr[interpose]]=[arr[interpose],arr[i]];
        interpose++;
    }
}
console.log(arr);

