function increment(number) { // number as argument is completely independent from variable number
    return ++number;
}

let number = 10;
let result = increment(number);

console.log(`number :${number}, result : ${result}`);

function increment_value(obj) { // obj shared same reference with variable obj 
    obj.value++;
}

let obj = { value: 10 };

increment_value(obj);

console.log(`obj :${obj.value}`);

// enumerate over object
const circle = {
    radius: 10,
    draw() { console.log(`draw a circle of radius ${radius}`) }
}

for (let key in circle) {
    console.log(key, circle[key]);
}

//TypeError: circle is not iterable
//for (let key of circle) { console.log(key, circle[key]); }

//iterate over circle keys

for (let key of Object.keys(circle)) { console.log('key :' + key); }

for (let key of Object.entries(circle)) { console.log('key :' + key); }

// check properties in circle

if ('color' in circle)
    console.log('color in circle :yes')

if ('radius' in circle)
    console.log('radius in circle : yes')


// cloning an object
const circle1 = {
    radius: 10,
    draw() { console.log(`draw a circle of radius ${radius}`) }
}
const another = {}
// 1 way
for (let key in circle1) {
    another[key] = circle1[key];
}

console.log('circle1 :', circle1);
console.log('another:', another);

// 2 way

const newCircle = Object.assign(circle1); // create a shallow copy

newCircle.Color = 'yellow';
console.log('newCircle :', newCircle);

const location = {
    x: 1,
    y: 1
}
const shape = {
    radius: 1,
    location
}

console.log('shape :', shape);

// 3 way
const anotherShape = { ...shape }; // create shallow copy

console.log('another Shape :', anotherShape);

console.log('change location value in another Shape');

anotherShape.location.x = 10;
console.log('shape :', shape);
console.log('another Shape :', anotherShape);

const circleShape = Object.assign(shape); // create shallow copy

circleShape.location.x = 20;

console.log('shape :', shape)
console.log('Circle Shape :', circleShape)

// 4 way
const rectShape = structuredClone(shape); // create a deep copy

rectShape.location.x = 50;
//const s = rectShape.slice();

console.log('shape :', shape)
console.log('rectShape :', rectShape)


const colors = ['red', 'yellow', 'green'];

const copyColors = [...colors];

console.log(colors)
console.log(copyColors)

const objColors = Object.assign(colors)

console.log(objColors)

// 5 way 

const jsonObj = JSON.parse(JSON.stringify(shape)); // deep copy

jsonObj.location.x = 100;

console.log('shape', shape)
console.log('jsonObj', jsonObj)
