import React from "react";
import HeroImage from "../assets/heroImage .jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <br /><br /><br /><br /><br />
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-5">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I'm Minsha, a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. With a BCA degree and hands-on experience in Flutter, MERN stack, and web development, I specialize in building responsive, dynamic, and user-friendly web applications. I have a knack for problem-solving and a deep understanding of how to bring ideas to life through technology.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br />

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            
            style={{borderRadius:'80%',marginTop:"220px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;