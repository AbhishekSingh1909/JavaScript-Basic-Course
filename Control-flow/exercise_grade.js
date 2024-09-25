let grade = (marks) => {
    let sum = 0;
    sum = marks.reduce((acc, m) => {
        return acc += m;
    })
    console.log(sum);
    let avg = Math.floor(sum / marks.length);
    console.log(avg)
    if (avg <= 59)
        return 'F';
    if (avg <= 69)
        return 'D';
    if (avg <= 79)
        return 'C';
    if (avg <= 89)
        return 'B';

    return 'A'
}
const marks = [91, 100, 98, 100, 98];

console.log(grade(marks));

// show stars

const showStars = (value) => {
    for (let i = 1; i <= value; i++) {
        let star = '';
        for (let j = 1; j <= i; j++)
            star += '*';
        console.log(star);
    }
}

showStars(5);

function showPrime(limit) {
    let i = 2;
    // console.log(2);
    while (i <= limit) {
        let j = 2;
        for (; j < i; j++) {
            if (i % j == 0)
                break;
        }
        if (j == i)
            console.log(i)
        i = ++i;
    }
}

showPrime(2);