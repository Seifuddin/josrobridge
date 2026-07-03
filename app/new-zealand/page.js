"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const newZealandUniversities = [
  {
    name: "The University of Auckland",
    image: "/images/UniversityofAuckland.jpg",
    link: "https://www.auckland.ac.nz",
    rating: 4.5,
    programs: 180,
  },
  {
    name: "The University of Waikato",
    image: "/images/UniversityofWaikato.webp",
    link: "https://www.waikato.ac.nz",
    rating: 4.0,
    programs: 85,
  },
  {
    name: "University of Canterbury",
    image: "/images/Ivey_Hall,_Lincoln_University,_New_Zealand.jpg",
    link: "https://www.canterbury.ac.nz",
    rating: 4.3,
    programs: 140,
  },
  {
    name: "University of Otago",
    image: "/images/Clocktower,_University_of_Otago,_Dunedin_2024.jpg",
    link: "https://www.otago.ac.nz",
    rating: 4.4,
    programs: 155,
  },
];

export default function NewZealandPage() {
  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/journey">
          <button className="mb-6 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-sm text-slate-700 transition shadow-sm hover:shadow">
            ← Back to Journey
          </button>
        </Link>

        {/* Country Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🇳🇿</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              New Zealand
            </h1>
            <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {newZealandUniversities.length} Universities
            </span>
          </div>
          <p className="text-slate-600">
            Explore top universities in New Zealand
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newZealandUniversities.map((uni, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={uni.image}
                  alt={uni.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1">
                  ⭐ {uni.rating}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-slate-900 text-sm mb-2 line-clamp-2">
                  {uni.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span>📚 {uni.programs} programs</span>
                </div>

                <div className="flex gap-2">
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 transition text-white text-xs font-medium rounded-lg text-center"
                  >
                    Explore
                  </a>
                  <a
                    href="/contacts"
                    className="flex-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 transition text-slate-700 text-xs font-medium rounded-lg text-center"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}