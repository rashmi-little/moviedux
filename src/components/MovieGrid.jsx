import {useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({movies, watchlist, toggleWatchlist}) {
  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  function handleSearchTerm(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }
  function handleGenreChange(e) {
    const value = e.target.value;
    setGenre(value);
  }
  function handleRatingChange(e) {
    const value = e.target.value;
    setRating(value);
  }


  const filterdMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const genreMatch = genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    const ratingMatch = rating === "All" || 
                        (rating === 'Good' && movie.rating >= 8) || 
                        (rating === 'Ok' && movie.rating > 5 && movie.rating < 8) || 
                        (rating === 'Bad' && movie.rating <= 5);

    return titleMatch && genreMatch && ratingMatch;
});

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchTerm}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filterdMovies.length == 0 ? (
          <span className="warning-message">
            Currently no movie available with this search term
          </span>
        ) : (
          filterdMovies.map((movie) => <MovieCard movie={movie} key={movie.id} toggleWatchlist={toggleWatchlist} isWatchlisted={watchlist.includes(movie.id)}/>)
        )}
      </div>
    </div>
  );
}
