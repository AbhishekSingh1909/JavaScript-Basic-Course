const numbers = [1, 2, 1, 3, 2, 4];

function countOccurrence(arr, element) {

    const elementsCount = arr.reduce((acc, current) => {
        acc[current] = (acc[current] || 0) + 1;
        return acc;
    }, {})

    return Object.entries(elementsCount).filter(([e, _]) => Number(e) === element).map(([_, count]) => count);
}

console.log(numbers, 2)