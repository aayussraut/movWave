import { MdStarRate, MdOutlineRemoveRedEye } from "react-icons/md";

import { Movie } from "../../reducers/index";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="flex flex-col bg-[#060B1C] px-4 py-2 gap-2 h-auto w-56  mx-2 my-2  rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-52 h-60 object-scale-down rounded-md mx-auto"
      />

      <div className="flex justify-between gap-4">
        <h1 className="text-white text-md font-bold h-12 line-clamp-2">
          {movie.title}
        </h1>
        <div className="flex bg-yellow-200/15 px-2 rounded-xl gap-2 items-center justify-center h-fit py-1 ">
          <MdStarRate fill={"yellow"} size={14} />
          <p className="text-yellow-200 text-xs font-semibold">
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs">Release: {movie.release_date}</p>
        <p className="text-xs">Genre: Action, Adventure</p>
      </div>

      <div>
        <Link to={`/movie/${movie.id}`}>
          <Button
            variant="default"
            className="flex items-center gap-2 bg-purple-900 w-full"
          >
            <MdOutlineRemoveRedEye size={18} fill="white" />
            <span className="text-white">View Details</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
