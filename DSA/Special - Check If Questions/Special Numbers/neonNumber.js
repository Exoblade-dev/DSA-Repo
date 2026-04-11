class Solution {
    is_neon(n) {
        
        n = parseInt(n);
        let sq = n**2;
        let digit = 0;
        let sqSum = 0;

        if(n<0) return "No";

        while(sq>0){
            digit = sq%10;
            sqSum += digit;
            sq = Math.floor(sq/10);
        }
        
        return sqSum === n ? "Yes" : "No";

    }
}

module.exports = Solution;
