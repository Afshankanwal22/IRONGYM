"use client";
import { motion } from "framer-motion";
import { Dumbbell, Users, Award } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div
      className="relative bg-black text-white min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('Images/about us.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95 backdrop-blur-sm"></div>

      <div className="relative z-10 px-6 md:px-10 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            ABOUT <span className="text-red-600">US</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            At <span className="text-red-500 font-semibold">IronGym</span>, we
            believe fitness is more than just training — it’s a lifestyle.
            We’re here to help you unlock your potential and transform your
            body with the best facilities and expert trainers.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Dumbbell,
              title: "Modern Equipment",
              text: "Train with the latest machines and free weights designed for maximum results.",
            },
            {
              icon: Users,
              title: "Expert Trainers",
              text: "Work with certified trainers who guide you every step of the way.",
            },
            {
              icon: Award,
              title: "Proven Results",
              text: "Thousands of happy members who achieved their fitness goals with us.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 text-center hover:border-red-600 shadow-lg transition"
            >
              <item.icon className="mx-auto text-red-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <h3 className="text-3xl font-bold mb-6">
            We Have <span className="text-red-600">Years of Experience</span>
          </h3>
          <p className="text-gray-400 mb-10">
            With over two decades of experience in the fitness industry,
            IronGym has become a trusted name for those who want serious
            results. Whether you’re just starting or a professional athlete,
            we’ve got everything you need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "15K+", label: "Members Joined" },
              { number: "14K+", label: "Happy Clients" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-black/70 backdrop-blur-lg border border-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h2 className="text-4xl font-bold text-red-500">{stat.number}</h2>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trainers Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="text-red-600">Professional Trainers</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Carter", role: "Strength Coach", img: "/Images/trainer1.jpg" },
              { name: "Emily Stone", role: "Fitness Instructor", img: "/Images/trainer2.jpg" },
              { name: "Michael Lee", role: "Nutrition Expert", img: "/Images/trainer3.jpg" },
            ].map((trainer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black/60 backdrop-blur-lg border border-gray-800 rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold">{trainer.name}</h4>
                  <p className="text-gray-400">{trainer.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
