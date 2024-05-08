"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const data = [
    {
      id: 1,
      nome: "COSTs",
      review: "Small Project for Project Expense Management Made with React js",
      img: "/images/costs.png",
      link: "https://github.com/alyssonrafael/COSTs",
    },
    {
      id: 2,
      nome: "To-do-List",
      review: `The "ToDo List" application is a simple tool designed to help users manage their tasks efficiently.`,
      img: "/images/to-do.png",
      link: "https://github.com/alyssonrafael/to-do-list-Nodejs",
    },
    {
      id: 3,
      nome: "Data frame python analytics",
      review: "This Python-based data analysis project aims to streamline the manipulation and presentation of large datasets for easy interpretation.",
      img: "/images/graficos.jpg",
      link: "https://github.com/alyssonrafael/projeto_DEV.rapido.python",
    },
    {
      id: 4,
      nome: "Iot-office-security-system",
      review: "A WiFi-controlled door locking system, built using a microcontroller and Python.",
      img: "/images/iot.png",
      link: "https://github.com/alyssonrafael/Iot-office-security-system",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="projetos" className="m-auto max-w-full-lg pt-16 px-4 min-h-screen">
      <div className="w-full">
        <div className="flex justify-center mb-8">
          <div className="text-center lg:text-5xl font-serif text-4xl">
            My Projects
          </div>
        </div>
        <div className="my-12 mx-10">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                className="bg-white dark:bg-gray-900  text-black dark:text-white rounded-md hover:rounded-none my-6 flex "
                key={d.id}
              >
                <div className=" font-serif p-4 text-sm font-semibold lg:text-xl">
                  <p>{d.nome.toUpperCase()}</p>
                </div>

                <div className="rounded-t-xl w-full flex justify-center items-center">
                  <img
                    src={d.img}
                    alt=""
                    className="h-[200px] w-[410px] rounded-xl overflow-hidden p-4 "
                  />
                </div>

                <div className="flex flex-col justify-center p-4 font-sans h-[80px] max-h-[80px] overflow-y-auto mt-4">
                  <p className="pt-4">{d.review}</p>
                </div>
                {/* Button */}
                <div className="p-4 flex align-bottom">
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden bg-blue-600 dark:bg-gray-950 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
                  >
                    <span class="z-40">Visit Project</span>
                    <svg
                      class="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 dark:bg-purple-500 group-hover:translate-x-[50%] z-20 duration-1000"></div>
                  </a>
                </div>

              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
