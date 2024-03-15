import { IoIosArrowForward } from "react-icons/io";

import { connect } from "react-redux";
import { fetchUpcoming } from "@/action";
import { MovieState } from "@/reducers";
import { useEffect } from "react";
import Slider from "react-slick";
import MovieCard from "../card/movie-card";

interface UpcommingMovieSliderProps {
  movies: MovieState;
  fetchUpcoming: () => void;
}

const UpcommingMovieSlider = ({
  movies,
  fetchUpcoming,
}: UpcommingMovieSliderProps) => {
  useEffect(() => {
    fetchUpcoming();
  }, [fetchUpcoming]);

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
        <h1 className="text-sm text-white font-extrabold">Upcomming Movies</h1>
        <IoIosArrowForward size={15} fill="white" />
      </div>
      <div className="bg-[#0E1428] ">
        <Slider {...settings}>
          {movies.upcoming.map((movie) => (
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
    fetchUpcoming: () => dispatch(fetchUpcoming()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcommingMovieSlider);
