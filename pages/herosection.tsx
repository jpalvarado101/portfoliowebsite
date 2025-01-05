"use client"; // Ensure this is a client component

import ParticlesBackground from "@/components/ui/particlesbackground";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center bg-black text-white min-h-screen"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="max-w-7xl w-full z-10 relative">
        <h1 className="text-3xl font-bold">Hero Section</h1>
      </div>
    </section>
  );
};

export default HeroSection;
