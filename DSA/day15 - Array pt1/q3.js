// second greatest num in an array 

function findSecondGreatestElement(arr) {

    let maxNum = -Infinity;
    let secMaxNum = -Infinity;

    for(let i = 0; i<arr.length ; i++){
        if(arr[i]>maxNum){
            secMaxNum = maxNum;
            maxNum = arr[i];
        }else if(arr[i]>secMaxNum && arr[i] != maxNum){
            secMaxNum = arr[i];
        }
    }

    return [secMaxNum];
}

module.exports = { findSecondGreatestElement };