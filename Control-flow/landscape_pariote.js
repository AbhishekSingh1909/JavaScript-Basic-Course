function isLandScape(width, height) {
    return width > height
}

let result = isLandScape(20, 100);
console.log(`image is ${(result ? 'patriot' : 'landscape')}`)