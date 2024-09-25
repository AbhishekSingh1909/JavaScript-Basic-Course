let fruits = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Lemon'];

for (let index in fruits) {
    console.log(`${fruits[index]} at index ${index}`)
}

let person = {
    f_name: 'Abhishek',
    l_name: 'Singh',
    age: 34,
    address: 'Oulu Finland'
}

for (let p in person) {
    console.log(`${p} : ${person[p]}`)
}

//The for...in loop in JavaScript is used to iterate over the enumerable properties of an object.
//It allows you to loop through the keys(property names) of an object or the indices of an array.