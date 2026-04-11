// right angle triangle in alphabets 

function printRightTriangleAlphabets(n) {

    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=i;j++){
            process.stdout.write(String.fromCharCode(64+j)+ " ");
        }
        console.log(" ");
    }
}

module.exports = { printRightTriangleAlphabets };

