import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-hidden w-full">
      {/* Hero Section - Black Background */}
      <section className="flex justify-center items-center bg-black-100 text-white min-h-screen w-full">
        <div className="w-full">
          <Hero />
        </div>
      </section>

      {/* Orange Section */}
      <section className="flex justify-center items-center !bg-orange-500 min-h-screen w-full">
        <div className="w-full">
          <h1 className="text-3xl font-bold">Orange Section</h1>
        </div>
      </section>

      {/* White Section */}
      <section className="flex justify-center items-center bg-white min-h-screen w-full">
        <div className="w-full">
          <h1 className="text-3xl font-bold">White Section</h1>
        </div>
      </section>
    </main>
  );
}
