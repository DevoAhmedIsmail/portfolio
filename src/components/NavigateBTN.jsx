import React from "react";

const NavigateBTN = ({ TO, text }) => {
  return (
    <div className={`absolute ${TO}-1/3 right-10 rotate-90`}>
      <a href={`#${text}`} className="uppercase">
        {TO === "top" && <i className="fa-solid fa-arrow-left mr-2"></i>}
        To {text}
        {TO === "bottom" && <i className="fa-solid fa-arrow-right ml-2"></i>}
      </a>
    </div>
  );
};

export default NavigateBTN;
