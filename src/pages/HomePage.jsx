import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/tmdb";
import MovieList from "../components/MovieList";
import SectionHeader from "../components/SectionHeader";
import flameAnimation from "../assets/flame.json";
import Lottie from "lottie-react";
export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("Lỗi khi hiển thị phim thịnh hành", err));
  }, []); 

  return (
    <div className="p-10 space-y-10">
      {/* Trending Movies */}
      <div>
        
        <SectionHeader label="TOP THỊNH HÀNH" to="/popular" icon={flameAnimation}/>
        <MovieList movies={movies} />
      </div>

      {/* You May Like */}
      <div>
        <SectionHeader label="CÓ KHI NÍ THÍCH ĐÓ!" to="/popular" />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
