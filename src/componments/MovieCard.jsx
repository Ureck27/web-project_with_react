
function MovieCard({movie}){
    function onFavoriteClick(){
        alert("clicked");
    }
    return(
    
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.imageUrl} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                      ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
               <h1>{movie.title}</h1>
               <p>{movie.releaseDate}</p>
               <p>{"⭐".repeat(movie.stars)}</p>
            </div>
        </div>
        
    );
}
export default MovieCard ;