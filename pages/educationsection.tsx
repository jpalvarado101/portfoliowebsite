"use client"; // Ensure this is a client component

import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

const EducationSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const headingAnimation = useAnimation();
  const cardAnimation = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const checkInitialPosition = () => {
      const sectionTop = ref.current?.getBoundingClientRect().top || 0;
      if (sectionTop < window.innerHeight * 0.8) {
        headingAnimation.start("visible");
        cardAnimation.start("visible");
      } else {
        headingAnimation.start("hidden");
        cardAnimation.start("hidden");
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionTop = ref.current?.getBoundingClientRect().top || 0;

      if (
        sectionTop < window.innerHeight * 0.8 &&
        currentScrollY > lastScrollY
      ) {
        headingAnimation.start("visible");
        cardAnimation.start("visible");
      } else if (sectionTop > window.innerHeight * 0.8) {
        headingAnimation.start("hidden");
        cardAnimation.start("hidden");
      }

      lastScrollY = currentScrollY;
    };

    checkInitialPosition();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingAnimation, cardAnimation]);

  return (
    <section
      id="education"
      className="relative flex justify-center items-center bg-black min-h-screen sm:h-auto px-6 sm:px-12 font-sans overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl w-full">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-10"
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
          Experience & Education
        </motion.h1>
        <div className="space-y-10">
          {/* Senior Software Engineer */}
          <motion.div
            className="p-6 border rounded-lg shadow-lg bg-gray-50"
            initial="hidden"
            animate={cardAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.1, ease: "easeOut" },
              },
            }}
          >
            <h2 className="text-xl font-semibold">2030</h2>
            <h3 className="text-lg font-bold">Senior Software Engineer</h3>
            <p className="italic">Heiman Software Labs</p>
            <p className="mt-2">
              Provides direction for applications in development. Researches and
              develops new ways to improve our development process. Mentors
              Junior Software Engineers.
            </p>
          </motion.div>
          {/* Junior Software Engineer */}
          <motion.div
            className="p-6 border rounded-lg shadow-lg bg-gray-50"
            initial="hidden"
            animate={cardAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.2, ease: "easeOut" },
              },
            }}
          >
            <h2 className="text-xl font-semibold">2027</h2>
            <h3 className="text-lg font-bold">Junior Software Engineer</h3>
            <p className="italic">Heiman Software Labs</p>
            <p className="mt-2">
              Developed, installed, and configured internal applications, as
              well as new application releases into test and production
              environments.
            </p>
          </motion.div>
          {/* Master of Science */}
          <motion.div
            className="p-6 border rounded-lg shadow-lg bg-gray-50"
            initial="hidden"
            animate={cardAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.3, ease: "easeOut" },
              },
            }}
          >
            <h2 className="text-xl font-semibold">2025</h2>
            <h3 className="text-lg font-bold">
              Master of Science in Software Engineering
            </h3>
            <p className="italic">De Loureigh University, Venston Bay</p>
            <p className="mt-2">Heiman Software Labs Scholar</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
