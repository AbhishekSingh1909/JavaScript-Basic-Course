let sum = (limit) => {
    let i = 0;
    let sum = 0;

    while (i <= limit) {
        if (i % 3 == 0 || i % 5 == 0)
            sum += i;
        i = ++i;
    }
    return sum;
}

console.log(sum(10));