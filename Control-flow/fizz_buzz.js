// Divisible by 3 fizz,
// divisible by 5 buzz.
// divisible by both 3 and 5 fizz-buzz

let fizz_buzz = (input) => {
    if (typeof input === 'number')
        return input.toString() + ' is not a number';
    switch (true) {
        case (input % 3 == 0 && input % 5 == 0):
            return 'fizz-buzz';
        case (input % 3 == 0):
            return 'fizz';
        case (input % 5 == 0):
            return 'buzz';
        default: return input.toString();
    }
}

let input = parseInt(prompt("Enter a number 3, 5 or multiple of 3 and 5"));

console.log(fizz_buzz(input));