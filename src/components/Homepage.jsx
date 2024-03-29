import React from "react";
import NavBar from "./Navbar"; 
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gray-800 text-white">
        {/* Hero section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Bienvenido a mi aplicación
            </h1>
            <p className="mt-4 text-lg">
              Esto es una descripción de la página principal
            </p>
            <div className="mt-10">
              {/* Add your call-to-action buttons or other content here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default HomePage;