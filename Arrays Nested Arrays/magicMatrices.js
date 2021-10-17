function solve(arr) {
    let rowSums = arr.map((el) => el.reduce((a, c) => a + c), 0);

    let colSums = arr.map((row, i) => arr[0].map((col, j) => arr[j][i]))
    .map((el) => el.reduce((a, c) => a + c), 0);

    return rowSums.concat(colSums).every((el, index, arr) => el === arr[0]);
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));