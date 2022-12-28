import React, { useEffect } from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import jsonLogo from "../assets/json.png";
import tailwindLogo from "../assets/tailwind.png";
import bootstrapLogo from "../assets/bootstrap.jfif";
import reactLogo from "../assets/react.png";
import reactRouterLogo from "../assets/react-router.png";
import reduxLogo from "../assets/redux.png";
import apiLogo from "../assets/api.png";
import axiosLogo from "../assets/axios.png";
// import TagCloud from "TagCloud";

const Skills = () => {
  // useEffect(() => {
  //   return () => {
  //     const container = ".tagcloud";
  //     const texts = [
  //       "HTML",
  //       "CSS",
  //       "JAVASCRIPT",
  //       "React",
  //       "Redux",
  //       "Toolkit",
  //       "API",
  //       "ES6",
  //     ];
  //     const options = { radius: 200, keep: true };

  //     TagCloud(container, texts, options);
  //   };
  // }, []);

  return (
    <section
      className="h-screen relative pt-20 lg:pt-32 overflow-hidden"
      id="skills"
    >
      <div className="text-center">
        <span className="main-header text-xl border-b-4 border-teal-600 pb-3">
          My Skills
        </span>
      </div>

      {/* Skills */}
      {/* <div className="mt-10">
        <span className="tagcloud"></span>
      </div> */}

      <div className=" mt-10 mx-12 py-5 lg:mx-32 h-3/4 flex flex-col  items-center gap-5 overflow-y-scroll ">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-40 bg-slate-50 py-2 rounded">
            <img
              src={htmlLogo}
              alt="html"
              className="w-full h-48  rounded object-contain"
            />
          </div>
          <div className="w-40 bg-slate-50 py-2 px-1 rounded">
            <img
              src={cssLogo}
              alt="html"
              className="w-full h-48  rounded  object-contain"
            />
          </div>
          <div className="w-40 bg-slate-50 py-2 rounded">
            <img
              src={jsLogo}
              alt="html"
              className="w-full h-48  rounded object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-40 bg-slate-50 py-2 rounded">
            <img src={jsonLogo} alt="html" className="w-full h-48  rounded  object-contain" />
          </div>
          <div className="w-40 bg-slate-50 rounded">
            <img
              src={tailwindLogo}
              alt="html"
              className="w-full h-48  rounded  object-contain"
            />
          </div>
          <div className="w-40 py-2 rounded" style={{backgroundColor: '#573c7f'}}>
            <img
              src={bootstrapLogo}
              alt="html"
              className="w-full h-48  rounded"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-40 bg-slate-50 rounded">
            <img src={reactLogo} alt="html" className="w-full h-48  rounded object-contain" />
          </div>
          <div className="w-40 bg-slate-50 py-2 px-2 rounded">
            <img
              src={reactRouterLogo}
              alt="html"
              className="w-full h-48  rounded object-contain"
            />
          </div>
          <div className="w-40 bg-slate-50 py-2 rounded">
            <img src={reduxLogo} alt="html" className="w-full h-48  rounded object-contain" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-40">
            <img src={apiLogo} alt="html" className="w-full h-48  rounded" />
          </div>
          <div className="w-40">
            <img src={axiosLogo} alt="html" className="w-full h-48  rounded" />
          </div>
        </div>
      </div>

      {/* btn page Up */}
      <div className="group absolute top-28 -right-4 lg:top-1/3 lg:right-10 rotate-90">
        <a href="#about" className="text-teal-300">
          <i className="fa-solid fa-arrow-left arrow-up arrow-up animate-pulse  mr-2 group-hover:text-teal-600 group-hover:-translate-x-3 group-hover:scale-x-125 transition"></i>{" "}
          To About
        </a>
      </div>

      {/* btn page down */}
      <div className="group absolute bottom-32 -right-4 lg:bottom-1/3 lg:right-10 rotate-90">
        <a href="#portfolio" className="text-teal-300">
          To Portfolio
          <i className="fa-solid fa-arrow-right arrow-down animate-pulse ml-2 group-hover:text-teal-600 group-hover:translate-x-3 group-hover:scale-x-125 transition"></i>
        </a>
      </div>
    </section>
  );
};

export default Skills;
