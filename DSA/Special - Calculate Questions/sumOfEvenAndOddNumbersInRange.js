function sumEvenOddInRange(start, end) {

    let evenSum = 0;
    let oddSum = 0;

    for(let i = start ; i <= end ; i++){
        if (i%2 === 0){
            evenSum += i;
        }else{
            oddSum += i;
        }
    }

    return [evenSum,oddSum];

}

module.exports = { sumEvenOddInRange };