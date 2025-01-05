import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <ul className="flex justify-around p-4">
        <li>
          <a
            href="#hero"
            className="text-black hover:text-orange-500 transition"
          >
            Hero Section
          </a>
        </li>
        <li>
          <a
            href="#orange"
            className="text-black hover:text-orange-500 transition"
          >
            Orange Section
          </a>
        </li>
        <li>
          <a
            href="#white"
            className="text-black hover:text-blue-500 transition"
          >
            White Section
          </a>
        </li>
      </ul>
    </nav>
  );
}
