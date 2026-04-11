// greatest number among three number 

function findGreatest(a, b, c) {
    //on second thought this is DSA so we have to write the core code , yeah i am still ashamed
    if(a>=b && a>=c) return a;
    if(b>=a && b>=c) return b;
    else return c;
}

module.exports = { findGreatest };