import MovieCard from "./MovieCard";
export default function({movies, watchlist, toggleWatchlist}) {
    const watchlistedMovies = movies.filter(movie => watchlist.includes(movie.id));
    return (<div className="movies-grid">
        {watchlistedMovies.length == 0 ? (
          <span className="warning-message">
            Currently no movie available with this search term
          </span>
        ) : (
            watchlistedMovies.map((movie) => <MovieCard movie={movie} key={movie.id} toggleWatchlist={toggleWatchlist} isWatchlisted="true"/>)
        )}
      </div>);
}