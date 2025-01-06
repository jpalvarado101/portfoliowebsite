"use client"; // Ensure this is a client component

import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ui/particlesbackground";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center bg-black text-white min-h-screen h-auto"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Content */}
      <div className="max-w-7xl w-full z-10 relative flex flex-wrap items-center justify-center lg:justify-between px-6 sm:px-12">
        {/* Left Content: Text */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <p className="text-base sm:text-sm uppercase font-bold text-gray-400 mb-4">
            5+ YEARS OF PROJECT & WORK EXPERIENCE
          </p>
          <h1 className="lg:text-[5rem] lg:leading-[1.2] sm:text-5xl  text-white mb-6">
            Transforming Ideas Into{" "}
            <span className="text-[#343434]">Reality</span>
          </h1>
          <p className="lg:text-lg sm:text-sm text-gray-300 mb-6">
            Our automatic answer bot gets the customer details and logs their
            issue for you. Even if the line is busy.
          </p>
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700">
              Projects
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-700 flex items-center">
              Email <span className="ml-2">→</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content: Key Visual */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: 1,
            ease: "easeOut",
          }}
        >
          <img
            src="/google-deepmind-Oy2yXvl1WLg-unsplash.jpg" // Replace with your image path
            alt="Key Visual"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
