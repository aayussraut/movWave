import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

import { Movie } from "@/reducers";

import MovieCard from "@/components/card/movie-card";

const SearchResultPage = () => {
  interface RootState {
    searchResults: Movie[];
  }
  const movies = useSelector((state: RootState) => state.searchResults);

  return (
    <div className="flex flex-col gap-1 min-h-fit h-full">
      <div className="flex items-center gap-1">
        <h1 className="text-sm text-white font-extrabold">Search Results</h1>
        <IoIosArrowForward size={15} fill="white" />
      </div>
      <div className="bg-[#0E1428] ">
        <div className="flex flex-wrap  justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
