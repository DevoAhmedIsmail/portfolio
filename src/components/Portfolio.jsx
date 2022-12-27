import React from "react";
import { websites } from "../assets/data";

const Portfolio = () => {
  return (
    <section className="h-screen relative pt-20 overflow-hidden" id="portfolio">
      <div className="text-center">
        <span className="main-header text-xl border-b-4 border-teal-600 pb-3">
          Portfolio
        </span>
      </div>
      {/* Content */}
      <div className="portfolio-content flex flex-col gap-6 px-12 md:px-32 py-16 lg:py-8 ">
        <div className=" w-full h-96 overflow-auto flex flex-row gap-10">
          {websites.map((website) => (
            <div
              className="flex flex-col justify-between gap-6"
              key={website.id}
            >
              {/* Card */}
              <div className="w-72 h-full py-10 rounded-xl">
                <div className="card-item w-full h-full rounded-xl ">
                  <a href={website.url} rel="noreferrer" target="_blank">
                    <img
                      src={website.image}
                      alt={website.name}
                      className="h-full w-full rounded-xl shadow-lg shadow-slate-600"
                    />
                    <div className="overlay overflow-hidden p-3 rounded-xl">
                      <i className="fa-solid fa-eye text-3xl text-teal-400 z-20 opacity-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                      <div className="flex flex-wrap gap-2 ">
                        {website.tags.map((tag, index) => (
                          <span className="border p-1 text-sm " key={index}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Scroll Icons */}
        <div className="scroll-icons mx-auto">
          <i className="fa-solid fa-rotate-left text-xl mr-5 swipeLeft animate-pulse"></i>
          Swipe To scroll
          <i className="fa-solid fa-rotate-right text-xl ml-5 swipeRight transition animate-pulse"></i>
        </div>
      </div>
      {/* ./Content */}

      {/* btn page Up */}
      <div className="group absolute top-28 -right-4 lg:top-1/3 lg:right-10 rotate-90">
        <a href="#skills" className="text-teal-300">
          <i className="fa-solid fa-arrow-left arrow-up animate-pulse mr-2 group-hover:text-teal-600 group-hover:-translate-x-3 group-hover:scale-x-125 transition"></i>{" "}
          To Skills
        </a>
      </div>
      {/* btn page down */}
      <div className="group absolute bottom-32 -right-4 lg:bottom-1/3 lg:right-10 rotate-90">
        <a href="#contact" className="text-teal-300">
          To Contact
          <i className="fa-solid fa-arrow-right arrow-down animate-pulse ml-2 group-hover:text-teal-600 group-hover:translate-x-3 group-hover:scale-x-125 transition"></i>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
