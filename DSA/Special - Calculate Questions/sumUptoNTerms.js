/**
 * Recursive function to calculate sum up to N
 * @param {number} n
 * @returns {number}
 */
function sumUpToN(n) {
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum += i;
    }
    return sum;
    
}

module.exports = { sumUpToN };
