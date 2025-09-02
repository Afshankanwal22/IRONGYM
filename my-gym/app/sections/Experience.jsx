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
            locus consequat justo odio condimentum dui. Faucibus id blandit
            feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut
            facilisi vel.
          </p>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Sem consequat fermentum pellentesque risus purus quis gravida. Nulla
            porttitor ultrices facilisi non commodo diam morbi cursus eu. Semper
            ut in mauris gravida id cursus urna. Magnis vulputate orci risus felis
            eget lectus morbi. Et cursus mauris condimentum pretium arcu sed
            dignissim.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition font-semibold">
            ABOUT US
          </button>
        </div>

        {/* Right Image with borders */}
        <div className="relative w-fit mx-auto">
          {/* Main Image */}
          <Image
            src="/Images/Place.png"
            alt="Gym Place"
            width={400}
            height={400}
            className="relative z-10 object-cover"
          />

          {/* Red Border (Top + Right + Bottom + Left) */}
          <div className="absolute top-[-40px] left-[-50px] w-100 h-full border-1 border-red-600 z-0"></div>

          {/* White Border (Right side only) */}
          <div className="absolute bottom-[-40px] right-[-50px] h-full w-100 border-1 border-white z-0"></div>
        </div>
      </div>
    </section>
  );
}
