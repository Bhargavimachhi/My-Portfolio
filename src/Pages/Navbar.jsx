import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", url: "/" },
    { name: "Work", url: "/projects" },
    { name: "AboutMe", url: "/about-me" },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1f4iXxhkdpW3URv4Fujsotd18LOg8cSBw/view?usp=drive_link",
    },
  ];

  return (
    <nav className="w-full px-6 pt-6 mb-4 z-30 relative">
      <div className="flex items-center justify-between">
        <div
          className="text-2xl font-extrabold font-love-light text-7xl p-5 cursor-pointer text-4xl font-bold bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent"
          onClick={() => navigate("/")}
        >
          B
        </div>

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
              className="border border-black bg-white px-5 py-2 rounded-full text-xl font-medium transition-transform duration-300 ease-out hover:scale-110"
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
              className="w-full border border-black bg-white px-5 py-2 rounded-full text-xl font-medium transition-transform duration-300 ease-out hover:scale-105"
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
