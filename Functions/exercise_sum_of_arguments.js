function getSum() { 
    let sum = 0;
    for (let args in arguments) { 
        for (let item of arguments[args]) { 
            console.log(item)
            sum += item;
        }
            
    }
        
    return sum;
}

const sum = getSum([20, 30, 45, 23]);

console.log(sum);

function getSumUseRestOperator(...numbers) { 
    let sum = 0;
    numbers.forEach((element, index) => {
        console.log(element); sum += element;
        
    });
    return sum;
}

const sum1 = getSumUseRestOperator(20, 30, 45, 23);

console.log(sum1);

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
