// calculate final amount after discount 

function calculateFinalAmount(amount) {
    let dis = 0;
    let final = 0;
    if(amount>=0 && amount<=5000){
        dis = 0;
        final = amount - (amount*(dis/100));
        return final;
    }else if(amount>=5001 && amount<=7000){
        dis = 5;
        final = amount - (amount*(dis/100));
        return final;
    }else if(amount>=7001 && amount<=9000){
        dis = 10;
        final = amount - (amount*(dis/100));
        return final;
    }else if(amount>9000){
        dis = 20;
        final = amount - (amount*(dis/100));
        return final;
    }
    
}

module.exports = { calculateFinalAmount };