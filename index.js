console.log('Hello World');

const PI = 3.14;
console.log('PI :', PI);
//PI = 22 / 7;// can't reassign const variable.

// primitive types

let name = 'Abhishek' // string literals
let age = 30; // number literals
let isValid_User = true; // boolean value either true or false
let email; // if do not initialized a variable default values is 'undefined'
let salary = null // null is used to clear variable value

// reference type

let person = {
    name: 'Abhishek',
    age: 30
} // object literals

console.log(person);

// Array
let arr = []; //define an empty array. arrays are object type in JS

let colors = ['red', 'yellow'] // in JS not necessary array contain similar type values.
colors[3] = 1;

console.log(typeof colors) // arrays are object type in JS

console.log(colors);

// define functions
// performing a task like display a message
function greet(name) {
    console.log('Hello ' + name);
}

// call function

console.log(typeof greet); // functions are in JS function type
greet('Abhishek');

//calculating a value

let square = (num) => {
    return num * num;
}

console.log(square(10))