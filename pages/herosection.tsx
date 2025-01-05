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
      <div className="max-w-7xl w-full z-10 relative flex flex-wrap items-center justify-center lg:justify-between px-6 sm:px-12">
        {/* Left Content: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-sm uppercase font-bold text-gray-400 mb-4">
            12,635 Happy Users
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Convert your missed calls <br />
            into <span className="text-orange-500">paying customers</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Our automatic answer bot gets the customer details and logs their
            issue for you. Even if the line is busy.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700">
              How others use it
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 flex items-center">
              Try for free <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Right Content: Key Visual */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/path/to/your/image.png" // Replace with your image path
            alt="Key Visual"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
