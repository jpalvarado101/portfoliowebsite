"use client"; // Ensure this is a client component

import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

const AboutSection = () => {
  const ref = useRef(null);

  // Animation controls for elements
  const headingAnimation = useAnimation();
  const paragraphAnimation = useAnimation();
  const imageAnimation = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingAnimation.start("visible");
          paragraphAnimation.start("visible");
          imageAnimation.start("visible");
        } else {
          headingAnimation.start("hidden");
          paragraphAnimation.start("hidden");
          imageAnimation.start("hidden");
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [headingAnimation, paragraphAnimation, imageAnimation]);

  return (
    <section
      id="about"
      className="relative flex flex-wrap lg:flex-nowrap justify-center items-center bg-[#b4b0ab] text-black 
        min-h-screen sm:h-auto overflow-hidden px-6 sm:px-12"
      ref={ref}
    >
      <div className="relative max-w-7xl w-full z-10 flex flex-wrap lg:flex-nowrap items-center">
        {/* Left Content: Text */}
        <motion.div
          className="flex-1 lg:mr-8 mb-8 lg:mb-0"
          initial="hidden"
          animate={headingAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          <motion.h2
            className="mt-20 sm:mt-10 lg:mt-0 text-3xl sm:text-4xl lg:text-5xl text-[#343434] font-serif font-bold"
            initial="hidden"
            animate={headingAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            Who is John?
          </motion.h2>
          <motion.p
            className="mt-10 lg:mt-40 text-base sm:text-lg lg:text-xl text-[#343434] mb-6 leading-relaxed"
            initial="hidden"
            animate={paragraphAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.2, ease: "easeOut" },
              },
            }}
          >
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
          </motion.p>
          <motion.hr
            className="border-2 border-[#343434] w-40 mb-10"
            initial="hidden"
            animate={headingAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.4, ease: "easeOut" },
              },
            }}
          />
        </motion.div>

        {/* Right Content: Circular Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial="hidden"
          animate={imageAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.6, ease: "easeOut" },
            },
          }}
        >
          <div className="rounded-full overflow-hidden w-60 h-60 sm:w-80 sm:h-80">
            <motion.img
              src="/google-deepmind-Oy2yXvl1WLg-unsplash.jpg" // Replace with your image path
              className="object-cover w-full h-full"
              initial="hidden"
              animate={imageAnimation}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, delay: 0.8, ease: "easeOut" },
                },
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
