import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../assets/data/links";

export const Footer = () => {
  return (
    <nav className="w-full flex flex-col sm:flex-row items-center justify-between px-5 pt-6 mb-5 space-y-4 sm:space-y-0">
      <p className="flex items-center text-center text-base sm:text-lg font-medium">
        Made by me with <FaHeart className="text-red-500 ml-2" />
      </p>

      <div className="flex flex-wrap justify-center sm:justify-end gap-3">
        {links.map((link) => (
          <div
            onClick={() => window.open(link.url)}
            key={link.name}
            className="border border-black px-5 py-2 rounded-full text-xl font-medium transition-transform duration-300 ease-out hover:scale-110 cursor-pointer"
          >
            {link.name}
          </div>
        ))}
      </div>
    </nav>
  );
};
