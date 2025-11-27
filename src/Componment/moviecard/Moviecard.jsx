
   function MovieCard({ movie }) {
   function onFavoriteClick(){
     alert("clicked")
   }
  // Make sure movie exists
  if (!movie) return null;

  const { title, review ,release_date, url } = movie;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />

        <div className="movie-overlay">
          <button
            className="favorite-btn"
            style={{ fontSize: "40px" }}
            onClick={() => onFavoriteClick(movie)}
          >
            ❤️
          </button>
        </div>
      </div>

      <div>
        <h3>{movie.title}</h3>
        <p>{movie.review}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;

