// const { result } = require("lodash");

// const solve = (arr, str) => {
//     let result = '';
//     for(i = 0; i < arr.length; i++) {
//         result += i !== arr.length - 1 ? arr[i] + str : arr[i];
//     }
//     return result;
// }

const solve = (arr, str) => {
    return arr.join(str);
}

console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'));