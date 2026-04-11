let n = 5;
// method 1 
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

// method 2 

let width = 2 * n - 1;

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= width; j++) {

        if (j === i || j === width - i + 1) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }

    }

    console.log();
}