// sum of digits of a number 

function sumOfDigits(n) {
    let finalSum = 0;
    let digit = 0;

    while(n>0){
        digit = n%10;
        finalSum += digit;
        n = Math.floor(n/10);
        digit = 0;
    }

    return finalSum;
}

module.exports = { sumOfDigits };