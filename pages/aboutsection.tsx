"use client"; // Ensure this is a client component

import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false); // Flag to track animation state

  // Animation controls for elements
  const headingAnimation = useAnimation();
  const paragraphAnimation = useAnimation();
  const imageAnimation = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const checkInitialPosition = async () => {
      const sectionTop = ref.current?.getBoundingClientRect().top || 0;
      if (sectionTop < window.innerHeight * 0.8) {
        if (!isAnimating.current) {
          isAnimating.current = true;
          await Promise.all([
            headingAnimation.start("visible"),
            paragraphAnimation.start("visible"),
            imageAnimation.start("visible"),
          ]);
          isAnimating.current = false;
        }
      } else {
        if (!isAnimating.current) {
          isAnimating.current = true;
          await Promise.all([
            headingAnimation.start("hidden"),
            paragraphAnimation.start("hidden"),
            imageAnimation.start("hidden"),
          ]);
          isAnimating.current = false;
        }
      }
    };

    const handleScroll = async () => {
      const currentScrollY = window.scrollY;
      const sectionTop = ref.current?.getBoundingClientRect().top || 0;

      if (isAnimating.current) {
        return; // Prevent interrupting if an animation is ongoing
      }

      if (
        sectionTop < window.innerHeight * 0.8 &&
        currentScrollY > lastScrollY
      ) {
        // Trigger animations when scrolling down into the section
        isAnimating.current = true;
        await Promise.all([
          headingAnimation.start("visible"),
          paragraphAnimation.start("visible"),
          imageAnimation.start("visible"),
        ]);
        isAnimating.current = false;
      } else if (sectionTop > window.innerHeight * 0.8) {
        // Reset animations when leaving the section upwards
        isAnimating.current = true;
        await Promise.all([
          headingAnimation.start("hidden"),
          paragraphAnimation.start("hidden"),
          imageAnimation.start("hidden"),
        ]);
        isAnimating.current = false;
      }

      lastScrollY = currentScrollY;
    };

    // Check the position immediately on load
    checkInitialPosition();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingAnimation, paragraphAnimation, imageAnimation]);

  return (
    <section
      id="about"
      className="relative flex flex-wrap lg:flex-nowrap justify-center items-center bg-black text-white 
        min-h-screen sm:h-auto overflow-hidden px-6 sm:px-12"
      ref={ref}
    >
      <div className="relative ml-10 w-full z-10 flex flex-wrap lg:flex-nowrap items-center">
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
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
        >
          <motion.h2
            className="text-5xl lg:text-[5rem] leading-[1.2] mb-12 text-white" // Text now white
            initial="hidden"
            animate={headingAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: "easeOut" },
              },
            }}
          >
            ABOUT ME?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 text-white" // Text now white
            initial="hidden"
            animate={paragraphAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, delay: 0.1, ease: "easeOut" },
              },
            }}
          >
            Hi, I'm John! <br />
            <br />
            I’m a Machine Learning and Computer Engineer with a Bachelor of
            Applied Science in Computer Engineering from Simon Fraser
            University. I specialize in creating high-performance AI solutions
            and have hands-on experience with tools like Python, PyTorch,
            TensorFlow, and CUDA. My expertise extends to advanced techniques
            such as CNNs, model quantization, and computer vision.
            <br />
            <br />
            Some of my recent work includes: <br />
            <strong>inDoors™</strong>: An AI-powered indoor navigation system
            that boasts 100% feature detection accuracy and automatically
            generates maps for use in a custom-built navigation app. <br />
            <strong>MediScanAI™</strong>: A lung disease classifier that reduced
            model size by 400% while maintaining 93% accuracy, outperforming the
            best public deep learning models. <br />
            <br />
            I’m passionate about solving challenging problems and am excited to
            bring my expertise to impactful projects. Let’s connect and discuss
            how I can contribute to your team!
          </motion.p>
        </motion.div>

        {/* Right Content: Full-Height Image */}
        <motion.div
          className="flex-1 flex justify-center h-full" // Ensure the container takes full height
          initial="hidden"
          animate={imageAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
            },
          }}
        >
          <div className="overflow-hidden w-full h-full">
            {" "}
            {/* Parent container for the image */}
            <motion.img
              src="/1.jpg" // Replace with your image path
              className="object-cover w-full h-full" // Ensures image covers the entire container
              initial="hidden"
              animate={imageAnimation}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.5, delay: 0.5, ease: "easeOut" },
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
