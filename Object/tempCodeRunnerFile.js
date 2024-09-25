
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

const jsonObj = JSON.parse(JSON.stringify(shape));

jsonObj.location.x = 100;

console.log('shape', shape)
console.log('jsonObj', jsonObj)
