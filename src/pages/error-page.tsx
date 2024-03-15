import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-2 bg-[#060B1C]">
        <h1 className="mt-4 font-bold text-3xl text-red-500">Page not found</h1>
        <p className=" text-red-500 text-lg">
          We can't seem to find the page you are looking for.
        </p>
        <Button
          variant="default"
          onClick={() => navigate("/")}
          className="bg-purple-900"
        >
          <span className="text-white text-lg"> Home</span>
        </Button>
        <br />
      </div>
    </>
  );
};

export default ErrorPage;
