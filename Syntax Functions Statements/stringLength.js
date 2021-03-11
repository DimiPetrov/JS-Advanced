// function solve(str1, str2, str3) { 
//     const sumLength = str1.length + str2.length + str3.length3;   
//     const averageLength = Math.floor(sumLength / 3);
    
//     console.log(sumLength);   
//     console.log(averageLength);   
// }

// solve('pasta', '5', '22.3');

function strlen(...params) {
    const total = params.reduce((a, c) => a + c.length, 0);
    const averageLength = Math.floor(total / params.length);
    console.log(total);
    console.log(averageLength);
}

strlen('pasta', '5', '22.3');