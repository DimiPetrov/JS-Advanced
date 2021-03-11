// function solve(matrix) {
//     let pairs = 0;
//     let arr = matrix.map(i => i.split(' '));
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = 0; j < arr[i].length; j++) {
//             if(arr[i][j] === arr[i + 1][j]) {
//                 pairs++;
//             }
//             if(arr[i][j] === arr[i][j + 1]) {
//                 pairs++;
//             }
//             if( i === arr.length - 2 && arr[i + 1][j] === arr[i + 1][j + 1]) {
//                 pairs++;
//             }
//         }
//     }
//     return pairs;
// }

function solve(arr) {

    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        for (let j = 0; j < subArr.length; j++) {
            let checker = subArr[j];
            if (i !== arr.length - 1) {
                if (checker === subArr[j + 1] || checker === arr[i + 1][j]) {
                    counter++;
                }
            } else {
                if (checker === subArr[j + 1]) {
                    counter++;
                }
            }
        }

    }

    return counter;
}

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));