function solve(arr) {
    let rowSums = arr.map((el) => el.reduce((a, c) => a + c), 0);
    // for(let i = 0; i < arr.length; i++) {
    //     let row = arr[i];
    //     let sum = row.reduce((a, c) => (a + c), 0);
    //     rowSums.push(sum);
    // }

    let colSums = arr.map((row, i) => arr[0].map((col, j) => arr[j][i]))
    .map((el) => el.reduce((a, c) => a + c), 0);
    // for(let i = 0; i < arr.length; i++) {
    //     let row = arr[i];
    //     let col = [];
    //     for(let j = 0; j < arr.length; j++) {
    //         let index = arr.length - 1 - j;
    //         col.push(row[index]);
    //     }
    //     let sum = col.reduce((a, c) => (a + c), 0);
    //     colSums.push(sum);
    // }

    return rowSums.concat(colSums).every((el, index, arr) => el === arr[0]);
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));