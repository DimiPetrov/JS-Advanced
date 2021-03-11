const solve = (arr, n) => {
    // let array = [];
    // for(let i = 0; i < arr.length; i += n) {
    //     array.push(arr[i]);
    // }

   return arr.filter((el, i) => i % n === 0);

    // function predicate(el, i) {
    //     return i % n === 0;
    // }
    // return arr.filter(predicate);
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2));
console.log(solve(['dsa',
    'asd',
    'test',
    'tset'],
    2));