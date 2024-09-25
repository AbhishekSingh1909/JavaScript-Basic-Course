const numbers = [1, 2, 1, 3, 2, 4];

function countOccurrence(arr, element) {

    // const elementsCount = arr.reduce((acc, current) => {
    //     acc[current] = (acc[current] || 0) + 1;
    //     return acc;
    // }, {})

    // const count = (Object.entries(elementsCount).filter(([e, _]) => Number(e) === element).map(([_, count]) => count));
    // return count.length <= 0 ? 0 : Number(count.join())
    return arr.reduce((acc, current) => {
        acc += (element === current) ? 1 : 0;
        console.log(acc, current)
        return acc;
    }, 0)
}

console.log(countOccurrence(numbers, 2))