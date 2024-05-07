"use client"
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar2 = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
      // Fecha o menu dropdown se estiver aberto em dispositivos móveis
      setIsClick(false);
    }
  };

  return (
    <nav className="bg-transparent text-gray-800 dark:text-white text-1xl lg:text-2xl fixed top-0 w-full z-50">
      <div className=" mx-auto px-4 sm:px6 lg:px-12 backdrop-filter backdrop-blur-sm">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-auto">
              <a href="#pag1" onClick={() => scrollToSection("pag1")} className="text-4xl hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300">
                &lt;/&gt;
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center justify-center space-x-6">
              <a href="#pag1" onClick={() => scrollToSection("pag1")} className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300">Home</a>
              <a href="#how-iam" onClick={() => scrollToSection("how-iam")} className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300">Sobre</a>
              <a href="#Technologies " onClick={() => scrollToSection("tech")} className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300">Technologies </a>
              <a href="#projetos" onClick={() => scrollToSection("projetos")} className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300">Projetos</a>
              <a href="#contato" onClick={() => scrollToSection("contato")} className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300">Contato</a>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeSwitcher />
            <button
              className=" md:hidden inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-800 dark:hover:text-purple-600 focus:outline-none focus:ring-inset focus:ring-white transition-colors duration-300"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Adicionando a classe de desfoque condicional */}
      <div className={`${isClick ? 'backdrop-blur-sm' : ''} md:hidden mx-2`}>
        {isClick && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-2 border-black dark:border-white">
            <a href="#pag1" onClick={() => scrollToSection("pag1")} className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg">Home</a>
            <a href="#how-iam" onClick={() => scrollToSection("how-iam")} className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg">Sobre</a>
            <a href="#Technologies " onClick={() => scrollToSection("tech")} className="hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300">Technologies </a>
            <a href="#projetos" onClick={() => scrollToSection("projetos")} className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg">Projetos</a>
            <a href="#contato" onClick={() => scrollToSection("contato")} className="pl-1 block hover:bg-gray-300 hover:text-yellow-800 dark:hover:bg-gray-900 dark:hover:text-purple-600 rounded-lg">Contato</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;