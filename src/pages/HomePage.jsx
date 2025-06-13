import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/tmdb";
import MovieList from "../components/MovieList";
import SectionHeader from "../components/SectionHeader";
import flameAnimation from "../assets/flame.json";
import Banner from "../components/Banner";
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
      <div className="p-10 space-y-10">
        <div>
          <SectionHeader label="TOP THỊNH HÀNH" to="/popular-movies" icon={flameAnimation} />
          <MovieList movies={movies} />
        </div>

        {/* You May Like */}
        <div>
          <SectionHeader label="CÓ KHI NÍ THÍCH ĐÓ!" to="/popular-movies" />
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}
