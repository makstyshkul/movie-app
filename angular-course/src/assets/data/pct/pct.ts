// Фейкова база фільмів
function getAllMovies() {
  return [
    { title: "Inception", genre: "sci-fi", rating: 8.8 },
    { title: "Titanic", genre: "romance", rating: 7.9 },
    { title: "Interstellar", genre: "sci-fi", rating: 8.6 },
    { title: "The Notebook", genre: "romance", rating: 7.8 },
    { title: "Avengers", genre: "action", rating: 8.0 },
  ];
}

// Спрощена функція схожості (чим ближче жанр — тим вище рейтинг)
function bySimilarityTo(userPreferences) {
  return (a, b) => {
    const aMatch = userPreferences.genres.includes(a.genre) ? 1 : 0;
    const bMatch = userPreferences.genres.includes(b.genre) ? 1 : 0;
    return bMatch - aMatch;
  };
}


function getRecommendedMovies(userPreferences: { genres: any; minRating: any; }) {
const movies = getAllMovies();
return movies.filter((movie) =>
userPreferences.genres.includes(movie.genre) &&
movie.rating >= userPreferences.minRating)
.sort(bySimilarityTo(userPreferences));
}

// Тест
const userPreferences = {
  genres: ["sci-fi", "action"],
  minRating: 8.0,
};

console.log(getRecommendedMovies(userPreferences));
 