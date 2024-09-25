function findMaximum(numbers) {
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (!(max > numbers[i])) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(findMaximum([4, 6, 8, 7, 9, 2, 11, 3, 21, 13]));