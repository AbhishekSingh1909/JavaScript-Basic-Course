const numbers = [1, 2, 1, 3, 2, 4, 9];

function getMax(arr) {
    if (arr.length <= 0)
        return undefined
    return arr.reduce((acc, current) => current > acc ? current : acc)
}

console.log(getMax(numbers));