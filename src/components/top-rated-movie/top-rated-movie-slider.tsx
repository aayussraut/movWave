import { IoIosArrowForward } from "react-icons/io";

import { connect } from "react-redux";
import { fetchTopRated } from "@/action";
import { MovieState } from "@/reducers";
import { useEffect } from "react";
import Slider from "react-slick";
import MovieCard from "../card/movie-card";

interface TopRatedMovieSliderProps {
  movies: MovieState;
  fetchTopRated: () => void;
}

const TopRatedMovieSlider = ({
  movies,
  fetchTopRated,
}: TopRatedMovieSliderProps) => {
  useEffect(() => {
    fetchTopRated();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    centerPadding: "60px",
  };

  return (
    <div className="flex flex-col mt-10 gap-1 min-h-fit h-full">
      <div className="flex items-center gap-1">
        <h1 className="text-sm text-white font-extrabold">Top Rated Movies</h1>
        <IoIosArrowForward size={15} fill="white" />
      </div>
      <div className="bg-[#0E1428] ">
        <Slider {...settings}>
          {movies.topRated.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopRated: () => dispatch(fetchTopRated()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopRatedMovieSlider);
