function calculateCircleProperties(r) {
    let C = 2*Math.PI*r;
    let c = C.toFixed(2);
    let A = Math.PI*r**2;
    let a = A.toFixed(2);

    return [c,a];
}

module.exports = { calculateCircleProperties };