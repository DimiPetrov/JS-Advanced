function solve(arr) {
    const first = arr.map(Number).shift();
    const last = arr.map(Number).pop();
    const sum = first + last;
    console.log(sum);
}

solve(['20', '30', '40']);