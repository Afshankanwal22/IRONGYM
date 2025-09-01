"use client";

import Image from "next/image";

export default function JoinNow() {
  return (
    <section className="bg-black text-white py-16 relative">
      <div className="container mx-auto px-6 relative">
        
        {/* Full Inverted Trapezoid Border Box */}
        <div className="relative">
          {/* Red trapezoid background as border */}
          <div className="absolute inset-0 bg-red-600 [clip-path:polygon(0%_0,100%_0,90%_100%,10%_100%)]"></div>

          {/* Inner black box to create border effect */}
          <div className="absolute inset-1 bg-black [clip-path:polygon(0%_0,100%_0,90%_100%,10%_100%)]"></div>
          
          {/* Content inside */}
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-6">
            
            {/* Left Image */}
            <div>
              <Image
                src="/Images/trainer5.jpg" 
                alt="Gym Trainer"
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Form */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4">
                LET’S START GYM <br />
                <span className="text-red-600">TRAINING NOW</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Get 50% off the first three classes you sign up for this month any GYM
                membership
              </p>

              {/* Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter Your Name..."
                  className="w-100 border border-gray-500 bg-transparent px-4 py-2 focus:outline-none focus:border-red-600"
                />
                <input
                  type="text"
                  placeholder="Numbers Phone..."
                  className="w-100 border border-gray-500 bg-transparent px-4 py-2 focus:outline-none focus:border-red-600"
                />
                <input
                  type="email"
                  placeholder="Your Email Address..."
                  className="w-100 border border-gray-500 bg-transparent px-4 py-2 focus:outline-none focus:border-red-600"
                />
                <button
                  type="submit"
                  className="w-100 border-2 border-red-600 text-red-600 font-bold py-2 hover:bg-red-600 hover:text-white transition"
                >
                  LET’S JOIN NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
