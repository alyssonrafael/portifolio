"use client";
import { useTheme } from "next-themes";
import Av1 from "./av1";
import Av2 from "./Av2";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaArrowCircleDown,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Pag1 = () => {
  const { theme } = useTheme();

  const getAvatarComponent = () => {
    return theme === "dark" ? <Av2 /> : <Av1 />;
  };

  return (
    <div id="pag1"
      className={`text-${
        theme === "light" ? "gray-800" : "white"
      } text-1xl md:text-2xl flex justify-center items-center h-screen  my-16 md:my-0`}
    >
      <div className="max-w-6xl mx-auto md:px-8">
        <div className="md:flex md:justify-between md:space-x-2 font-sans ">
          <div className="md:flex-1 md:space-y-5 text-center lg:text-left">
            <div className="space-y-2 w-5/6 mx-auto">
              <div className="font-serif md:text-5xl transition-opacity duration-500 text-3xl items-center pt-16">
                <h1 className="md:text-5xl">HI there, I am Alysson</h1>
                <TypeAnimation
                  sequence={[
                    "Web develop",
                    1000,
                    "Dreamer",
                    1000,
                    "Adventurer",
                    1000,
                    "This is my Portfolio!",
                    3000,
                  ]}
                  wrapper="h1"
                  speed={1}
                  repeat={Infinity}
                />
              </div>
              <p className="pt-3">"Navigating the Imagination"</p>
              <div className="lg:text-left">
                <h2 className="font-serif">My Work</h2>
                <p className="text-lg w-full mx-auto pt-2">
                  "A programmer passionate about coding, sees in code his purest
                  form of expression. Each line is an opportunity to explore,
                  each challenge a chance to learn."
                </p>
              </div>
              <div className="w-full mx-auto">
                <a
                  href="/"
                  className="underline cursor-pointer inline-flex items-center transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                >
                  Navigate to projects{" "}
                  <FaArrowRight className="pl-3 text-3xl w-8 h-8" />
                </a>
              </div>
              <div className="md:flex space-x-6 items-center mx-auto hidden md:justify-center lg:justify-normal  w-full  ">
                <h3 className="underline">Follow me</h3>
                <a
                  href="http://github.com/alyssonrafael"
                  target="_blank"
                  className="hover:text-yellow-900 dark:hover:text-purple-800 transition-colors duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/alysson-rafael-485540290/"
                  target="_blank"
                  className="hover:text-yellow-900 dark:hover:text-purple-800 transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="lg:flex align-bottom mx-auto hidden md:widden">
                <a href="#">
                  {" "}
                  <FaArrowCircleDown className="text-3xl w-8 h-8 hover:text-yellow-900 dark:hover:text-purple-800 transition-transform duration-300 ease-in-out transform hover:translate-y-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:flex-1 w-full md:w-auto items-center justify-center flex p-12 md:pt-0 ">
            <div className="transition-transform duration-500 ease-in-out transform hover:scale-110">
              {getAvatarComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pag1;
