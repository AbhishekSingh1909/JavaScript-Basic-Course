const circle = {
    radius: 2,
    get area() { return Math.PI * this.radius * this.radius} // make area is read only property
}

console.log(circle.radius, circle.area);
circle.radius = 21;
console.log(circle.radius, circle.area)
circle.area = 10;
console.log(circle.radius, circle.area)
