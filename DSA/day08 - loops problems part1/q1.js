// checck if the number is prime or not 

function isPrime(n) {
    if (n<=1) return "Not Prime";

    for(let i = 2; i<n ; i++){
        if(n%i === 0) return "Not Prime";
    }

    return "Prime";
    
}

module.exports = { isPrime };