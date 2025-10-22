import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = true;
  return (
    <nav className="navbar bg-gradient-to-r from-blue-100 via-white to-cyan-100 shadow-xl sticky top-0 z-50 border-b-2 border-orange-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex-1">
            <Link to="/" className="">
              <img
                className="w-20 md:w-30 xl:w-40  drop-shadow-lg"
                src={logo}
                alt="WarmPaws"
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex justify-center items-center space-x-8">
            <div className="flex justify-center items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-orange-100">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-xl font-bold px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-xl font-bold px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  }`
                }
              >
                Services
              </NavLink>

              {user ? (
                <NavLink
                  to="/auth"
                  className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-orange-100 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white"
                >
                  <h2 className="text-xl font-bold text-gray-800 hidden sm:block">
                    My profile
                  </h2>
                  <div className="w-12 h-12 rounded-full border-2 border-orange-300 overflow-hidden shadow-md">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      alt="Profile"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </NavLink>
              ) : (
                <NavLink
                  to="/services"
                  className={`text-xl font-bold px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 bg-blue-600 text-white`}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-2xl mt-4 p-4 shadow-lg border border-orange-100">
            <div className="flex flex-col space-y-3">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold px-4 py-3 rounded-xl transition-all duration-300 text-center ${
                    isActive
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold px-4 py-3 rounded-xl transition-all duration-300 text-center ${
                    isActive
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                  }`
                }
              >
                Services
              </NavLink>

              <div className="border-t border-orange-200 pt-3 mt-2">
                <NavLink
                  to="/auth"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-orange-50 text-gray-800 hover:bg-orange-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-orange-300 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Profile"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                  <span className="font-bold">My Profile</span>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;