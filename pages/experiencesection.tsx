import React, { useRef, useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion, useAnimation } from "framer-motion";

export function ExperienceSection() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-4xl font-bold">Senior Software Engineer</h3>
          <p className="italic text-2xl">Heiman Software Labs</p>
          <p className="mt-2">
            Provides direction for applications in development. Researches and
            develops new ways to improve our development process. Mentors Junior
            Software Engineers.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-5xl sm:text-2xl mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-4xl sm:text-2xl font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-4xl sm:text-2xl font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-4xl sm:text-2xl font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg sm:text-xl">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg sm:text-xl">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg sm:text-xl">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg sm:text-xl">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg sm:text-xl">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
        </div>
      ),
    },
  ];

  const ref = useRef(null);

  // Animation controls for text
  const textAnimation = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textAnimation.start("visible"); // Trigger text animation
        } else {
          textAnimation.start("hidden");
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
  }, [textAnimation]);

  return (
    <div ref={ref} className="w-full bg-black text-white z-50">
      <Timeline data={data} />
    </div>
  );
}

export default ExperienceSection;
