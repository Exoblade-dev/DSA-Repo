// swapping numbers without using 3rd variable 

function swapNumbers(a, b) {
    
    a = a+b;
    b = a-b;
    a = a-b;

    return [a,b];

}

module.exports = { swapNumbers };