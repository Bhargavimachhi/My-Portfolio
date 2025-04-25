import React from "react";
import {image} from "@/assets/data/myIntroProfileImage";
import { Link } from "react-router-dom";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export const MyIntro = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl py-12 gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            <div>
              Hey, This is{"  "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(17,_17,_70,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-violet-500 via-blue-500 to-emerald-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className=""> Bhargavi</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 py-4">
                  <span className=""> Bhargavi</span>
                </div>
              </div>
            </div>

            <div>I learn to build the future of Technology.</div>
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

        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
          {/* <div className="md:w-1/2 flex justify-center"> */}
          <img
            src={image}
            alt="Bhargavi"
            className="w-64 md:w-80 rounded-[22px]"
          />
          {/* </div> */}
        </BackgroundGradient>
      </div>
    </div>
  );
};
