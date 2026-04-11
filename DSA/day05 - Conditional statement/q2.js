// Check if the given number is even or odd 

function checkEvenOrOdd(num) {
    if(num%2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
    
}

module.exports = { checkEvenOrOdd };