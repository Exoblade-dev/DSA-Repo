// check if a number is abundant or not 

class Solution {
    is_abundant(nStr) {
        let sumOfFactor = 0;

        if(nStr<12) return "No";
        
        for(let i = 1;i<=(nStr/2);i++){
            if(nStr%i === 0){
                sumOfFactor += i;
            }
        }

        if(sumOfFactor>nStr) return "Yes";
        else return "No";
    }
}

module.exports = Solution;
