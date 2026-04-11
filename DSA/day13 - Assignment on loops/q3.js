// prime factorization of a number 

class Solution {
    prime_factors(n) {

        if (n <= 1) return "No prime factors";

        let result = [];

        for (let i = 2; i <= n; i++) {
            while (n % i === 0) {
                result.push(i);
                n = Math.floor(n / i);
            }
        }
    return result.join("\n");
    }
}

module.exports = Solution;
