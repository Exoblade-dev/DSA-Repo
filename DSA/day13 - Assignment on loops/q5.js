// check if the given number is armstrong or not 

class Solution {
    is_armstrong(n) {
        n = Number(n);
        let original = n;
        let arr = [];
        let count = 0;
        let finalSum = 0;
        
        while(n>0){
            let digit = n%10;
            arr.push(digit);
            count++;
            n = Math.floor(n/10);
        }

        if (original === 0) return "Armstrong";

        for(let i = 0; i<count ; i++){
            finalSum += arr[i]**count;
        }

        return finalSum === original ? "Armstrong" : "Not Armstrong";
    }
}

module.exports = Solution;
