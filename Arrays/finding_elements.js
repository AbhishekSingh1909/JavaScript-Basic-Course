let numbers = [1, 2, 3, 1, 4, 5];

console.log(numbers.indexOf(1)); // first occurrence

console.log(numbers.lastIndexOf(1)); // last occurrence

console.log(numbers.indexOf(1, 2))// search an element from given index


console.log(numbers.includes(1, 2)); // search element from given index;

console.log(numbers)

// finding reference types

const persons = [
    { id: 1, name: 'sara' },
    { id: 2, name: 'vera' },
    { id: 3, name: 'niha' }
]

// use find for objects

console.log(persons.find(p => p.name.startsWith('s')))

// use findIndex()

console.log(persons.findIndex(p => p.name.endsWith('a')));