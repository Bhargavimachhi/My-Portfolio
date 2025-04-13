import React from "react";
import image from "../assets/Images/profilephoto.png";

export const MyIntro = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-light mb-6 ">
            Hey, this is Bhargavi <br /> I learn to build future of Technology.
          </h1>
          <button className="mt-4 border border-black px-6 py-3 rounded-full text-lg">
            Wanna know my work?
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:mb-0">
          <img
            src={image}
            alt="image"
            className="w-64 md:w-80 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
