import { useState, useEffect } from "react"
import MovieListPages from "../components/MovieListPages"
import { getPopularMovies } from "../services/tmdb";
import Lottie from "lottie-react";
import flameAnimation from "../assets/flame.json";

export default function PopularPage() {
    //render popular movies list
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPopularMovies()
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.error("Lỗi khi hiển thị phim thịnh hành", err));
    }, []);
    //logic change page
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getPopularMovies(currentPage).then(res => {
            setMovies(res.data.results);
        })
    }, [currentPage])
    return (
        <div className="p-10">
            <div className="flex items-center gap-1 justify-center">
                <Lottie animationData={flameAnimation} className="h-10 w-10" />
                <h1 className="text-4xl font-bold">TOP THỊNH HÀNH</h1>
            </div>
            <MovieListPages movies={movies} />
            <div className="justify-center flex p-5">
                <button
                    hidden={currentPage === 1}
                    className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => setCurrentPage(1)}>
                    Trang đầu
                </button>
            </div>
            <div className="justify-center flex gap-3">
                <button
                    disabled={currentPage === 1}
                    className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => setCurrentPage(prev => prev - 1)}>
                    Quay lại
                </button>
                <span className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer text-white font-bold py-2 px-4 rounded-full">
                    {currentPage}
                </span>
                <button
                    className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => setCurrentPage(prev => prev + 1)}
                >
                    Tiếp tục
                </button>
            </div>
        </div>
    )
}