import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bhargavi-machhi/",
    },
    {
      name: "Leetcode",
      url: "https://leetcode.com/u/bhargavimachhi/",
    },
    {
      name: "GitHub",
      url: "https://github.com/Bhargavimachhi/",
    },
  ];

  return (
    <nav className="w-full sm:flex justify-end space-x-4 pt-6 mb-5">
      <div className="w-full left flex align-items-centre ml-5 mt-5 pt-6">
        Made by me with <FaHeart className="text-red-500 mt-1 ml-2" />
      </div>
      <div className="w-full flex justify-end space-x-4 pt-6 pr-5 mb-0">
        {links.map((link) => {
          return (
            <Link
              to={link.url}
              key={link.name}
              className="border border-black px-5 py-2 rounded-full text-lg cursor-pointer"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
