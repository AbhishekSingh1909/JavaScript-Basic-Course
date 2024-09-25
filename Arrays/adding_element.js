let numbers = [2, 4, 5];

// splice method to add elements in array

numbers.splice(2, 0, 'a', 1, 'b');
numbers.splice(2, 0, 'z');
console.log(numbers)

// delete elements

let deletedElements = numbers.splice(3); // remove elements from specified index into array

console.log(deletedElements)
console.log(numbers)

const slice = numbers.slice(); // give portion of an array from given start and end index;

console.log(slice);
console.log(numbers)

numbers.push(9, 7, 6) // add elements at the end of array
console.log(numbers)

numbers.unshift(10, 11.2) // add elements at the beaning 

console.log(numbers)
