import { useEffect } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchNowShowing } from "@/action";
import { MovieState } from "@/reducers";

import NowShowingCard from "./now-showing-card";

interface NowShowingSliderProps {
  movies: MovieState;
  fetchNowShowing: () => void;
}

const NowShowingSlider = ({
  movies,
  fetchNowShowing,
}: NowShowingSliderProps) => {
  useEffect(() => {
    fetchNowShowing();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: false,
    // dots: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.nowShowing.map((movie) => (
          <NowShowingCard key={movie.id} movie={movie} />
        ))}
      </Slider>
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
    fetchNowShowing: () => dispatch(fetchNowShowing()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NowShowingSlider);
