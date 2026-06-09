"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-blue-950 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Building Bridges of Opportunity
        </motion.h1>

        <p className="text-xl max-w-3xl mb-8">
          Empowering students, professionals and organizations
          through international education, consultancy,
          IELTS training and labor mobility solutions.
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}