function solve(a, b) {
    const min = Math.min(a, b);
    let arr = [];
    for(let i = 1; i <= min; i++) {
        if(a % i === 0 && b % i === 0) {
            arr.push(i);
        }
    }
    const output = arr.pop();
    console.log(output);
}

solve(2154, 458);