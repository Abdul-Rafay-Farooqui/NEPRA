"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex bg-[#002147] sticky top-0 z-50 justify-between items-center px-4 py-3 rubik">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-12 md:h-[51px] object-cover"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden xl:flex items-center">
        <ul className="flex text-[16.5px] gap-6 lg:gap-8 text-white font-medium">
          <li>
            <a href="/" className="hover:text-blue-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-blue-300 transition-colors">
              Products +
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-blue-300 transition-colors">
              Services +
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-blue-300 transition-colors">
              Pricing +
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-blue-300 transition-colors">
              Activities +
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-blue-300 transition-colors">
              About Us +
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Login Button */}
      <div className="hidden xl:block">
        <button className="bg-transparent text-white text-sm rounded-md border-white px-4 py-2 border-[1px] hover:bg-white hover:text-[#002147] transition-colors">
          Login to CMS
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#002147] xl:hidden border-t border-gray-700">
          <div className="px-4 py-4 space-y-4">
            <ul className="space-y-3 text-white text-center font-medium">
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-blue-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-blue-300 transition-colors"
                >
                  Products +
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-blue-300 transition-colors"
                >
                  Services +
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-blue-300 transition-colors"
                >
                  Pricing +
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-blue-300 transition-colors"
                >
                  Activities +
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-blue-300 transition-colors"
                >
                  About Us +
                </a>
              </li>
            </ul>
            <div className="pt-4 border-t border-gray-700 justify-items-center">
              <button className="w-full md:w-[50%] md:ml-[25%]  bg-transparent text-white text-sm rounded-md border-white px-4 py-2 border-[1px] hover:bg-white hover:text-[#002147] transition-colors">
                Login to CMS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
