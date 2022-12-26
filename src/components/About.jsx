import React from "react";
import SocialLinks from "./SocialLinks";

import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="h-screen relative" id="about">
      {/* Content */}
      <div className="about-content flex flex-col lg:flex-row gap-6 px-16 md:px-32 pt-32 md:pt-40">
        {/* left */}
        <div className="lg:w-1/2  mx-auto">
          <img
            src={profilePic}
            alt="Ahmed ismail"
            className="shadow-xl shadow-slate-500 rounded-full lg:rounded-lg w-96 lg:w-3/4"
          />
        </div>
        {/* Right */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center mt-10 lg:mt-0">
          <p className="text-4xl lg:text-5xl font-bold font-sans leading-snug lg:leading-relaxed">
            Hi, <br className="hidden lg:block" />
            I'm <br className="block lg:hidden" />{" "}
            <span className="transition cursor-pointer text-teal-600">Ahmed Ismail</span>,<br />
            Front-End Developer
          </p>
          <p className="mt-2 text-slate-500">React Developer</p>
        </div>
      </div>
      {/* ./Content */}

      {/* Linkes on the left */}
      <SocialLinks />

      {/* btn page down */}
      <div className="group absolute bottom-1/3 -right-5 md:right-10 rotate-90">
        <a href="#skills" className="font-bold text-teal-300">
          To Skills
          <i className="fa-solid fa-arrow-right font-bold text-lg arrow-down ml-2 animate-pulse group-hover:text-teal-600 group-hover:translate-x-3 group-hover:scale-x-125 transition"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
