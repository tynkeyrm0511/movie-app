const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({movie}){
    return(
        <div>
            <img className='h-80' src={IMAGE_URL  + movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Đánh giá: {movie.vote_average}</p>
        </div>
    )
}