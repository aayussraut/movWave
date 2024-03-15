import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[#060B1C] min-h-screen pt-16">
        <div className="mx-auto w-[1280px]">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
