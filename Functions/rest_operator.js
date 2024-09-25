const sum = function (discount, ...args) {
    return Math.round(args.reduce((a, b) => a + b) * (1 - discount), 2);
}

console.log(sum(0.9, 10, 8, 5, 23));