// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">

          <ul className="hidden ml-4 sm:flex space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-300">Inicio</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-300">Acerca de</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-300">Contacto</Link></li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className={`sm:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <Link to="/login" className="text-white border border-white px-4 py-2 rounded hover:bg-gray-700">Iniciar Sesión</Link>
          <Link to="/register" className="text-white ml-4 border border-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600">Registrarse</Link>
        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;