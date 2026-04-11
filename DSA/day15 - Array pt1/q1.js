// calculate sum and mean of array elements 

function calculateSumAndMean(arr, n) {
    let sum = 0;

    for(let i = 0; i < arr.length ; i++){
        sum += arr[i];
    }

    let mean = ((arr[0] + arr[arr.length-1])/2).toFixed(1);

    return [sum,mean];
    
}

module.exports = { calculateSumAndMean };