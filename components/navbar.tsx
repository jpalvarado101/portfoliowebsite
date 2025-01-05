import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      {/* Grid Layout for Navbar */}
      <div className="grid grid-cols-3 items-center px-4 sm:px-6 py-2 max-w-7xl mx-auto">
        {/* Left Section: Links */}
        <div className="flex justify-start space-x-4 sm:space-x-6 padding-left:20px">
          <a
            href="#hero"
            className="text-sm sm:text-base text-black hover:text-orange-500 transition"
          >
            Hero Section
          </a>
          <a
            href="#orange"
            className="text-sm sm:text-base text-black hover:text-orange-500 transition"
          >
            Orange Section
          </a>
          <a
            href="#white"
            className="text-sm sm:text-base text-black hover:text-blue-500 transition"
          >
            White Section
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="flex justify-center">
          <a
            href="#"
            className="text-lg sm:text-xl font-bold text-black whitespace-nowrap"
          >
            LOGO
          </a>
        </div>

        {/* Right Section: Icons */}
        <div className="flex justify-end space-x-2 sm:space-x-4">
          <a
            href="#"
            className="text-black hover:text-gray-500 transition"
            aria-label="Search"
          >
            🔍
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-500 transition"
            aria-label="Profile"
          >
            👤
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-500 transition"
            aria-label="Settings"
          >
            ⚙️
          </a>
        </div>
      </div>
    </nav>
  );
}
