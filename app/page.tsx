"use client"; // Ensure this is a client component

import Navbar from "@/components/navbar";
import HeroSection from "@/pages/herosection";
import AboutSection from "@/pages/aboutsection";
import ProjectSection from "@/pages/projectsection";
import EducationSection from "@/pages/educationsection";
import ExperienceSection from "@/pages/experiencesection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col overflow-hidden mx-auto">
        {/* Hero Section with Particles */}
        <HeroSection />

        {/* Orange Section */}
        <AboutSection />

        {/* White Section */}
        <ProjectSection />

        <EducationSection />

        <ExperienceSection />
      </main>
    </>
  );
}
