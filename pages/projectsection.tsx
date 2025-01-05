"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const ProjectSection = () => {
  const ref = useRef(null);

  // Animation controls for text and cards
  const textAnimation = useAnimation();
  const cardsAnimation = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textAnimation.start("visible"); // Trigger text animation first
          setTimeout(() => {
            cardsAnimation.start("visible"); // Trigger cards animation after delay
          }, 500); // Delay after text animation starts
        } else {
          textAnimation.start("hidden");
          cardsAnimation.start("hidden");
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
  }, [textAnimation, cardsAnimation]);

  const cards = data.map((card, index) => (
    <motion.div
      key={card.src}
      initial="hidden"
      animate={cardsAnimation}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.2 * index,
            ease: "easeOut",
          },
        },
      }}
    >
      <Card card={card} index={index} />
    </motion.div>
  ));

  return (
    <section
      id="project"
      className="relative flex justify-center items-center bg-white h-auto"
      ref={ref} // Attach ref to observe the section
    >
      <div className="w-full h-full py-20">
        {/* Animated Headings */}
        <motion.h2
          className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-[#343434] font-sans"
          initial="hidden"
          animate={textAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          Get to know me more.
        </motion.h2>
        <motion.h4
          className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black font-sans mt-4"
          initial="hidden"
          animate={textAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2, ease: "easeOut" },
            },
          }}
        >
          My projects.
        </motion.h4>

        {/* Animated Carousel */}
        <motion.div
          style={{ marginTop: "2.5rem" }}
          initial="hidden"
          animate={cardsAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
        >
          <Carousel items={cards} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/inDoorsapp_waifu2x_photo_noise2.png",
    content: (
      <div>
        <p className="text-neutral-400 text-base md:text-2xl font-sans">
          Artificial Intelligence is revolutionizing the way we interact with
          technology. Experience the power of AI-driven tools tailored for you.
        </p>
        <Image
          src="/inDoorsapp_waifu2x_photo_noise2.png"
          alt="AI Illustration"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/google-deepmind-Oy2yXvl1WLg-unsplash.jpg",
    content: (
      <div>
        <h3 className="text-xl font-bold">Stay organized like never before</h3>
        <p className="text-neutral-400 text-base md:text-2xl font-sans">
          Discover tools designed to boost your efficiency and manage your tasks
          seamlessly.
        </p>
        <Image
          src="/google-deepmind-Oy2yXvl1WLg-unsplash.jpg"
          alt="Productivity tools"
          height="400"
          width="400"
          className="object-cover rounded-lg mx-auto"
        />
      </div>
    ),
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/google-deepmind-Oy2yXvl1WLg-unsplash.jpg",
    content: (
      <div>
        <h3 className="text-xl font-bold text-center">
          The Future of Visual Computing
        </h3>
        <p className="text-neutral-400 text-base md:text-2xl font-sans">
          Apple Vision Pro redefines augmented reality with unparalleled
          features and a sleek design.
        </p>
      </div>
    ),
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/google-deepmind-Oy2yXvl1WLg-unsplash.jpg",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Get the most out of your iPhone 15 Pro Max with advanced Maps
          features, including real-time navigation and AR support.
        </p>
      </div>
    ),
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/google-deepmind-Oy2yXvl1WLg-unsplash.jpg",
    content: (
      <div>
        <h3 className="text-xl font-bold text-center">Capture Every Moment</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          With iOS’s enhanced photography tools, elevate your pictures to
          professional quality.
        </p>
      </div>
    ),
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/google-deepmind-Oy2yXvl1WLg-unsplash.jpg",
    content: (
      <div>
        <h3 className="text-xl font-bold">Join Our Team</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          We are looking for talented software engineers passionate about
          innovation and teamwork.
        </p>
      </div>
    ),
  },
];
