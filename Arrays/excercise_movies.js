const movies = [
    { title: 'a', year: 2018, rating: 4.1 },
    { title: 'b', year: 2018, rating: 4.6 },
    { title: 'c', year: 2018, rating: 4.5 },
    { title: 'd', year: 2017, rating: 2.5 }
]


// get all movies in year 2018 and rating > 4
// sort by rating in descending order
// get movie title
function getMovies(movies, year, rating) {
    return movies.filter(movie => movie.year === year && movie.rating > rating)
        .sort((a, b) => b.rating - a.rating)
        .map((movie) => movie.title);
}

console.log(getMovies(movies, 2018, 4.5))