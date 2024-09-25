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