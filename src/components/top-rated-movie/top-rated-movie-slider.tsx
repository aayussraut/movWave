import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

import { fetchTopRated } from "@/action";
import { MovieState } from "@/reducers";

import MovieCard from "../card/movie-card";
import MovieCardWrapper from "../movie/movie-card-wrapper";

interface TopRatedMovieSliderProps {
  movies: MovieState;
  fetchTopRated: () => void;
}

const TopRatedMovieSlider = ({
  movies,
  fetchTopRated,
}: TopRatedMovieSliderProps) => {
  const slider = useRef(null);

  useEffect(() => {
    fetchTopRated();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    centerPadding: "60px",
    arrows: false,
  };

  return (
    <MovieCardWrapper title="Top Rated Movies" sliderRef={slider}>
      <Slider ref={slider} {...settings}>
        {movies.topRated.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Slider>
    </MovieCardWrapper>
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
