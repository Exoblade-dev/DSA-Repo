// find the max value and index of the num in an array 

function findGreatestElementAndIndex(arr) {
    
    let maxNum = arr[0];
    let index = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
            index = i;
        }
    }

    return [maxNum,index];
}

module.exports = { findGreatestElementAndIndex };