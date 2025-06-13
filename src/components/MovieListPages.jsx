import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
    if (!Array.isArray(movies)) return <p>Khong co du lieu phim</p>;

    return (
        <div className="grid grid-cols-5">
            {movies.slice(0, 20).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
