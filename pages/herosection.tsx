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

      {/* Content */}
      <div className="max-w-7xl w-full z-10 relative flex justify-start items-center">
        <h1 className="text-[30px] font-serif text-[#323649] mx-[67px] my-[54px] px-0 sm:px-[290px] translate-x-[-200px]">
          Aileen is a digital product designer living...
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
