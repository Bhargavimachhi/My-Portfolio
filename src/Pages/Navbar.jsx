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
    <nav className="w-full flex items-center justify-center sm:justify-end gap-3 px-6 pt-6 mb-4">
      {links.map((link) => (
        <Link
          to={link.url}
          key={link.name}
          className="border border-black px-5 py-2 rounded-full text-xl font-medium transition-transform duration-300 ease-out hover:scale-110"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
