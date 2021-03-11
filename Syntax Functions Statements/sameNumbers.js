function solve(input) {
    let arr = input.toString().split('');
    let sum = arr.map(Number).reduce((a, c) => a + c, 0);
    let isSame = true;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] != arr[j]) {
                isSame = false;
                break;
            }
            
        }
    }
    if(isSame === true) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(sum);
}

solve(1234);