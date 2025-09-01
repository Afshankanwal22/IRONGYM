"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "JHONY BREAKER",
    text: "I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
    image: "/Images/trainer4.jpg",
  },
  {
    name: "ELSA WINDIA",
    text: "Joining IronGym was the best decision of my life. The trainers are professional, the equipment is top-notch, and the energy here pushes me to give my best every single day.",
    image: "/Images/trainer2.png",
  },
  {
    name: "GEORGE ARYO",
    text: "The community and motivation here is unmatched. Every workout feels amazing and I keep getting stronger week after week.",
    image: "/images/trainer3.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="bg-black text-white py-16 px-6 relative">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4">
          WHAT <span className="text-red-600">CLIENTS SAY</span> WITH US
        </h2>

        {/* Testimonial Box */}
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 italic mb-6">
            "{testimonials[index].text}"
          </p>
          <div className="flex justify-center text-yellow-400 mb-4">
            {"★★★★★"}
          </div>
          <h3 className="text-xl font-bold">{testimonials[index].name}</h3>
          <div className="mt-4 flex justify-center">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-24 h-24  border-2 border-red-600 object-cover"
            />
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-red-600" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
