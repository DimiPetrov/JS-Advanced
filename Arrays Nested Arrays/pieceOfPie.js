function solve(arr, first, second) {
    const start = arr.indexOf(first);
    const end = arr.indexOf(second) + 1;
    const newArr = arr.slice(start, end);
    console.log(newArr);
}

solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie');