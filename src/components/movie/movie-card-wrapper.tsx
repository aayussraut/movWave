import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
interface MovieCardWrapperProps {
  title: string;
  sliderRef?: React.MutableRefObject<Slider>;
  children: React.ReactNode;
}

export default function MovieCardWrapper({
  title,
  sliderRef,
  children,
}: MovieCardWrapperProps) {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <div className="flex items-center gap-1 justify-between">
        <div className="flex items-center gap-1">
          <h1 className="text-sm text-white font-extrabold">{title}</h1>
          <IoIosArrowForward size={15} fill="white" />
        </div>
        {sliderRef && (
          <div className="flex items-center gap-4">
            <button onClick={() => sliderRef?.current?.slickPrev()}>
              <IoIosArrowBack fill="white" />
            </button>
            <button onClick={() => sliderRef?.current?.slickNext()}>
              <IoIosArrowForward fill="white" />
            </button>
          </div>
        )}
      </div>
      <div className="bg-[#0E1428] ">{children}</div>
    </div>
  );
}
