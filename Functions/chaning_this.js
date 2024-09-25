function showCurrent({a,b}) { 
console.log(this,'current object', `value of ${a} and ${b}`) // currently 'this' refer global or window object because showCurrent() is regular function.
}

//showCurrent({}); // reference global object

// Correct destructuring
let { a, b } = { a: 10, b: 20 };
//showCurrent.call({ title: 'local object' }, { a,b }); // refer local object
showCurrent.apply({ title: 'local object' }, [{a,b}] //The second argument must be an array of arguments to pass to the function
) // refer local object

showCurrent.bind({ title: 'local object' }, { a,b })