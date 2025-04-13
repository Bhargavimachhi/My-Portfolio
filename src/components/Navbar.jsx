import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const links = [
    {
      name: "Work",
      url: "",
    },
    {
      name: "AboutMe",
      url: "",
    },
    {
      name: "Resume",
      url: "",
    },
  ];

  return (
    <nav className="w-full flex justify-end space-x-4 pt-6 pr-6 mb-0">
      {links.map((link) => {
        return (
          <Link
            to={link.url}
            className="border border-black px-5 py-2 rounded-full text-lg cursor-pointer"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
