function solve(matrix) {
    let biggest = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(biggest < matrix[i][j]) {
                biggest = matrix[i][j];
            }
        }
    }
    console.log(biggest);
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);