function printVShapePattern(n) {
    for(let i = 1 ; i <=n ; i++){
        for(let j = 1 ; j <= n ; j++){
            if(i===j){
                process.stdout.write("*");
            }else{
                process.stdout.write(" ");
            }
        }
        for(let a = 1; a<=n ; a++){
            if(a+i===n){
                process.stdout.write("*");
            }else{
                process.stdout.write(" ");
            }
        }
        console.log(" ");
    }
}

module.exports = { printVShapePattern };