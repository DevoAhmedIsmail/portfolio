import React from "react";

const Contact = () => {
  return (
    <section
      className="h-screen relative pt-20 lg:pt-32 overflow-hidden"
      id="contact"
    >
      <div className="contact-content px-16 md:px-32 pt-16 lg:py-10  flex flex-col gap-5 lg:flex-row">
        <div className="w-full lg:w-1/2 text-center">
          <span className="text-4xl lg:text-5xl main-header border-b-2 pb-2 border-teal-600 tracking-widest">
            Contact Me
          </span>
          {/* Contact info */}
          <div className="flex flex-col gap-5 mt-8 lg:mt-16 lg:px-12 text-lg">
            <div className="flex flex-row items-center text-start ">
              <i className="fa-regular fa-envelope mr-5 lg:mr-16 text-2xl"></i>
              <p>devo.ahmedismail@gmail.com</p>
            </div>
            <div className="flex flex-row items-center ">
              <i className="fa-solid fa-phone  mr-5 lg:mr-16 text-2xl"></i>
              <p>+201092071919</p>
            </div>
            <div className="flex flex-row items-center ">
              <i className="fa-solid fa-location-dot  mr-5 lg:mr-16 text-2xl"></i>
              <p>Alexandria, Egypt</p>
            </div>
          </div>
          {/* ./Contact-info */}
        </div>
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <div className="flex flex-col gap-7">
            <input
              className="w-full py-2 px-4 rounded-full bg-slate-700"
              placeholder="E-mail"
            />
            <input
              className="w-full py-2 px-4 rounded-full bg-slate-700"
              placeholder="Name"
            />
            <textarea
              className="w-full py-2 px-4 rounded-lg bg-slate-700"
              placeholder="Message"
              rows={4}
            ></textarea>
          </div>
        </div>
      </div>

      {/* btn page Up */}
      <div className="group absolute top-28 -right-4 lg:top-1/3 lg:right-10 rotate-90">
        <a href="#portfolio" className="text-teal-300">
          <i className="fa-solid fa-arrow-left arrow-up arrow-up animate-pulse  mr-2 group-hover:text-teal-600 group-hover:-translate-x-3 group-hover:scale-x-125 transition"></i>{" "}
          To Portfolio
        </a>
      </div>
    </section>
  );
};

export default Contact;
