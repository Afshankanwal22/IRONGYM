"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
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
            CONTACT <span className="text-red-600">US</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Have questions? We’d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Phone, title: "Phone", text: "+92 300 1234567" },
            { icon: Mail, title: "Email", text: "info@irongym.com" },
            { icon: MapPin, title: "Location", text: "Main Boulevard, Lahore" },
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

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl mx-auto bg-black/70 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 shadow-2xl"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none transition"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #dc2626" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 py-4 rounded-lg font-semibold hover:opacity-90 transition"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
