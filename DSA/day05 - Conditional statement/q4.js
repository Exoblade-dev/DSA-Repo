// check if the given year is a leap year 

function isLeapYear(year) {
    if((year%400 == 0) || (year%4 == 0 && year%100 != 0)){
        return "Leap Year";
    }else{
        return "Not a Leap Year";
    }
    
}

module.exports = { isLeapYear };