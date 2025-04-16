import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const links = [
    {
      name: "Work",
      url: "/projects",
    },
    {
      name: "AboutMe",
      url: "/about-me",
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1_WlpZjqprmosIAp85O-xUK0-X1cu4ADT/view?usp=sharing",
    },
  ];

  return (
    <nav className="w-full flex justify-end space-x-4 pt-6 pr-6 mb-0">
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
    </nav>
  );
};
