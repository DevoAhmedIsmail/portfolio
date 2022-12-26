import React from "react";

const SocialLinks = () => {
  return (
    <div className="absolute bottom-20 left-4 lg:bottom-1/3 lg:left-5 flex flex-col gap-7">
      <a href="https://www.facebook.com/profile.php?id=100011471287921" rel="noreferrer" target='_blank'>
        <i className="fa-brands fa-facebook text-lg transition hover:scale-125 hover:text-teal-600"></i>
      </a>
      <a href="https://github.com/DevoAhmedIsmail" rel="noreferrer" target='_blank'>
        <i className="fa-brands fa-github text-lg transition hover:scale-125 hover:text-teal-600"></i>
      </a>
      <a href="https://www.linkedin.com/in/devo-ahmed-ismail" rel="noreferrer" target='_blank'>
        <i className="fa-brands fa-linkedin text-lg transition hover:scale-125 hover:text-teal-600"></i>
      </a>
      <a href="https://wa.me/+201276839268" rel="noreferrer" target='_blank'>
        <i className="fa-brands fa-whatsapp text-lg transition hover:scale-125 hover:text-teal-600"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
