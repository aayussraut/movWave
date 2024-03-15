import { discoverMovies } from "@/action";
import MovieCard from "@/components/card/movie-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { durationOptions } from "@/constants/durations";
import genres from "@/constants/genres";
import { ratingOptions } from "@/constants/rating";
import { yearOptions } from "@/constants/released-year";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { connect } from "react-redux";

const MoviePage = ({ movies, discoverMovies }) => {
  const [rating, setRating] = useState("all");
  const [genre, setGenre] = useState("all");
  const [releasedYear, setReleasedYear] = useState("all");
  const [duration, setDuration] = useState("all");

  useEffect(() => {
    discoverMovies(rating, genre, releasedYear, duration);
  }, [rating, genre, releasedYear, duration]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 items-center justify-center">
        <Select onValueChange={setGenre} value={genre}>
          <SelectTrigger className="  w-[150px] h-8 focus:outline-none  focus:border-transparent bg-[#0E1428] appearance-none rounded-xl">
            <SelectValue placeholder="Genre" />
          </SelectTrigger>
          <SelectContent className="border border-white bg-[#0E1428]">
            {Object.entries(genres).map(([genre, id]) => (
              <SelectItem key={id} value={id.toString()}>
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setRating} value={rating}>
          <SelectTrigger className="w-[150px] h-8 focus:outline-none  focus:border-transparent bg-[#0E1428] appearance-none rounded-xl ">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent className="border border-white bg-[#0E1428]">
            {ratingOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setReleasedYear} value={releasedYear}>
          <SelectTrigger className="w-[150px] h-8 focus:outline-none  focus:border-transparent bg-[#0E1428] appearance-none rounded-xl ">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent className="border border-white bg-[#0E1428]">
            {yearOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setDuration} value={duration}>
          <SelectTrigger className="w-[150px] h-8 focus:outline-none  focus:border-transparent bg-[#0E1428] appearance-none rounded-xl ">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent className="border border-white bg-[#0E1428]">
            {durationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <h1 className="text-sm text-white font-extrabold">Discover Movies</h1>
          <IoIosArrowForward size={15} fill="white" />
        </div>
        <div className="bg-[#0E1428] w-fit">
          <div className="flex flex-wrap  justify-center">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.discoveredMovies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    discoverMovies: (
      rating: string,
      genre: string,
      year: string,
      duration: string
    ) => dispatch(discoverMovies(rating, genre, year, duration)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
