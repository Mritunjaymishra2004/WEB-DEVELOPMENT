const movies = [
    { title: "Mad Max: Fury Road", genre: "Action" },
    { title: "Die Hard", genre: "Action" },
    { title: "The Hangover", genre: "Comedy" },
    { title: "Superbad", genre: "Comedy" },
    { title: "The Godfather", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "The Conjuring", genre: "Horror" },
    { title: "Get Out", genre: "Horror" },
    { title: "Titanic", genre: "Romance" },
    { title: "The Notebook", genre: "Romance" }
];

document.getElementById('recommendButton').addEventListener('click', function() {
    const selectedGenre = document.getElementById('genre').value;
    const recommendedMovies = movies.filter(movie => movie.genre === selectedGenre);

    const recommendationList = document.getElementById('recommendationList');
    recommendationList.innerHTML = '';  // Clear previous recommendations

    recommendedMovies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = movie.title;
        recommendationList.appendChild(listItem);
    });
});
