import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col overflow-hidden mx-auto">
        {/* Hero Section - Black Background */}
        <section
          id="hero"
          className="flex justify-center items-center bg-black text-white min-h-screen"
        >
          <div className="max-w-7xl w-full">
            <h1 className="text-3xl font-bold">Hero Section</h1>
          </div>
        </section>

        {/* Orange Section */}
        <section
          id="orange"
          className="flex justify-center items-center bg-orange-500 min-h-screen"
        >
          <div className="max-w-7xl w-full">
            <h1 className="text-3xl font-bold">Orange Section</h1>
          </div>
        </section>

        {/* White Section */}
        <section
          id="white"
          className="flex justify-center items-center bg-white min-h-screen"
        >
          <div className="max-w-7xl w-full">
            <h1 className="text-3xl font-bold">White Section</h1>
          </div>
        </section>
      </main>
    </>
  );
}
