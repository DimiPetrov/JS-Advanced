function solve(arr) {
    const first = Math.min(...arr);
    let index = arr.indexOf(first);
    arr.splice(index, 1);

    const second = Math.min(...arr);
    let ind = arr.indexOf(second);
    arr.splice(ind, 1);

    return `${first} ${second}`;   
}

console.log(solve([3, 0, 10, 4, 7, 3]));