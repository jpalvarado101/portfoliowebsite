"use client"; // Ensure this is a client component

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const OrangeSection = () => {
  const ref = useRef(null);

  // Track the scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref, // Observe the section
    offset: ["start end", "end start"], // When the top of the section enters and leaves the viewport
  });

  // Parallax effects for elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Background parallax
  const textY = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]); // Text parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]); // Image parallax
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Opacity animation

  return (
    <section
      id="orange"
      className="relative flex flex-wrap lg:flex-nowrap justify-center items-center bg-[#b4b0ab] text-[#343434] min-h-screen px-6 sm:px-12 overflow-hidden"
      ref={ref} // Attach the section to the ref
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-[#b4b0ab] z-0"
        style={{ translateY: backgroundY }}
      />

      <div className="relative max-w-7xl w-full z-10 flex flex-wrap lg:flex-nowrap items-center">
        {/* Left Content: Text */}
        <motion.div
          className="flex-1 lg:mr-8 mb-8 lg:mb-0"
          style={{ translateY: textY, opacity }}
        >
          <h2 className="text-5xl sm:text-6xl font-serif font-bold mb-6">
            Who is Chad?
          </h2>
          <p className="text-lg sm:text-xl text-[#343434] mb-6 leading-relaxed">
            I'm a graphic designer with five years of experience. Today, I'm a
            full-time creative freelancer who loves to travel the world.
          </p>
          <hr className="border-[#343434] w-16" />
        </motion.div>

        {/* Right Content: Circular Image */}
        <motion.div
          className="flex-1 flex justify-center"
          style={{ translateY: imageY, opacity }}
        >
          <div className="rounded-full overflow-hidden w-80 h-80">
            <motion.img
              src="/google-deepmind-Oy2yXvl1WLg-unsplash.jpg" // Replace with your image path
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrangeSection;
