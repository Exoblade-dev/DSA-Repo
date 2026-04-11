// area of the triangle using herons formulae 

function calculateTriangleArea(a, b, c) {

    let s = (a+b+c)/2;
    if(a+b>c && b+c>a && c+a>b){
        let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        
        return area.toFixed(2);
    }
}

module.exports = { calculateTriangleArea };