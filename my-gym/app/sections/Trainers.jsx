"use client";

import Image from "next/image";

export default function Trainers() {
  const trainers = [
    {
      name: "BORNEY EXITEID",
      image: "/Images/trainer1.jpg",
    },
    {
      name: "ELSA WINDIA",
      image: "/Images/trainer2.jpg",
    },
    {
      name: "GEOURGE ARYO",
      image: "/Images/trainer3.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          OUR PROFESSIONAL <span className="text-red-600">TRAINERS</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Whether you're looking to set up a home gym or enhance your current workout routine
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <div
              key={i}
              className="border-2 border-red-600 rounded-lg overflow-hidden group hover:scale-105 transform transition duration-300"
            >
              {/* Trainer Image */}
              <div className="w-full h-80 relative">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover border-b-2 border-red-600"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{trainer.name}</h3>
                <p className="text-gray-400 mt-1">Rate Trainer :</p>
                <div className="flex justify-center mt-2 text-yellow-400">
                  {"★★★★★"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
