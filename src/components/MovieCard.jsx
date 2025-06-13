const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
import AnimatedContent from "./reactbits/AnimatedContent";
import { FaStar } from "react-icons/fa6";
import { HiCalendarDateRange } from "react-icons/hi2";

export default function MovieCard({ movie }) {
  const yearRelease = movie.release_date.slice(0, 4)
  const vote = Math.floor(movie.vote_average * 10) / 10
  return (
    <div className="m-5">
      <img className="hover:opacity-80 rounded-xl" src={IMAGE_URL + movie.poster_path} alt={movie.title} />
      <h3 className="truncate font-bold">{movie.title}</h3>
      <div className="flex justify-between items-center">
        <p> {yearRelease}</p>
        <p className="flex items-center gap-1">{vote} <FaStar color="orange" /></p>
      </div>
    </div>
  );
}
