import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/tmdb";
import MovieList from "../components/MovieList";
import { useRef } from "react";
import VariableProximity from "../components/reactbits/VariableProximity";
import Lottie from "lottie-react";
import flameAnimation from "../assets/flame.json";

export default function HomePage() {
  const containerRef = useRef(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Loi khi hien thi phim thinh hanh", err);
      });
  }, []);

  //test commit

  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
      <div className="flex items-center gap-0.5 py-4">
        <Lottie animationData={flameAnimation} className="w-14 h-14" />
        <div ref={containerRef} className="relative p-2">
          <VariableProximity
            label={"Trends"}
            className={"variable-proximity-demo text-5xl "}
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
