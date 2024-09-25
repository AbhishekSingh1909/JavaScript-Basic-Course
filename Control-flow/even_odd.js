function checkEven_Odd(limit) {
    for (let i = 1; i <= limit; i++) {
        let value = i % 2 == 0 ? 'even' : 'odd';
        console.log(`${i} : ${value}`);
    }
}

checkEven_Odd(20)