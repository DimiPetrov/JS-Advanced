function solve(arr) {
    let result = [];

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}

solve([3, -2, 0, -1]);

