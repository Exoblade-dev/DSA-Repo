// check if a number is automorphic 

function isAutomorphic(n) {
    let squareNum = n ** 2;
    let len = String(n).length;

    if(n<0) return "No";

    if(n === squareNum%(10**len)){
        return "Yes";
    }else{
        return "No";
    }

}

module.exports = { isAutomorphic };