import MovieCard from "../src/Componment/moviecard/Moviecard";
function Home(){
 const movies = [
  { 
    id: 1, 
    title: "Matrix",  
    review: "4",  
    release_date: "2020",
    url: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  { 
    id: 2,  
    title: "Inception",  
    review: "5",  
    release_date: "2010",
    url: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  },
  { 
    id: 3,  
    title: "Interstellar",  
    review: "5",  
    release_date: "2014",
    url: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  { 
    id: 4,  
    title: "The Dark Knight",  
    review: "5",  
    release_date: "2008",
    url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  { 
    id: 5,  
    title: "Avatar",  
    review: "4",  
    release_date: "2009",
    url: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg"
  },
  { 
    id: 6,  
    title: "Titanic",  
    review: "5",  
    release_date: "1997",
    url: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  { 
    id: 7,  
    title: "Joker",  
    review: "4",  
    release_date: "2019",
    url: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  { 
    id: 8,  
    title: "Dune",  
    review: "4",  
    release_date: "2021",
    url: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
  },
  { 
    id: 9,  
    title: "John Wick",  
    review: "4",  
    release_date: "2014",
    url: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
  },
  { 
    id: 10,  
    title: "The Avengers",  
    review: "4",  
    release_date: "2012",
    url: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
  },
  { 
    id: 11,  
    title: "Iron Man",  
    review: "5",  
    release_date: "2008",
    url: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
  },
  { 
    id: 12,  
    title: "Spider-Man",  
    review: "4",  
    release_date: "2002",
    url: "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg"
  },
  { 
    id: 13,  
    title: "Shutter Island",  
    review: "5",  
    release_date: "2010",
    url: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg"
  },
  { 
    id: 14,  
    title: "The Godfather",  
    review: "5",  
    release_date: "1972",
    url: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  { 
    id: 15,  
    title: "Gladiator",  
    review: "5",  
    release_date: "2000",
    url: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  { 
    id: 16,  
    title: "Fight Club",  
    review: "5",  
    release_date: "1999",
    url: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
  },
  { 
    id: 17,  
    title: "The Shawshank Redemption",  
    review: "5",  
    release_date: "1994",
    url: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  }
];
 
const handelSearch=() => {

}


     return (
        <div className="home">
            <form onSubmit={handelSearch} className="search-form">
                <input 
                       type="text" 
                       placeholder="Search_for_movie"
                       className="search_input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map( (movie) => (
                    <MovieCard movie={movie} key={movie.id}/> ) )}
            </div>
        </div>
     )
    }

export default Home ;