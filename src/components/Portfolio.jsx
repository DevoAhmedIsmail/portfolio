import React from "react";
import { websites } from "../assets/data";

const Portfolio = () => {
  return (
    <div
      className="h-screen relative pt-20 lg:pt-32 overflow-hidden"
      id="portfolio"
    >
      <div className="text-center">
        <span className="main-header text-xl border-b-4 border-teal-600 pb-3">
          Portfolio
        </span>
      </div>
      {/* Content */}
      <div className="portfolio-content flex flex-col lg:flex-row gap-6 px-16 md:px-32 py-16 lg:py-10 ">
        <div className=" w-full h-96 overflow-auto flex flex-row gap-10">
          {websites.map((website) => (
            <div className="flex flex-col justify-between gap-6" key={website.id}>
              {/* Card */}
              <div className="card-item border w-48 h-1/2">
                <a href={website.url} rel="noreferrer" target='_blank'>
                  <img src={website.image} alt={website.name} className="h-full w-full" />
                  <div className="overlay relative flex justify-center items-center overflow-hidden">
                    <i className="fa-solid fa-eye text-3xl text-slate-700 z-20 opacity-40"></i>
                    <p className="absolute top-1 left-1">{website.description}</p>
                  </div>
                </a>
              </div>
              <div className="card-item  w-48 h-1/2">
                <h4 className="text-xl font-semibold mb-3">{website.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {
                    website.tags.map((tag,index)=>(
                      <span className="border p-1 text-sm" key={index}>{tag}</span>
                    ))
                  }
                  
                </div>
              </div>
            </div>
          ))}


         
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
    </div>
  );
};

export default Portfolio;
