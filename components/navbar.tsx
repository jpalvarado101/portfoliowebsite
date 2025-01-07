import React, { useState, useEffect } from "react";
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

  // State to determine if current view is mobile based on dynamic breakpoint
  const [isMobileView, setIsMobileView] = useState(false);

  // Reference base width (e.g., 2560px)
  const BASE_WIDTH = 2560;
  // Desired breakpoint percentage (e.g., 58%)
  const BREAKPOINT_PERCENTAGE = 0.58;
  // Calculate fixed breakpoint based on BASE_WIDTH and BREAKPOINT_PERCENTAGE
  const FIXED_BREAKPOINT = BASE_WIDTH * BREAKPOINT_PERCENTAGE; // 1490px

  // Function to determine if current window width is less than the breakpoint
  const checkIsMobile = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth < FIXED_BREAKPOINT) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
      setIsMobileMenuOpen(false); // Close mobile menu if switching to desktop view
    }
  };

  useEffect(() => {
    // Initial check
    checkIsMobile();

    // Add resize event listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

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
        {!isMobileView && (
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10">
            <a
              href="#hero"
              className="text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-orange-500 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-orange-500 transition"
            >
              About
            </a>
            <a
              href="#project"
              className="text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-blue-500 transition"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-orange-500 transition"
            >
              Education & Experience
            </a>
            <a
              href="#contact"
              className="text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-orange-500 transition"
            >
              Contact
            </a>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobileView && (
          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-orange-500 focus:outline-none transition text-xl"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        )}

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
        {!isMobileView && (
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white hover:text-gray-700 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileView && isMobileMenuOpen && (
        <div className="bg-[#161617e6] backdrop-blur-md shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#hero"
              className="block text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#project"
              className="block text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-blue-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#education"
              className="block text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Education & Experience
            </a>
            <a
              href="#contact"
              className="block text-base sm:text-sm lg:text-lg xl:text-xl text-white hover:text-orange-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100021982362034"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white hover:text-blue-600 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/jpa.alva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/jpalvarado101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white hover:text-gray-700 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/johnfalvarado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-base lg:text-xl xl:text-2xl text-white hover:text-blue-700 transition"
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
