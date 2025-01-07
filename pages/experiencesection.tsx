import React, { useRef, useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion, useAnimation } from "framer-motion";

export function ExperienceSection() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h1 className="text-4xl font-bold">
            Founder & CEO, AI/Computer Vision Lead
          </h1>
          <p className="italic text-2xl">inDoors™</p>
          <p className="italic text-lg">Jan 2024 - present</p>
          <p className="mt-2 text-lg">
            Developed AI-driven computer vision solutions using Python,
            TensorFlow. Led a team in deep learning, data modeling, algorithm
            optimization, and deploying scalable ML systems. Spearheaded product
            innovation and advanced data analysis.
          </p>
          <br />

          <h2 className="text-4xl font-bold">
            Bachelor of Applied Science - Computer Engineering
          </h2>
          <p className="italic text-2xl">Simon Fraser University</p>
          <p className="italic text-lg">Aug 2024</p>
          <p className="mt-2 text-lg">Co-op Distinction.</p>
          <br />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-4xl font-bold">Co-Founder & Co-President</h3>
          <p className="italic text-2xl">
            SFU Coop Hub (SCOOP™) by Simon Fraser University
          </p>
          <p className="italic text-lg">Aug 2020 - Jan 2022</p>
          <p className="mt-2 text-lg">
            Co-founded and led SFU Coop Hub (SCOOP™), scaling membership to 468+
            and team to 10+. Organized industry workshops and networking events,
            showcasing leadership, team building, and event management skills to
            enhance professional development opportunities.
          </p>
          <br />
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h4 className="text-4xl font-bold">IT Analyst/ Software Developer</h4>
          <p className="italic text-2xl">Microserve</p>
          <p className="italic text-lg">Jan 2020 - Dec 2020</p>
          <p className="mt-2 text-lg">
            Provided IT tech analysis and support at Microserve, troubleshooting
            IT issues, deploying PCs, and managing tickets via Kanban. Automated
            UBC finance API billing using C#, PHP, JavaScript, and SQL/MySQL.
            Built SQL reports, automated tasks, and ensured 100% client
            satisfaction. Recognized for outstanding service by clients, managed
            IT assets, and collaborated across teams to deliver efficient IT
            solutions.
          </p>
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
    <section id="education" className="bg-black z-40">
      <div ref={ref} className="w-full bg-black text-white ">
        <Timeline data={data} />
      </div>
    </section>
  );
}

export default ExperienceSection;
