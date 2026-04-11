// right angle triangle 

function printRightTriangle(n) {
    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=i;j++){
            process.stdout.write("* ");
        }
        console.log(" ");
    }
}

module.exports = { printRightTriangle };