import { Link } from "react-router-dom";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { searchMovies } from "@/action";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Form, FormControl, FormField, FormItem } from "./ui/form";

import genres from "@/constants/genres";

type NavbarProps = {
  searchMovies: (searchTerm: string, genre: string) => void;
};

const Navbar = ({ searchMovies }: NavbarProps) => {
  const form = useForm();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { searchTerm, genre } = form.getValues();

    searchMovies(searchTerm, genre);
    navigate("/search-results");
  };

  return (
    <nav className=" bg-[#0E1428]  text-white  flex justify-center w-full  shadow-sm fixed top-0 z-50 p-2">
      <div className="flex justify-between text-white text-xs w-[1280px] min-w-[1280px]">
        <Link to="/">
          <div className="text-3xl">
            <span className="text-white font-bold">mov</span>
            <span className="text-purple-700 italic font-extrabold">Wave</span>
          </div>
        </Link>

        <ul className="flex gap-5 items-center ">
          <li className="text-sm font-bold hover:text-purple-700 hover:cursor-pointer">
            <Link to="/"> Home</Link>
          </li>
          <li className="text-sm font-bold hover:text-purple-700 hover:cursor-pointer">
            <Link to="/movie"> Movies</Link>
          </li>
          <li className="text-sm font-bold hover:text-purple-700 hover:cursor-pointer">
            TV Shows
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Form {...form}>
            <form onSubmit={handleSubmit}>
              <div className="flex relative w-[450px]">
                <FormField
                  control={form.control}
                  name="searchTerm"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Search movies or tv shows"
                          value={field.value}
                          onChange={field.onChange}
                          className="w-[450px] bg-[#060B1C] border-[1px] border-gray-500 !outline-none focus:!border-transparent !appearance-none"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="genre"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          // value={field.value}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className=" absolute top-2 right-14 w-[150px] h-6 focus:outline-none  focus:border-transparent bg-[#0E1428] appearance-none">
                            <SelectValue placeholder="Genre" />
                          </SelectTrigger>
                          <SelectContent className="border border-white bg-[#0E1428]">
                            {Object.entries(genres).map(([genre, id]) => (
                              <SelectItem key={id} value={id.toString()}>
                                {genre}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="absolute top-2 right-1 flex">
                  <Button
                    type="submit"
                    variant="ghost"
                    className="rounded-md h-6 w-12 text-black hover:bg-[#060B1C]"
                  >
                    <IoSearchOutline size={16} />
                  </Button>
                </div>
              </div>
            </form>
          </Form>

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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (searchTerm: string, genre: string) =>
      dispatch(searchMovies(searchTerm, genre)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
