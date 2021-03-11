function solve(n) {
    let arr = [];
    if(n != undefined) {
        for(let i = 1; i <= n; i++) { 
            arr.push('*');             
        }
        for(let j = 1; j <= arr.length; j++) {
            console.log(arr.join(' '));
        }
    } else {
        for(let i = 1; i <= 5; i++) {
            arr.push('*');
        }
        for(let j = 1; j <= 5; j++) {
            console.log(arr.join(' '));
        }
    }
}

solve();