// compound interest calculation 

function calculateCompoundInterest(P, r, t, n) {

    const CI = P * (1 + r/n) ** (n*t) - P;

    // console.log(CI.toFixed(2));

    return CI.toFixed(2);
}

module.exports = { calculateCompoundInterest };