import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#161617e6] z-50 shadow-md backdrop-blur-md"
      style={{ backgroundColor: "rgba(22, 22, 23, 0.9)" }} // For finer control
    >
      {/* Main Container */}
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center px-4 sm:px-6 py-2 max-w-7xl mx-auto">
        {/* Left Section: Links */}
        <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10">
          <a
            href="#hero"
            className="text-lg sm:text-base text-white hover:text-orange-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg sm:text-base text-white hover:text-orange-500 transition"
          >
            About
          </a>
          <a
            href="#project"
            className="text-lg sm:text-base text-white hover:text-blue-500 transition"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-lg sm:text-base text-white hover:text-orange-500 transition"
          >
            Education
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="hidden sm:flex justify-center">
          <a
            href="#"
            className="text-lg sm:text-xl font-bold text-white whitespace-nowrap"
          >
            JFA — 10
          </a>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex justify-center sm:justify-end space-x-4 mt-2 sm:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition text-lg"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition text-lg"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700 transition text-lg"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  );
}
