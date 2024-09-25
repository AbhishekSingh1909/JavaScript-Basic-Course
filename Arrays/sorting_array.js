const unsortedArray = [34, 7, 23, 32, 5, 62];

console.log(unsortedArray);

console.log('After Sort');

const sortedArray = unsortedArray.sort((a, a) => a - a);

console.log(unsortedArray);

unsortedArray.reverse(); // reverse the array

console.log(unsortedArray);

//array of object
const blogs = [
    {
        title: 'Second Post',
        author: 'Jane Smith',
        views: 300,
        comments: [
            { author: 'Alex', body: 'Well written!' },
            { author: 'Chris', body: 'I learned a lot.' }
        ],
        isLive: false
    },
    {
        title: 'Third Post',
        author: 'Paul Brown',
        views: 75,
        comments: [],
        isLive: true
    },
    {
        title: 'First Post',
        author: 'John Doe',
        views: 150,
        comments: [
            { author: 'Jane', body: 'Great post!' },
            { author: 'Mark', body: 'Very informative.' }
        ],
        isLive: true
    }
]
console.log(blogs.map((a) => a.author))
blogs.sort((a, b) => {
    //a >b = 1
    //a < b = -1
    // a == b =0
    const authorA = a.author.toLowerCase();
    const authorB = b.author.toLowerCase();
    if (authorA > authorB) return 1;
    if (authorA < authorB) return -1;
    return 0;
})

console.log('After Sort by Author')
console.log(blogs.map((a) => a.author))

const allViews = blogs.every((b) => b.views > 0); // check for all

console.log(allViews)

const someViews = blogs.some((b) => b.views > 100); // any element

console.log(someViews)

const filteredBlogs = blogs.filter((b,) => b.views < 100);

console.log(filteredBlogs);

const duplicateArray = [34, 7, 23, 34, 62, 5, 62];

const filteredArray = duplicateArray.filter((a, index, arr) => arr.indexOf(a) == index)


console.log(filteredArray)
console.log(duplicateArray)

const elementsCount = duplicateArray.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1
    return acc
}, {})

console.log(elementsCount)
const duplicateElements = Object.entries(elementsCount).filter(([, value]) => value > 1).map(([element]) => Number(element))

console.log(typeof duplicateElements, duplicateElements)