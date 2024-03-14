import { MdStarRate } from "react-icons/md";
import { Button } from "../ui/button";

import { IoPlaySharp, IoTicketSharp } from "react-icons/io5";
import { Movie } from "../../reducers/index";

interface NowShowingCardProps {
  movie: Movie;
}

const NowShowingCard = ({ movie }: NowShowingCardProps) => {
  // console.log(movie);
  return (
    <div className="flex bg-[#0E1428] px-5 py-2 items-center justify-center mx-6 gap-10 h-96 ">
      <div className="flex flex-col gap-5 w-[800px]">
        <div className="flex  gap-2">
          <h1 className="text-white text-4xl font-extrabold">
            {movie.original_title}
          </h1>
          <div className="flex items-center gap-1">
            <MdStarRate fill={"yellow"} size={25} />
            <p className="text-yellow-200 text-sm font-semibold pt-1">
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <p className=" text-xs font-semibold">{movie.release_date}</p>
          <span className="text-sm">|</span>
          <p className=" text-xs font-semibold">Ongoing</p>
        </div>

        <div className="flex gap-2 ">
          <span className="bg-purple-900 text-white px-2 py-1 rounded-2xl text-sm">
            Action
          </span>
          <span className="bg-purple-900 text-white px-2 py-1 rounded-2xl text-sm">
            Adventure
          </span>

          {/* <h3 className="text-white text-2xl font-extrabold">Genre</h3>
          <p className="text-sm text-gray-300">
            {movie.genre_ids.map((genre) => (
              <span key={genre}>{genre} </span>
            ))}
          </p> */}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-white text-2xl font-extrabold">Summary</h3>
          <p className="overflow-hidden line-clamp-5 text-justify">
            {movie.overview}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            className="flex bg-purple-900  px-4 py-2 rounded-md items-center gap-2"
            variant={"default"}
          >
            <IoPlaySharp size={20} fill="white" />
            <span className="text-white">Watch Trailer</span>
          </Button>
          <Button
            variant={"ghost"}
            className="flex px-4 py-2 rounded-md items-center gap-2 "
          >
            <IoTicketSharp
              size={20}
              fill="gray"
              className="group-hover:text-black"
            />
            <span>Get Ticket</span>
          </Button>
        </div>
      </div>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt="avatar"
          className="h-full w-[200px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default NowShowingCard;
