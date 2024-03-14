import NowShowingSlider from "@/components/now-showing/now-showing-slider";
import TopRatedMovieSlider from "@/components/top-rated-movie/top-rated-movie-slider";
import UpcommingMovieSlider from "@/components/upcomming-movie/upcomming-movie-slider";

export default function HomePage() {
  return (
    <div>
      <NowShowingSlider />
      <TopRatedMovieSlider />
      <UpcommingMovieSlider />
    </div>
  );
}
