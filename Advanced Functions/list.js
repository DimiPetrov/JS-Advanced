function solve(arr) {
    let result = [];

    return {
        add,
        remove,
        print
    };

    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i].includes(' ')) {
    //         let item = arr[i].split(' ');
    //         let com = item[0];
    //         let string = item[1];

    //         switch(com) {
    //             case 'add': result.push(string ); break;
    //             case 'remove': result.pop(string); break;
    //         }
    //     } else {
    //         console.log(result.join(',').toString());
    //     }

        
    // }

    function add(string) {
        return result.push(string);
    }

    function remove(string) {
        return result.pop(string);
    }

    function print() {
        console.log(result.join(',').toString());
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);