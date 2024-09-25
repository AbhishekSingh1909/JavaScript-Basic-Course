function getSum_Check_Argument(...numbers) {
    let sum = 0;
        numbers.forEach(element => {
            if (Array.isArray(element)) {
                //element.forEach(item => sum += item)
                numbers = [...element];
            }
            //else sum += element;
        });
    
    sum = numbers.reduce((a, b) => a + b);    return sum;
}
console.log(getSum_Check_Argument([1, 2, 3, 5]));
console.log(getSum_Check_Argument(1, 2, 3, 4));