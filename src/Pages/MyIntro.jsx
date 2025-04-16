import React from "react";
import image from "../assets/Images/profilephoto.png";
import { Link } from "react-router-dom";

export const MyIntro = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl py-12 gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl leading-tight mb-6">
            Hey, this is Bhargavi <br />I learn to build the future of
            Technology.
          </h1>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/projects"
              className="border border-black px-8 py-2 rounded-full text-lg font-medium transition-transform duration-300 ease-out hover:scale-105"
            >
              Wanna know my work?
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Bhargavi"
            className="w-64 md:w-80 rounded-full shadow-xl border-4 border-indigo-100"
          />
        </div>
      </div>
    </div>
  );
};
