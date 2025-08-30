"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-10">
      {/* Left Content */}
      <div className="max-w-xl space-y-6 z-10">
        <h1 className="text-5xl font-extrabold leading-tight">
          READY TO TRAIN <br />
          <span className="text-red-600">YOUR BODY</span>
        </h1>
        <p className="text-gray-300">
          Gym training is a structured and disciplined approach to physical exercise
          that focuses on strength, endurance and overall fitness improvement.
        </p>
        <button className="border border-red-600 px-8 py-3 font-semibold hover:bg-red-600 transition">
          LET’S JOIN NOW
        </button>

        {/* Stats */}
        <div className="flex space-x-12 mt-8">
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="text-gray-400 text-sm">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">15K+</h2>
            <p className="text-gray-400 text-sm">Members Join</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">14K+</h2>
            <p className="text-gray-400 text-sm">Happy Members</p>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 top-0 w-[55%] h-full">
        <Image
          src="/gym-hero.jpg" // apni gym image ko "public" folder me daal kar yaha naam use karo
          alt="Gym Hero"
          fill
          className="object-cover opacity-90"
        />
      </div>

      {/* Background Overlay Text (LEVEL UP) */}
      <h1 className="absolute right-10 top-1/4 text-[120px] font-extrabold text-transparent stroke-white opacity-10 leading-none select-none">
        LEVEL <br /> UP
      </h1>
    </section>
  );
}
