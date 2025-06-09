import MovieCard from "./MovieCard";

export default function MovieList({movies}){
    if(!Array.isArray(movies)) return <p>Khong co du lieu phim</p>
    return(
        <div className='columns-5  justify-items-center'>
            {movies.map(movie=>(
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}