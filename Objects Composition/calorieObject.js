function addProp(arr) {
    let result = {};
    // for(let i = 0; i < arr.length; i += 2) {
    //     result[arr[i]] = Number(arr[i + 1]);
    // }
    arr.forEach((el, i) => {
        if(i % 2 === 0) {
            result[el] = undefined;
        } else {
            result[arr[i - 1]] = Number(el);
        }
    });

    return result;
}

console.log(addProp(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52']));