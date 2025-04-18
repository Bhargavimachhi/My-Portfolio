import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", url: "/My-Portfolio" },
    { name: "Work", url: "/My-Portfolio/projects" },
    { name: "AboutMe", url: "/My-Portfolio/about-me" },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1_WlpZjqprmosIAp85O-xUK0-X1cu4ADT/view?usp=sharing",
    },
  ];

  return (
    <nav className="w-full px-6 pt-6 mb-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold font-love-light text-7xl p-5">B</div>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-3">
          {links.map((link) => (
            <Link
              to={link.url}
              key={link.name}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="border border-black px-5 py-2 rounded-full text-xl font-medium transition-transform duration-300 ease-out hover:scale-110"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-start sm:hidden mt-4 gap-2">
          {links.map((link) => (
            <Link
              to={link.url}
              key={link.name}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="w-full border border-black px-5 py-2 rounded-full text-xl font-medium transition-transform duration-300 ease-out hover:scale-105"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
