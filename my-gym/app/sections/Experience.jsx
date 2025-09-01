"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section
      className="bg-black text-white px-10 py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/Images/about us.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-extrabold leading-snug">
            WE HAVE A LOT OF <br />
            <span className="text-red-600">EXPERIENCE</span>
          </h2>

          <p className="mt-6 text-gray-300 text-sm leading-relaxed">
            In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam
            lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at
            locus consequat justo odio condimentum dui. Faucibus id blandit feugiat
            mi tellus sit etiam donec aliquam. Dictumst egestas ut facilisi vel.
          </p>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Sem consequat fermentum pellentesque risus purus quis gravida. Nulla
            porttitor ultrices facilisi non commodo diam morbi cursus eu. Semper ut in
            mauris gravida id cursus urna. Magnis vulputate orci risus felis eget lectus
            morbi. Et cursus mauris condimentum pretium arcu sed dignissim.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition font-semibold">
            ABOUT US
          </button>
        </div>

        {/* Right Image with borders */}
        <div className="relative flex justify-center">
          {/* Image */}
          <Image
            src="/Images/Place.png"
            alt="Gym Place"
            width={350}
            height={300}
            className="rounded-lg shadow-lg relative z-10"
          />

          {/* Top + Left + Right red border */}
          <div
            className="absolute border-t border-l border-r border-red-600"
            style={{
              width: "334px",
              height: "496px",
              bottom: "-10px",
              left: "60px",
            }}
          ></div>

          {/* Right side white border (square bottom) */}
          <div
            className="absolute border-l  border-white"
            style={{
              height: "496px",
              width: "4px",
              top: "0",
              right: "-10px",
            }}
          ></div>

        </div>
      </div>
    </section>
  );
}
