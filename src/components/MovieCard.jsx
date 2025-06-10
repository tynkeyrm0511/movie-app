const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function MovieCard({ movie }) {
  return (
    <div className="m-5">
      <img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
          <h3 className="truncate">{movie.title}</h3>
          <div className="flex justify-between">
            <p>{movie.release_date}</p>
            <p>Đánh giá: {movie.vote_average}</p>
          </div>
    </div>
  );
}
