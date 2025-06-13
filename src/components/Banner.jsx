import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/tmdb";
import { FaStar } from "react-icons/fa6";

export default function Banner() {
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then((res) => {
            const first5 = res.data.results.slice(0, 5);
            setTopMovies(first5);
        });
    }, []);

    if (topMovies.length === 0) return null;

    const topMovie = topMovies[0];
    const imageSrc = `https://image.tmdb.org/t/p/original${topMovie.backdrop_path}`;
    const vote = Math.floor(topMovie.vote_average * 10) / 10

    return (
        <div className="relative">
            <img className="w-screen h-screen object-cover" src={imageSrc} alt={topMovie.title} />
            <div className="absolute inset-0 flex flex-col justify-end p-10 w-[500px] bg-gradient-to-t from-black/80 to-transparent">
                <h1 className="text-4xl font-bold text-white">{topMovie.title}</h1>
                <p className="text-white my-4">{topMovie.overview}</p>
                <div className="flex items-center justify-between text-white">
                    <p className="flex items-center gap-1">{vote}<FaStar color="orange" /></p>
                    <Link to={`/movie/${topMovie.id}`} className="underline">
                        More info
                    </Link>
                </div>
            </div>
        </div>
    );
}
