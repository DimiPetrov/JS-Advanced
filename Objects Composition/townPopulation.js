function solve(arr) {
    const towns = {};

    for (let str of arr) {
        // let tokens = str.split(' <-> ');
        // let name = tokens[0];
        // let population = Number(tokens[1]);
        let [name, population] = str.split(' <-> ');
        population = Number(population);

        // if(typeof towns[name] === 'undefined')
        // if(!towns.hasOwnProperty(name)) {
        //     towns[name] = population;
        // } else {
        //     towns[name] += population;
        // }            
        if(towns[name]) {
            population += towns[name];
        }

        towns[name] = population;

    }

    // for(let name in towns) {
    //     console.log(`${name} : ${towns[name]}`);
    // }
    for(let [name, population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`);
    }
}

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);