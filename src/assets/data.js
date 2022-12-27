const ecoShop = require("./ecoShop.PNG");
const box = require("./Box.PNG");
const movies = require("./Movies.png");

export const websites = [
  {
    id: 1,
    name: "Eco Shop",
    url: "https://github.com/DevoAhmedIsmail/eco-shop",
    description: "Eco Shop is a free, open-source e-commerce platform built on",
    image: `${ecoShop}`,
    tags: ["HTML", "Css", "Javascript", "React", "Redux-toolkit", "Axios"],
  },
  {
    id: 3,
    name: "Movies",
    url: "/",
    description: "A website for movies ",
    image: `${movies}`,
    tags: ["HTML", "Css", "Javascript",'Api'],
  },
  {
    id: 2,
    name: "Kick Boxing",
    url: "/",
    description: "A landing page for kick boxing",
    image: `${box}`,
    tags: ["HTML", "Css"],
  },
  
  
];
