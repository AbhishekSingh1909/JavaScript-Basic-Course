let person = {
    name: 'Abhishek',
    age: 30,
    job: 'Full Stack Developer',
    salary: 3000,
    address: 'Oulu Finland'
}

for (var p in person) {
    if (typeof person[p] === 'string')
        console.log(`${p} : ${person[p]}`)
}