"use client"; // Ensure this is a client component

import Navbar from "@/components/navbar";
import HeroSection from "@/pages/herosection";
import OrangeSection from "@/pages/orangesection";
import WhiteSection from "@/pages/whitesection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col overflow-hidden mx-auto">
        {/* Hero Section with Particles */}
        <HeroSection />

        {/* Orange Section */}
        <OrangeSection />

        {/* White Section */}
        <WhiteSection />
      </main>
    </>
  );
}
