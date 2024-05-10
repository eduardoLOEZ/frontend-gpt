import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Typer from "./Typer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gray-800 text-white">
        {/* Hero section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl">
              <Typer />
            </h1>

            <div className="mt-10">
              {/* Add your call-to-action buttons or other content here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
