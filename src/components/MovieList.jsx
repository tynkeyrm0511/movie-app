import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  if (!Array.isArray(movies)) return <p>Khong co du lieu phim</p>;

  return (
    <div className="grid grid-cols-6">
      {movies.slice(0, 12).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
