import { IoIosArrowForward } from "react-icons/io";

export default function MovieCardWrapper({ title, children }) {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <div className="flex items-center gap-1">
        <h1 className="text-sm text-white font-extrabold">{title}</h1>
        <IoIosArrowForward size={15} fill="white" />
      </div>
      <div className="bg-[#0E1428] ">{children}</div>
    </div>
  );
}
