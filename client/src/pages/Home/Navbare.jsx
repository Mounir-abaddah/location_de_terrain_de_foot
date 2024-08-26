import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Navbare = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-indigo-600 font-bold text-2xl">
            Sportify
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">
            Accueil
          </Link>
          <Link to="/about_us" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">
            AboutUs
          </Link>
          <Link to="/A_Propos_de_Nous" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">
            À propos de nous
          </Link>
          <Link to="/Contacter_Nous" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">
            Contactez-nous
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className=" lists-navbare px-2 pt-2 pb-4 space-y-2 sm:px-3">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">
            Accueil
          </Link>
          <Link to="/about_us" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">
            AboutUs
          </Link>
          <Link to="/A_Propos_de_Nous" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">
            À propos de nous
          </Link>
          <Link to="/Contacter_Nous" className="text-gray-600 hover:text-indigo-600 font-medium transition duration-300">
            Contactez-nous
          </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbare;