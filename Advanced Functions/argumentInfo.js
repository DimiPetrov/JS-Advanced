function solve(...arr){
    let types = [];
    let numberOfType = {};

    arr.forEach(x => {
        let type = typeof x;
        types.push(`${type}: ${x}`);

        numberOfType[type] === undefined ? numberOfType[type] = 1 : ++numberOfType[type];
    });

    let sorted = Object.keys(numberOfType)
    .sort((a,b) => numberOfType[b] - numberOfType[a])
    .map(x => `${x} = ${numberOfType[x]}`);

    console.log(types.join('\n') + '\n' + sorted.join('\n'));
    //return types.join('\n') + '\n' + sorted.join('\n');
}

'cat', 42, function () { console.log('Hello world!'); }

string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1