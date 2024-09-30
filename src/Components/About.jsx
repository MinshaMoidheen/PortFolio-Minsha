import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        As a BCA graduate with a solid foundation in computer science, I have dedicated the past three years to mastering Flutter development at Ralfiz Technologies. My experience there has honed my skills in creating efficient, high-performance mobile applications, and has provided me with a deep understanding of the complete app development lifecycle.
        <br />

Currently, I am expanding my expertise by interning in the MERN stack at Luminar Technologies. This internship is enabling me to gain hands-on experience with MongoDB, Express.js, React, and Node.js, further diversifying my technical skill set and enhancing my ability to build comprehensive, full-stack web applications.



Passionate about staying at the forefront of technology, I am eager to continue growing and contributing to innovative projects. Whether it’s developing seamless mobile experiences or robust web solutions, I am driven by the challenge of creating user-centric applications that solve real-world problems.


        </p>

        <br />

        
      </div>
    </div>
  );
};

export default About;