import Navbar from "./components/navbar";
import NowShowingSlider from "./components/now-showing/now-showing-slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopRatedMovieSlider from "./components/top-rated-movie/top-rated-movie-slider";
import UpcommingMovieSlider from "./components/upcomming-movie/upcomming-movie-slider";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[#060B1C] min-h-screen pt-16">
        <div className="mx-auto w-[1280px]">
          <div>
            <NowShowingSlider />
            <TopRatedMovieSlider />
            <UpcommingMovieSlider />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
