import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/tmdb";
import MovieList from "../components/MovieList";
import SectionHeader from "../components/SectionHeader";
import flameAnimation from "../assets/flame.json";
import star from '../assets/star.json'
import Banner from "../components/Banner";
import { FaStar } from "react-icons/fa";



export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("Lỗi khi hiển thị phim thịnh hành", err));
  }, []);

  return (
    <div>
      <Banner />
      {/* Trending Movies */}
      <div className="p-5">
        <div>
          <SectionHeader label="Trending" to="/popular-movies" icon={flameAnimation} />
          <MovieList movies={movies} />
        </div>

        {/* Top Rated */}
        <div>
          <SectionHeader label="Top Rated" to="/popular-movies" icon={star} />
          <MovieList movies={movies} />
        </div>

        {/* Upcoming */}
        <div>
          <SectionHeader label="Upcoming" to="/popular-movies" />
          <MovieList movies={movies} />
        </div>

        {/* Genres */}
        <div>
          <SectionHeader label="Genre" to="/popular-movies" />
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}
