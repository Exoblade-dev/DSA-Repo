// check if the given number is harshad number or not 

class Solution {
    is_harshad(nStr) {
        let original = nStr;
        let sumOfNum = 0;

        if (nStr <= 0) return "Not Harshad Number";

        do{
            let digit = nStr%10;
            sumOfNum += digit;
            nStr = Math.floor(nStr/10);
        }while(nStr>0)

        if(original % sumOfNum === 0){
            return "Harshad Number";
        }else{
            return "Not Harshad Number";
        }
    }
}

module.exports = Solution;
