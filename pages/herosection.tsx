"use client"; // Ensure this is a client component

import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ui/particlesbackground";
import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
  const words = [
    "Machine Learning",
    "Artificial Intelligence",
    "Computer Vision",
  ];

  return (
    <section
      id="hero"
      className="relative flex justify-center items-center bg-black text-white min-h-screen h-auto w-full"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Content */}
      <div className="w-full z-10 relative flex flex-wrap items-center justify-between px-6 sm:px-12 lg:px-24 xl:px-32">
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
          {/* Tagline */}
          <p className="text-sm uppercase font-bold text-gray-400 mb-2">
            Building tomorrow’s technology, today.
          </p>

          {/* Main Heading */}
          <h1 className="lg:text-[4rem] lg:leading-[1.2] text-white mb-6">
            <span className="text-white">
              John is a Computer Engineering Graduate living in Vancouver who
              specializes in
              <FlipWords words={words} duration={500} /> <br />
            </span>{" "}
          </h1>

          {/* Personal Summary: Following the desired shape */}
          <div className="flex flex-col space-y-2 mb-6">
            <p className="lg:text-xl text-gray-300 text-center lg:text-left">
              With expertise in frameworks like PyTorch, TensorFlow, and OpenCV,
              <br />
              he delivers innovative, scalable solutions for real-world
              challenges. <br />
              Proficient in deep learning, model optimization, and GPU <br />
              acceleration, John is passionate about creating <br /> impactful
              AI systems that drive innovation.
            </p>

            <p className="lg:text-lg text-gray-300 text-center lg:text-left">
              Let’s connect to explore how my expertise <br />
              can make a difference.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
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
            {/* View Portfolio Button - Scrolls to the portfolio section */}
            <a href="#project">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700">
                View My Portfolio
              </button>
            </a>

            {/* Download Resume Button */}
            <a href="/path-to-your-resume.pdf" download>
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-700 flex items-center">
                Download Resume <span className="ml-2">→</span>
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content: Key Visual */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
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
            alt="AI Engineer at Work"
            className="max-w-full h-auto rounded-md shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
