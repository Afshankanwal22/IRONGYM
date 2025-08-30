"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section className="bg-black text-white px-10 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
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

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/Images/Place.png"   
            alt="Gym Place"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
