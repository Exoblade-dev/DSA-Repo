// check if user is a valid voter 

function checkVoterEligibility(name, age) {
    if(age>=18){
        return `${name} is a valid voter.`;
    }else{
        return `${name} is not a valid voter.`
    }
    
}

module.exports = { checkVoterEligibility };