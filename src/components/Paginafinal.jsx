"use client";
import { FaArrowCircleUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Sendemail from "./Sendemail";

const Paginafinal = () => {

  const scrollToSection = (id) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div id="contato" className="h-screen flex flex-col justify-center">
      <h1 className="text-center text-5xl font-serif pt-24 pb-8">Contact</h1>
      <div className="flex-grow max-w-6xl mx-auto md:px-8">
        <div className="md:flex md:justify-between md:space-x-2 font-sans">
          <div className="md:flex-1 md:space-y-5 text-center lg:text-left">
            <div className="space-y-2 w-5/6 mx-auto">
              <div className="lg:text-left">
                <h2 className="text-semibold text-3xl md:pb-4">
                  Unleash Your Potential
                </h2>
                <p className="text-lg w-full mx-auto">
                  Liked my work? Feel free to get in touch! I'm always excited
                  to collaborate on new projects and opportunities. Whether you
                  have an interesting idea or need assistance bringing your
                  visions to life, I'm here to help. Let's work together to
                  create something amazing!
                </p>
              </div>
              <div className="flex space-x-6 items-center mx-auto md:justify-center lg:justify-normal w-full pt-6 text-2xl justify-center">
                <h3 className="underline">Follow me</h3>
                <a
                  href="http://github.com/alyssonrafael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-900 dark:hover:text-purple-800 transition-colors duration-300 text-4xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/alysson-rafael-485540290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-900 dark:hover:text-purple-800 transition-colors duration-300 text-4xl"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="lg:flex align-bottom mx-auto hidden md:widden pt-4">
                <a
                  href="#pag1"
                  onClick={(e) => {e.preventDefault(), scrollToSection("pag1")}}
                  className="text-4xl hover:text-yellow-800 dark:hover:text-purple-600 transition-colors duration-300"
                >
                  <FaArrowCircleUp />
                </a>
              </div>
            </div>
          </div>

          <div className="md:flex-1 w-full md:w-auto items-center justify-center p-12 md:pt-0 text-center">
            <div className="flex flex-col items-center justify-center md:flex-row pb-8">
              <MdEmail className="text-5xl lg:mr-16 md:mr-10" />
              <div className="text-center">
                <h1 className="underline lg:text-lg text-base">
                  Send-me an email: <br />
                  <span className="text-xs">
                    Directed to: alyssonrafael11@gmail.com
                  </span>
                </h1>
              </div>
            </div>
            <div>
              <Sendemail />
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-8">
        <p>© 2024 by Alysson Rafael. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Paginafinal;
