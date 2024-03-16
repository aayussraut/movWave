import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

import { fetchUpcoming } from "@/action";
import { MovieState } from "@/reducers";

import MovieCard from "../card/movie-card";
import MovieCardWrapper from "../movie/movie-card-wrapper";

interface UpcommingMovieSliderProps {
  movies: MovieState;
  fetchUpcoming: () => void;
}

const UpcommingMovieSlider = ({
  movies,
  fetchUpcoming,
}: UpcommingMovieSliderProps) => {
  const slider = useRef(null);

  useEffect(() => {
    fetchUpcoming();
  }, [fetchUpcoming]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    centerPadding: "60px",
    arrows: false,
  };

  return (
    <div className="pb-5">
      <MovieCardWrapper title="Upcomming Movies" sliderRef={slider}>
        <Slider ref={slider} {...settings}>
          {movies.upcoming.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </MovieCardWrapper>
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
