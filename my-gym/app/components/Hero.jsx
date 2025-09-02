"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="bg-black text-white bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-black/70 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          IRON<span className="text-red-600">GYM</span>
        </h1>

        <ul className="hidden md:flex space-x-10 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-red-600 transition text-red-600">HOME</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-red-600 transition">SERVICES</Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-red-600 transition">ABOUT US</Link>
          </li>
          <li>
            <Link href="/trainers" className="hover:text-red-600 transition">TRAINERS</Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-red-600 transition">TESTIMONIALS</Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-red-600 transition">CONTACT US</Link>
          </li>
        </ul>

        <button className="bg-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
          STARTED NOW
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-between px-10 py-20 bg-black/50">
        <div className="max-w-xl space-y-6 z-10">
          <h1 className="text-5xl font-extrabold leading-tight">
            READY TO TRAIN <br />
            <span className="text-red-600">YOUR BODY</span>
          </h1>
          <p className="text-gray-300">
            Gym training is a structured and disciplined approach to physical exercise
            that focuses on strength, endurance and overall fitness improvement.
          </p>
          <button className="border border-red-600 px-8 py-3 font-semibold hover:bg-red-600 transition text-red-600">
            LET’S JOIN NOW
          </button>

          {/* Stats Section */}
          <div className="flex items-center mt-8">
            {/* Box 1 */}
            <div className="text-center px-6">
              <h2 className="text-3xl font-bold text-red-500">20+</h2>
              <p className="text-gray-400 text-sm">Years of Experience</p>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-gray-300"></div>

            {/* Box 2 */}
            <div className="text-center px-6">
              <h2 className="text-3xl font-bold text-red-500">15K+</h2>
              <p className="text-gray-400 text-sm">Members Join</p>
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-gray-300"></div>

            {/* Box 3 */}
            <div className="text-center px-6">
              <h2 className="text-3xl font-bold text-red-500">14K+</h2>
              <p className="text-gray-400 text-sm">Happy Members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
