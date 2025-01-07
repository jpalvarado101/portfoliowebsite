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
              transition: { duration: 2, ease: "easeOut" },
            },
          }}
        >
          <motion.h2
            className="mt-20 sm:mt-5 lg:mt-0 text-3xl sm:text-4xl lg:text-[5rem] lg:leading-[1.2] text-[#343434] "
            initial="hidden"
            animate={headingAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 2, ease: "easeOut" },
              },
            }}
          >
            WHO IS JOHN?
          </motion.h2>
          <motion.p
            className="mt-10 lg:mt-30 text-base sm:text-lg lg:text-2xl text-black mb-6 leading-relaxed"
            initial="hidden"
            animate={paragraphAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 2, delay: 0.1, ease: "easeOut" },
              },
            }}
          >
            Hi there! I’m a Machine Learning and Computer Engineer with a
            Bachelor of Applied Science in Computer Engineering from Simon
            Fraser University. I specialize in creating high-performance AI
            solutions and have hands-on experience with tools like Python,
            PyTorch, TensorFlow, and CUDA, as well as techniques such as CNNs,
            model quantization, and computer vision. Some of my recent work
            includes inDoors™, an AI-powered indoor navigation system with 100%
            feature detection accuracy and automatically generates maps for use
            in a custom-built navigation app, and MediScanAI™, a lung disease
            classifier that reduced model size by 400% while maintaining 93%
            accuracy compared to the best public deep learning models. I’m
            passionate about solving challenging problems and excited to bring
            my expertise to impactful projects. Let’s connect to discuss how I
            can contribute to your team!
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
                transition: { duration: 2, delay: 0.3, ease: "easeOut" },
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
              transition: { duration: 2, delay: 0.4, ease: "easeOut" },
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
                  transition: { duration: 2, delay: 0.5, ease: "easeOut" },
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
