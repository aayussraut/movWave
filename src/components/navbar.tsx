import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className=" bg-[#0E1428]  text-white  flex justify-center w-full  shadow-sm fixed top-0 z-50 p-2">
      <div className="flex justify-between text-white text-xs w-[1280px] min-w-[1280px]">
        <div className="text-3xl">
          <span className="text-white font-bold">mov</span>
          <span className="text-purple-700 italic font-extrabold">Wave</span>
        </div>
        <div className="flex relative w-[450px] items-center gap-4">
          <Input
            type="text"
            placeholder="Search movies or tv shows"
            className="bg-[#060B1C] border-[1px] border-gray-500 "
          />
          <Button
            variant="ghost"
            className="  absolute top-1 right-20 rounded-md  h-7 w-12 text-black"
          >
            <IoSearchOutline size={16} />
          </Button>
          <IoNotificationsOutline size={24} />
          <div>
            <img
              src="/aayush.jpeg"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover me-2 border-2 border-gray-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
