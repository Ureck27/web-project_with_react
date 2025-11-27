import MovieCard from "../src/Componment/moviecard/Moviecard";
function Home(){
     const movies = [
  { 
    id: 1, 
    title: "Matrix",  
    review: "4",  
    release_date: "2020",
    url: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg"
  },
  { 
    id: 2,  
    title: "Inception",  
    review: "5",  
    release_date: "2010",
    url: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg"
  },
  { 
    id: 3,  
    title: "Interstellar",  
    review: "5",  
    release_date: "2014",
    url: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
  },
  { 
    id: 4,  
    title: "The Dark Knight",  
    review: "5",  
    release_date: "2008",
    url: "https://m.media-amazon.com/images/I/51k0qa6zWNL._AC_.jpg"
  },
  { 
    id: 5,  
    title: "Avatar",  
    review: "4",  
    release_date: "2009",
    url: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg"
  },
  { 
    id: 6,  
    title: "Titanic",  
    review: "5",  
    release_date: "1997",
    url: "https://m.media-amazon.com/images/I/71rNJQ2g-LL._AC_SL1024_.jpg"
  },
  { 
    id: 7,  
    title: "Joker",  
    review: "4",  
    release_date: "2019",
    url: "https://m.media-amazon.com/images/I/71KJ1bNQ8zL._AC_SL1500_.jpg"
  },
  { 
    id: 8,  
    title: "Dune",  
    review: "4",  
    release_date: "2021",
    url: "https://m.media-amazon.com/images/I/81+XeZOK7CL._AC_SL1500_.jpg"
  },
  { 
    id: 9,  
    title: "John Wick",  
    review: "4",  
    release_date: "2014",
    url: "https://m.media-amazon.com/images/I/81pG0H0QzjL._AC_SL1500_.jpg"
  },
  { 
    id: 10,  
    title: "The Avengers",  
    review: "4",  
    release_date: "2012",
    url: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg"
  },
  { 
    id: 11,  
    title: "Iron Man",  
    review: "5",  
    release_date: "2008",
    url: "https://m.media-amazon.com/images/I/81lOj62xODL._AC_SL1500_.jpg"
  },
  { 
    id: 12,  
    title: "Spider-Man",  
    review: "4",  
    release_date: "2002",
    url: "https://m.media-amazon.com/images/I/71KJ1bNQ8zL._AC_SL1500_.jpg"
  },
  { 
    id: 13,  
    title: "Shutter Island",  
    review: "5",  
    release_date: "2010",
    url: "https://m.media-amazon.com/images/I/81ssF3cHkKL._AC_SL1500_.jpg"
  },
  { 
    id: 14,  
    title: "The Godfather",  
    review: "5",  
    release_date: "1972",
    url: "https://m.media-amazon.com/images/I/51r-OnYFfTL._AC_.jpg"
  },
  { 
    id: 15,  
    title: "Gladiator",  
    review: "5",  
    release_date: "2000",
    url: "https://m.media-amazon.com/images/I/91MnG4ZtQ-L._AC_SL1500_.jpg"
  },
  { 
    id: 16,  
    title: "Fight Club",  
    review: "5",  
    release_date: "1999",
    url: "https://m.media-amazon.com/images/I/81D+KJkOULL._AC_SL1500_.jpg"
  },
  { 
    id: 17,  
    title: "The Shawshank Redemption",  
    review: "5",  
    release_date: "1994",
    url: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
  }
];

     return (
        <div className="home">
            <div className="movies-grid">
                {movies.map( (movie) => (
                    <MovieCard movie={movie} key={movie.id}/> ) )}
            </div>
        </div>
     )
    }

export default Home ;