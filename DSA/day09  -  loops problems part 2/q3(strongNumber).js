// check if the given number is a strong number or not 

function isStrongNumber(n) {

    let digit = 0;
    let factorial = 1;
    let finalSum = 0;
    let original = n;

    while(n>0){
        digit = n%10;

        for(let i = 1; i<=digit ; i++){
            factorial *= i;
        }
        finalSum += factorial;
        factorial = 1;
        n = Math.floor(n/10);
    }
    return finalSum === original ? "Yes" : "No";
}

module.exports = { isStrongNumber };    