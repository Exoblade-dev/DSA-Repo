// reverse the number using do while loop 

function printDigitsReverse(n) {
    do {
        let digit = n % 10;
        console.log(digit);
        n = Math.floor(n / 10);
    } while (n > 0);
}

printDigitsReverse(507);
