import { fetchMovieDetails, fetchSimilarMovies } from "@/action";
import { useEffect } from "react";
import { MdOutlineRemoveRedEye, MdStarRate } from "react-icons/md";
import { connect } from "react-redux";

import { GoDotFill } from "react-icons/go";
import { IoPlaySharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

const MovieDetailPage = ({
  movie,
  similarMovies,
  fetchMovieDetails,
  fetchSimilarMovies,
}) => {
  const movie_id = useParams().id;
  console.log(movie_id);
  useEffect(() => {
    fetchMovieDetails(movie_id);
    fetchSimilarMovies(movie_id);
  }, [movie_id, fetchMovieDetails, fetchSimilarMovies]);

  console.log(movie);
  console.log("similar", similarMovies);

  return movie && similarMovies ? (
    <div className="h-[calc(100vh-72px)] bg-[#0E1428] ">
      <div className="relative  ">
        <img
          src={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          alt={movie.title}
          className="h-[25rem] 2xl:h-[33rem] w-full object-cover"
        />
        <div className="absolute -bottom-16 left-10 flex items-center gap-4 ">
          <img
            src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-md shadow-gray-600"
          />
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2 items-center">
              <h1 className="text-white text-4xl font-extrabold">
                {movie.title}
              </h1>

              <div className="flex items-center gap-2">
                <MdStarRate fill={"yellow"} size={25} />
                <p className="text-yellow-200 text-md font-semibold pt-1 ">
                  {movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
            <p className="text-white font-white text-sm">{movie.tagline}</p>
            <div className="flex gap-2 ">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-purple-900 text-white px-2 py-1 rounded-2xl text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="flex gap-2 text-sm">
              <p className="text-white">{movie.release_date}</p>
              <GoDotFill fill="white" />
              <p className="text-white">{movie.runtime} minutes</p>
              <GoDotFill fill="white" />
              <p className="text-white">{movie.status}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute -bottom-16 left-60  gap-5 w-[40rem] text-justify">
          <Button className="flex bg-purple-900  px-4 py-2 rounded-md items-center gap-2 w-fit">
            <IoPlaySharp size={20} fill="white" />
            <span className="text-white font-bold">Watch Trailer</span>
          </Button>
        </div>
      </div>
      <div className="flex mt-24 gap-10">
        <div className=" ms-10 flex flex-col gap-2 w-1/2">
          <h2 className="text-white text-xl 2xl:text-3xl font-semibold">
            Summary
          </h2>
          <p className="text-white text-md 2xl:text-xl text-justify">
            {movie.overview}
          </p>
        </div>
        <div>
          <h2 className="text-white text-xl 2xl:text-3xl font-semibold mb-2">
            Related
          </h2>
          <div className="flex gap-8">
            {similarMovies.length > 0 &&
              similarMovies.slice(0, 3).map((movie) => (
                <div
                  key={movie.id}
                  className="relative group hover:border rounded-lg"
                >
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt={movie.title}
                    className="h-52 rounded-lg shadow-md shadow-gray-600"
                  />
                  <Link to={`/movie/${movie.id}`}>
                    <Button className="hidden absolute top-1/2  group-hover:flex items-center gap-2 bg-purple-900 w-full">
                      <MdOutlineRemoveRedEye fill="white" />
                      <span className="text-white text-sm">View Details</span>
                    </Button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Hello</div>
  );
};
const mapStateToProps = (state) => ({
  movie: state.selectedMovie,
  similarMovies: state.similarMovies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id: number) => dispatch(fetchMovieDetails(id)),
    fetchSimilarMovies: (id: number) => dispatch(fetchSimilarMovies(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
