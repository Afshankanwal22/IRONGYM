"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white border-b border-gray-800">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        IRON<span className="text-red-600">GYM</span>
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex space-x-10 text-lg font-medium">
        <li>
          <Link href="/" className="hover:text-red-600 transition">HOME</Link>
        </li>
        <li>
          <Link href="/service" className="hover:text-red-600 transition">SERVICE</Link>
        </li>
        <li>
          <Link href="/trainers" className="hover:text-red-600 transition">TRAINERS</Link>
        </li>
        <li>
          <Link href="/testimonial" className="hover:text-red-600 transition">TESTIMONIAL</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-red-600 transition">CONTACT US</Link>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
        STARTED NOW
      </button>
    </nav>
  );
}
