
function arrayRange(min, max) {
    const arr = [];
    for (min; min <= max; min++)
        arr.push(min);
    return arr;
}

console.log(arrayRange(-10, -5));

const include = (arr, searchElement) => {

    for (let i of arr) {
        if (i === searchElement)
            return true;
    }
    return false;
}

const arr = [34, 7, 23, 34, 62, 5, 62];
//console.log(include(arr, 100));

const except = (arr, excludeArr) => {
    return arr.filter((a) => !(excludeArr.includes(a)));
}

console.log(except(arr, [5, 7, 34, 6, 62]))

const arr1 = [1, 2, 3, 4]
const move = (arr, index, offset) => {
    // if (offset === 0)
    //     return arr;
    const element = arr[index];
    const position = offset + index;
    if (position >= arr.length || position < 0) {
        console.error('invalid offset value');
        return;
    }

    const output = [...arr];
    output.splice(index, 1);
    output.splice(position, 0, element);

    return output;
}


console.log(move(arr1, 1, 2));
console.log(arr1)