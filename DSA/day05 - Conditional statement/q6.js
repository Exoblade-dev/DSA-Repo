// calculate electricity bill based on units consumed 

function calculateElectricityBill(unit) {
    let amount = 0;
    if(unit>=0 && unit<=100){
        amount = (unit*4.2);
        return amount.toFixed(1);
    }else if(unit>=101 && unit<=200){
        amount = (100*4.2) + ((unit-100)*6);
        return amount.toFixed(1); 
    }else if(unit>=201 && unit<=400){
        amount = (100*4.2) + (100*6) + ((unit-200)*8);
        return amount.toFixed(1);
    }else if(unit>400){
        amount = (100*4.2) + (100*6) + (200 * 8) + ((unit-400)*13);
        return amount.toFixed(1);
    }
    
}

module.exports = { calculateElectricityBill };