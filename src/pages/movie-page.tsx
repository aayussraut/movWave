import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { discoverMovies } from "@/action";

import { durationOptions } from "@/constants/durations";
import genres from "@/constants/genres";
import { ratingOptions } from "@/constants/rating";
import { yearOptions } from "@/constants/released-year";

import MovieCardWrapper from "@/components/movie/movie-card-wrapper";
import FilterDropdown from "@/components/movie/filter-dropdown";
import MovieCard from "@/components/card/movie-card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

        <FilterDropdown
          options={ratingOptions}
          value={rating}
          onChange={setRating}
          placeholder="Select Rating"
        />
        <FilterDropdown
          options={yearOptions}
          value={releasedYear}
          onChange={setReleasedYear}
          placeholder="Select Released Year"
        />
        <FilterDropdown
          options={durationOptions}
          value={duration}
          onChange={setDuration}
          placeholder="Select Duration"
        />
      </div>
      <MovieCardWrapper title="Discover Movies">
        <div className="flex flex-wrap  justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </MovieCardWrapper>
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
