"use client"

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const HowIam = () => {
  const { theme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState("/images/bgWhite.png");

  useEffect(() => {
    // Define a imagem de fundo com base no tema
    if (theme === "light") {
      setBackgroundImage("/images/bgWhite.png");
    } else {
      setBackgroundImage("/images/bgDark.png");
    }
  }, [theme]);

  return (
    <div id="how-iam" className="md:py-0 py-8">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="container mx-auto px-4 flex-col text-gray-200">
          <h1 className="text-4xl font-bold mb-12 text-center font-serif md:text-6xl ">
            HOW I am ???
          </h1>
          <p className="text-medium text-center md:px-16 md:text-2xl lg:mx-12 ">
            My name is Alysson Rafael, a Computer Science student in my fifth
            term, driven by an insatiable curiosity and a commitment to
            continuous learning, especially in the dynamic field of web
            development. I am deeply passionate about both front-end and
            back-end development, relishing the opportunity to play with design
            elements. Not only did I design this page using Figma, but I also
            took charge of the entire project implementation, ensuring that
            every line of code reflects my dedication to excellence and
            attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowIam;
