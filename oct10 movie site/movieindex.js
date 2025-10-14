const ENDPOINT =
  "https://api.themoviedb.org/3/movie/popular?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1";

async function fetchMovies() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  const movies = data.results;
  const container = document.getElementById("movies-container");

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    const posterUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/150x225?text=No+Image";

    movieElement.innerHTML = `
      <img src="${posterUrl}" alt="${movie.title}" />
      <div class="movie-details">
        <h2 class="movie-title">${movie.title}</h2>
        <p class="movie-overview">${movie.overview}</p>
      </div>
    `;

    container.appendChild(movieElement);
  });
}

fetchMovies();
