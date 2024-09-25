const countOccurrence = (arr, val) => { 
    try {
        if (!Array.isArray(arr) )
            throw new Error(`invalid array`);
        return arr.reduce((acc, item) => acc += item === val ? 1 : 0, 0)
    }
    catch (ex) { 
        console.error(ex.message)
        return;
    }
    
}


console.log(countOccurrence({'a' : 1}, 1));