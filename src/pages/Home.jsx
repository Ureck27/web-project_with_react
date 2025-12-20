import MovieCard from "../componments/MovieCard";
function Home(){
   const movies = [
  { id: 1, title: "Inception", releaseDate: "2010-07-16", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },

  { id: 2, title: "Interstellar", releaseDate: "2014-11-07", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },

  { id: 3, title: "The Dark Knight", releaseDate: "2008-07-18", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },

  { id: 4, title: "Fight Club", releaseDate: "1999-10-15", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },

  { id: 5, title: "Forrest Gump", releaseDate: "1994-07-06", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg" },

  { id: 6, title: "The Matrix", releaseDate: "1999-03-31", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },

  { id: 7, title: "Gladiator", releaseDate: "2000-05-05", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },

  { id: 8, title: "Titanic", releaseDate: "1997-12-19", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },

  { id: 9, title: "Avatar", releaseDate: "2009-12-18", stars: 4,
    imageUrl: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },

  { id: 10, title: "Joker", releaseDate: "2019-10-04", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },

  { id: 11, title: "The Godfather", releaseDate: "1972-03-24", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },

  { id: 12, title: "The Godfather Part II", releaseDate: "1974-12-20", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg" },

  { id: 13, title: "Pulp Fiction", releaseDate: "1994-10-14", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" },

  { id: 14, title: "The Shawshank Redemption", releaseDate: "1994-09-23", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },

  { id: 15, title: "LOTR: Fellowship", releaseDate: "2001-12-19", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" },

  { id: 16, title: "LOTR: Two Towers", releaseDate: "2002-12-18", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg" },

  { id: 17, title: "LOTR: Return of the King", releaseDate: "2003-12-17", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg" },

  { id: 18, title: "Star Wars: A New Hope", releaseDate: "1977-05-25", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" },

  { id: 19, title: "The Avengers", releaseDate: "2012-05-04", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },

  { id: 20, title: "Iron Man", releaseDate: "2008-05-02", stars: 4,
    imageUrl: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },

  { id: 21, title: "Black Panther", releaseDate: "2018-02-16", stars: 4,
    imageUrl: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },

  { id: 22, title: "Doctor Strange", releaseDate: "2016-11-04", stars: 4,
    imageUrl: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },

  { id: 23, title: "Spider-Man: No Way Home", releaseDate: "2021-12-17", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },

  { id: 24, title: "Dune", releaseDate: "2021-10-22", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },

  { id: 25, title: "Oppenheimer", releaseDate: "2023-07-21", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg" },

  { id: 26, title: "Barbie", releaseDate: "2023-07-21", stars: 4,
    imageUrl: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },

  { id: 27, title: "Mad Max: Fury Road", releaseDate: "2015-05-15", stars: 4.5,
    imageUrl: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },

  { id: 28, title: "Parasite", releaseDate: "2019-05-30", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },

  { id: 29, title: "Whiplash", releaseDate: "2014-10-10", stars: 5,
    imageUrl: "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa6iE.jpg" }
];

    const handleSearch=()=>{

    }
    return(
        <div className="Home">
          <form onSubmit={handleSearch} className="Search-form">
            <input 
            type="text" 
            placeholder="search fpr movies..." 
            className="search-input"
             />
            <button type="submit" className="search-button">Search</button>
          </form>
          <div className="movies-grid">
            {movies.map((movie,index) => (
                 <MovieCard movie={movie} key={index} />
                ))}
          </div>
        </div>
    );
}

export default Home ;