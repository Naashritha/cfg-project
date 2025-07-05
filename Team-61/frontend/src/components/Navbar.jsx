import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo and Foundation Name */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img 
                src="/diksha.jpg" 
                alt="Diksha Foundation Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
            </div>
            <div className="text-white">
              <h1 className="text-lg sm:text-xl font-bold leading-tight">DIKSHA</h1>
              <h2 className="text-lg sm:text-xl font-bold leading-tight">FOUNDATION</h2>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-white hover:text-blue-300 font-medium transition-colors">
              Home
            </Link>
            <Link to="/volunteer" className="text-white hover:text-blue-300 font-medium transition-colors">
              Volunteering
            </Link>
            <Link to="/login" className="text-white hover:text-blue-300 font-medium transition-colors">
              Login
            </Link>
          </div>

          {/* Donate Button */}
          <div className="hidden sm:flex items-center">
            <a 
              href="https://dikshafoundation.org/donate/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              DONATE NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-white hover:text-blue-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="lg:hidden bg-black bg-opacity-90">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="text-white hover:text-blue-300 block px-3 py-2 font-medium">Home</Link>
          <Link to="/volunteer" className="text-white hover:text-blue-300 block px-3 py-2 font-medium">Volunteering</Link>
          <Link to="/login" className="text-white hover:text-blue-300 block px-3 py-2 font-medium">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;