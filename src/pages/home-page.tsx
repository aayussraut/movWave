import Loading from "@/components/loading";
import { lazy } from "react";

const NowShowingSlider = lazy(
  () => import("@/components/now-showing/now-showing-slider")
);

const TopRatedMovieSlider = lazy(
  () => import("../components/top-rated-movie/top-rated-movie-slider")
);
const UpcomingMovieSlider = lazy(
  () => import("../components/upcomming-movie/upcomming-movie-slider")
);
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <NowShowingSlider />
        <TopRatedMovieSlider />
        <UpcomingMovieSlider />
      </Suspense>
    </div>
  );
}
