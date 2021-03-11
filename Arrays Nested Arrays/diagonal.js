function solve(matrix) {
    let first = 0;
    let second = 0;
    // let firstIndex = 0;
    // let secondIndex = matrix[0].length - 1;

    // matrix.forEach(array => {
    //     first += array[firstIndex++];
    //     second += array[secondIndex--];
    // });
    for(let i = 0; i < matrix.length; i++) {
        first += matrix[i][i];
        second += matrix[i][matrix.length - i - 1];
    }

    console.log(first + ' ' + second);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);