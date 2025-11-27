import MovieCard from "../src/Componment/moviecard/Moviecard";
function Home(){
     const movies =[
          { id :1 , title : "Matrix" ,  review :"4 " , release_date:"2020"},
          { id :2,  title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :3 , title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :4 ,title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :5, title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :6 ,title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :7, title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :8,  title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :9 , title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :10 , title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :11 ,title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id :12 , title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id:13,    title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id:14,    title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id:15,    title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id:16,    title:"hkasfa" , review :"4 " , release_date:"2020"},
          { id:17,    title:"hkasfa" , review :"4 " , release_date:"2020"},
     
     ]

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