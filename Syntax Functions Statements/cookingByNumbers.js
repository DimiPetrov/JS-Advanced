function solve(n, op1, op2, op3, op4, op5) {
    let num = +n;
    const arr = [op1, op2, op3, op4, op5];
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'chop': num /= 2; console.log(num); break;
            case 'dice': num = Math.sqrt(num); console.log(num); break;
            case 'spice': num++; console.log(num); break;
            case 'bake': num *= 3; console.log(num); break;
            case 'fillet': num -= num * 0.2; console.log(num); break;
        }
    }   
}

solve('9', 'dice', 'spice', 'chop', 'bake',
    'fillet');