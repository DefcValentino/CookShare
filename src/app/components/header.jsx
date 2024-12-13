
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Ensure Heroicons is installed
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed py-5 top-0 w-full bg-black text-white md:fixed md:top-0 md:w-full md:flex md:justify-between md:bg-black md:text-white md:py-5 md:px-16 z-50">
      <h1 className="text-lg font-bold flex items-center ">CookShare</h1>

      {/* Menu Icon */}
      <button
        className="md:hidden focus:outline-none absolute top-4 right-4"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <XMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white" />
        )}
      </button>

      {/* Menu */}
      <div
        className={`space-y-6 md:space-y-0 right-0 w-full md:w-auto h-[50vh] md:h-[50px] absolute top-[4.2rem] md:top-0 md:relative bg-gray-400 md:flex md:bg-black text-center md:justify-between transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } md:opacity-100 md:max-h-full`}
      >
        {/* List Items */}
        <ul className="font-bold mt-8 md:mt-0 space-y-6 md:space-y-0 md:flex md:space-x-12 md:items-center md:mr-24">
          <li>
            <a href="#blog" className="hover:underline">
               Home
            </a>
          </li>
          
          <li className="hover:underline">
              <Link  href="#about">About</Link>
          </li>
          {/* <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li> */}
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex mx-auto w-[100px] md:w-full flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <button className="btn-primary">SIGN UP</button>
          <button className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded-full">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
