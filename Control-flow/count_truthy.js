function countTruthy(arr) {
    return arr.filter((a) => !a).length
}

console.log(countTruthy([0, 1, false, '', 'Abhishek', NaN, 10, undefined, null, []]));

// remove elements from an array which has length less than 5
let friends = ['Abhi', 'Sara', 'Jimmy', 'Sam'];
let newFriends = [];

for (let name of friends) {
    if (name.length >= 5) {
        newFriends.push(name);
    }
}

console.log(newFriends)