//speed limit - 70
// 5 -> 1 point;
// 12 points -> license suspended
let checkSpeed = (value) => {
    const speed = Math.floor(value);
    const speedLimit = 70;
    const speedPerKm = 5;
    let point = 0;
    if (speed < (speedLimit + speedPerKm)) {
        console.log('ok');
        return;
    }
    let highSpeed = Math.floor(speed - speedLimit);
    point = highSpeed / 5;
    if (point >= 12) {
        console.log('License Suspended');
    }
    else console.log(`point : ${point}`);

}

let input = prompt('Enter car speed in KM');

let [value, unit] = input.split(' ');
checkSpeed(value);