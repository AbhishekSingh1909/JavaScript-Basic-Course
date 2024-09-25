let colors = ['red', 'yellow', 'black', 'blue'];

Array.prototype.customProperty = 'this is custom property'

for (let color in colors) {
    console.log(`${color} at ${colors[color]}`)
}

console.log('\n');
console.log('for-in')
for (let color of colors) {
    console.log(color)
}

//Unlike for...in,  the for...of loop ignores non-numeric properties and does not iterate over inherited properties of arrays,
//which makes it safer and more predictable for array iteration.