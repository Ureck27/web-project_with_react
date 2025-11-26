import React from "react";

function MovieCard({ movie }) {
   function onFavoriteClick(){
     alert("clicked")
   }
  // Make sure movie exists
  if (!movie) return null;

  const { title, release_date, url } = movie;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={url} alt={title} />

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
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;

