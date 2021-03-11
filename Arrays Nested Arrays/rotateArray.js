function solve(arr, rot) {
    for(let i = 0; i < rot; i++) {
        const el = arr.pop();
        arr.unshift(el);
    }   
    return arr.join(' ');
}

console.log(solve(['1',
    '2',
    '3',
    '4'],
    2));
console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15));