const numbers = [1, 2, 3, 5, 4, 6];

// last element from an array

const last = numbers.pop();
console.log(last);
console.log(numbers);


// first element
const first = numbers.shift();

console.log(first);
console.log(numbers);

// any index

const remain = numbers.splice(2, 1)

console.log(remain);
console.log(numbers);

//onst empty = numbers.clear(); clear () does not exist

///console.log(empty)
console.log(numbers);


const arr = [2, 4, 5, 6];

const joined = arr.join(',')

console.log(arr, joined);

const message = 'My First Message';

console.log(message.split(' ').join('-')); // slug