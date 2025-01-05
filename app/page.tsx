"use client"; // Ensure this is a client component

import Navbar from "@/components/navbar";
import HeroSection from "@/pages/herosection";
import AboutSection from "@/pages/aboutsection";
import ProjectSection from "@/pages/projectsection";

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
      </main>
    </>
  );
}
