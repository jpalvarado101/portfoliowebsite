"use client"; // Ensure this is a client component

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const OrangeSection = () => {
  const ref = useRef(null);

  // Track the scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref, // Observe the section
    offset: ["-66% start", "33% start"], // Start earlier, finish earlier
  });

  // Parallax effects for elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Background parallax
  const textY = useTransform(scrollYProgress, [0.1, 0.5], ["100px", "0px"]); // Faster slide
  const imageY = useTransform(scrollYProgress, [0.1, 0.5], ["100px", "0px"]); // Faster slide
  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]); // Fade-in happens earlier and faster

  return (
    <section
      id="orange"
      className="relative flex flex-wrap lg:flex-nowrap justify-center items-center bg-[#b4b0ab] text-black min-h-screen px-6 sm:px-12 overflow-hidden"
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
          <p className="text-lg sm:text-xl text-black mb-6 leading-relaxed">
            As a Computer Engineering graduate with a strong foundation in
            machine learning (ML), artificial intelligence (AI), and computer
            vision, I specialize in designing and optimizing scalable AI systems
            that solve real-world problems. My expertise spans deep learning,
            neural networks, embedded systems, and data-driven decision-making,
            supported by proficiency in Python, C++, TensorFlow, PyTorch, and
            CUDA. I have led cross-functional teams to develop innovative
            AI-powered solutions, including founding inDoors™, an AI-driven
            indoor navigation system leveraging real-time computer vision and
            scalable geospatial algorithms. My experience includes building
            robust AI pipelines, optimizing model compression, and deploying
            applications with investor interest and commercial potential. My
            technical portfolio includes diverse projects like MediScanAI™, a
            high-accuracy lung disease classifier using advanced CNNs and DSP
            techniques, and PurrrSpective™, a memory-driven AI emotion detection
            system enhancing human-computer interaction. I have hands-on
            experience in object detection, semantic segmentation, and 3D
            reconstruction, delivering high-precision outputs for practical
            applications.
          </p>
          <hr className="border-black w-16" />
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
