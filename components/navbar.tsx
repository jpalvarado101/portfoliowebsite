import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#161617e6] z-50 shadow-md backdrop-blur-md"
      style={{ backgroundColor: "rgba(22, 22, 23, 0.9)" }} // For finer control
    >
      {/* Main Container */}
      <div className="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 w-full">
        {/* Left Section: Links */}
        <div className="hidden md:flex space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10">
          <a
            href="#hero"
            className="text-base sm:text-sm text-white hover:text-orange-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base sm:text-sm text-white hover:text-orange-500 transition"
          >
            About
          </a>
          <a
            href="#project"
            className="text-base sm:text-sm text-white hover:text-blue-500 transition"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-base sm:text-sm text-white hover:text-orange-500 transition"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-base sm:text-sm text-white hover:text-orange-500 transition"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-base sm:text-sm text-white hover:text-orange-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-orange-500 focus:outline-none transition text-xl"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Center Section: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a
            href="#"
            className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap"
          >
            JFA — 10
          </a>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="hidden md:flex space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition text-lg sm:text-base"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition text-lg sm:text-base"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700 transition text-lg sm:text-base"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition text-lg sm:text-base"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#161617e6] backdrop-blur-md shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#hero"
              className="block text-base sm:text-sm text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-base sm:text-sm text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#project"
              className="block text-base sm:text-sm text-white hover:text-blue-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#education"
              className="block text-base sm:text-sm text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#experience"
              className="block text-base sm:text-sm text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block text-base sm:text-sm text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition text-lg sm:text-base"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition text-lg sm:text-base"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700 transition text-lg sm:text-base"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-700 transition text-lg sm:text-base"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
