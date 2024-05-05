"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar2 = () => {
    
  const [isClick, setisClick] = useState(false);

  useEffect(()=>{
    setisClick(true)
  },[])

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-trasparent text-gray-800 dark:text-white text-1xl lg:text-2xl ">
        <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-4xl hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300">
                  &lt;/&gt;
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-6">
                <a
                  href="/"
                  className=" hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="  hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
                >
                  Sobre
                </a>
                <a
                  href="/"
                  className="  hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
                >
                  Projetos
                </a>
                <a
                  href="/"
                  className="  hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
                >
                  Contato
                </a>

              </div>
            </div>
              <div className="hidden md:flex  hover:text-yellow-800 hover:dark:text-purple-600 px-5 transition-colors duration-300">
                <ThemeSwitcher />
              </div>
          <div className="md:hidden flex items-center">
              <div className=" hover:text-yellow-800 hover:dark:text-purple-600 transition-colors duration-300">
                <ThemeSwitcher />
              </div>
            <button
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-800 dark:hover:text-purple-600 focus:outline-none focus:ring-inset focus:ring-white transition-colors duration-300"
              onClick={toggleNavbar}
              >
              {isClick ? (
                  <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
              ) : (
                  <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
              )}
            </button>
              </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden mx-2">
            <div className="px-2 pt-2 pb-3 spa-y-1 sm:px-3 border-2 border-black dark:border-white">
              <a
                href="/"
                className=" pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
              >
                Home
              </a>
              <a
                href="/"
                className=" pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
              >
                Sobre
              </a>
              <a
                href="/"
                className=" pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
              >
                Projetos
              </a>
              <a
                href="/"
                className=" pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar2;
