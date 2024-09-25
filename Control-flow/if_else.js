function greet(timing) {
    hours = convertTo24(timing)
    if (hours >= 0 && hours < 12)
        return 'Morning';
    else if (hours >= 12 && hours < 18)
        return 'After Noon'
    return 'Evening';
}

let timing = prompt("Please enter your name:");

console.log(`Good ${greet(timing)}`);

function convertTo24(value) {
    let [hours, minutesPart] = value.split(':');
    let period = minutesPart.slice(-2);
    console.log(hours, period);

    if (typeof period === 'string' && period.toLowerCase() === 'pm' && hours < 12) {
        console.log(parseInt(hours) + 12);
        return parseInt(hours) + 12;
    }

    return hours;
}