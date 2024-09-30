import React from "react";
import bootsrap from "../assets/portfolio/boostrap.jpeg";
import netflix from "../assets/portfolio/netflix.jpeg";
import gsap from "../assets/portfolio/gsap.jpeg";
import parallax from "../assets/portfolio/parallax.jpeg";
import bmi from "../assets/portfolio/bmi.jpeg";
import discount from "../assets/portfolio/discount.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bootsrap,
        demo:'https://restooburger.netlify.app/',
      code :'https://github.com/MinshaMoidheen/Burger_'
    },
    {
      id: 2,
      src: netflix,
        demo:'https://cloneeeflix.netlify.app/',
      code :'https://github.com/MinshaMoidheen/NetFlix'
    },
    {
      id: 3,
      src: gsap,
        demo:'https://gsaport.netlify.app/',
      code :'https://github.com/MinshaMoidheen/gsap'
    },
    {
      id: 4,
      src: parallax,
        demo:'https://precious-croquembouche-b96248.netlify.app/',
      code :'https://github.com/MinshaMoidheen/parallax'
    },
    {
      id: 5,
      src: bmi,
        demo:'https://bmicalclsion.netlify.app/',
      code :'https://github.com/MinshaMoidheen/BMI'
    },
   
    {
      id: 7,
      src: reactWeather,
      demo:'https://weather-neww-app.netlify.app/',
      code :'https://github.com/MinshaMoidheen/weather-app'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

              <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center text-white "
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center text-white "
                >
                  Code
                </a>
              
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
    
  );
};

export default Portfolio;