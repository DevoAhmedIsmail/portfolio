const ecoShop = require("./ecoShop.PNG");
const box = require("./Box.PNG");
const movies = require("./Movies.png");
const realHome = require("./realHome.PNG");
const bondi = require("./Bondi.PNG");
const gusto = require("./gusto.PNG");

export const websites = [
  {
    id: 1,
    name: "Eco Shop",
    url: "https://github.com/DevoAhmedIsmail/eco-shop",
    description: "Eco Shop is a free, open-source e-commerce platform built on",
    image: `${ecoShop}`,
    tags: ["HTML", "Css", "Javascript", "React", "Redux-toolkit", "Axios","Responsive"],
  },
  {
    id: 3,
    name: "Movies",
    url: "https://github.com/DevoAhmedIsmail/moviesReview",
    description: "A website for movies ",
    image: `${movies}`,
    tags: ["HTML", "Css", "Javascript",'Api',"Responsive"],
  },
  {
    id: 2,
    name: "Kick Boxing",
    url: "/",
    description: "A landing page for kick boxing",
    image: `${box}`,
    tags: ["HTML", "Css"],
  },
  {
    id: 4,
    name: "Real Home",
    url: "https://github.com/DevoAhmedIsmail/RealStateLandingPage",
    description: "A landing page for Real State",
    image: `${realHome}`,
    tags: ["HTML", "Css"],
  },
  {
    id: 5,
    name: "Bondi",
    url: "https://github.com/DevoAhmedIsmail/Bondi",
    description: "A landing page",
    image: `${bondi}`,
    tags: ["HTML", "Css","Bootstrap 5","Responsive"],
  },
  {
    id: 6,
    name: "Gusto",
    url: "https://github.com/DevoAhmedIsmail/Gusto",
    description: "A landing page for resturant",
    image: `${gusto}`,
    tags: ["HTML", "Css","TailWind","Swiper","Responsive"],
  },
  
];
