import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const Skills = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "React",
        "Redux",
        "Toolkit",
        "API",
        "ES6",
      ];
      const options = { radius: 200, keep: true };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div
      className="h-screen relative pt-20 lg:pt-32 overflow-hidden"
      id="skills"
    >
      <div className="text-center">
        <span className="main-header text-xl border-b-4 border-teal-600 pb-3">My Skills</span>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <span className="tagcloud"></span>
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
    </div>
  );
};

export default Skills;
