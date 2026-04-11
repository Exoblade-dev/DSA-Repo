/**
 * Recursive function to calculate factorial of a number
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let num = 1;
    for(let i = 1; i<= n ; i++){
        num *= i;
    }
    return num;
}
    


module.exports = { factorial };
