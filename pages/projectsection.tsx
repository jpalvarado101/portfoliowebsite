"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const ProjectSection = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <section
      id="project"
      className="relative flex justify-center items-center bg-white min-h-screen"
    >
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Get to know your iSad.
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default ProjectSection;

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/google-deepmind-Oy2yXvl1WLg-unsplash.jpg",
    content: (
      <div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Artificial Intelligence is revolutionizing the way we interact with
          technology. Experience the power of AI-driven tools tailored for you.
        </p>
        <Image
          src="/ai-image.jpg"
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
    src: "/productivity.jpg",
    content: (
      <div>
        <h3 className="text-xl font-bold">Stay organized like never before</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Discover tools designed to boost your efficiency and manage your tasks
          seamlessly.
        </p>
        <Image
          src="/productivity-tools.jpg"
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
    src: "/apple-vision-pro.jpg",
    content: (
      <div>
        <h3 className="text-xl font-bold text-center">
          The Future of Visual Computing
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
          Apple Vision Pro redefines augmented reality with unparalleled
          features and a sleek design.
        </p>
      </div>
    ),
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/iphone-maps.jpg",
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
    src: "/ios-photography.jpg",
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
    src: "/hiring.jpg",
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
