export default function MovieCard({movie, isWatchlisted, toggleWatchlist}) {
    function imageErrorHandler(e) {
        e.target.src = "images/default.jpg";
    }
  return (
    <div className="movie-card">
      <img src={`images/${movie.image}`} alt={movie.title} onError={imageErrorHandler}/>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>   
          <span
            className={`movie-card-rating ${
              movie.rating < 5
                ? "rating-bad"
                : movie.rating < 8
                ? "rating-ok"
                : "rating-good"
            }`}
          >
            {movie.rating}
          </span>
          <label className="switch" for={`checkbox${movie.id}`}>
            <input type="checkbox" id={`checkbox${movie.id}`} checked={isWatchlisted} onChange={() => toggleWatchlist(movie.id)}/>
            <div className="slider">
              <p className="slider-label">{isWatchlisted ? "In watchlist":"Add to watchlist"}</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
