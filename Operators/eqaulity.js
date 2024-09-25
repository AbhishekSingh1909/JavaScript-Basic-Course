let a = 10;
let b = '10';

// loose equality operator

console.log(a == b); // true because check only value of both variable

console.log(a == true) // false, because first it convert true to number '1', but 1 is not equal to 10

console.log(false == 0); // true

console.log(1 == true) // true

console.log("" == false);

console.log(' ' == false); //The string ' ' (a single space) is a non-empty string, so when coerced to a boolean, it converts to true.
// The string ' ' is first converted to a number.When a string is converted to a number,
//JavaScript tries to interpret the string as a numeric value.The string ' '(a space) is converted to 0
//(since it doesn't contain any digits or other characters that represent a number).
//The boolean false is also coerced to 0 when converting to a number.

let str = ' ' && 'Abhishek'; // The && operator evaluates the left operand first. 
//If the left operand is falsy(like 0, null, undefined, NaN, '', or false), 
//it immediately returns the left operand.If the left operand is truthy, it evaluates and returns the right operand.

console.log('str :' + str);

let result = ' ' && undefined;

console.log('result ' + result)

console.log([] == false) // true

console.log([1] == false) // false

// strict equality operator

console.log('1' === 1) // false because strict equality operator check (type + value)