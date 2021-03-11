function solve(n, k) {
    let arr = [1];
    for(let i = 1; i < n; i++) {
        arr.push(sumLastK(arr, k));
    }

    console.log(arr.join(', '));

    function sumLastK(arr, k) {
        k = arr.length > k ? k : arr.length;
        let sum = 0;
        for(let i = 1; i <= k; i++) {
            sum += arr[arr.length-i];
        }
        return sum;
    }
}

solve(6, 3);