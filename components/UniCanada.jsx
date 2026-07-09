"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import StudyInCanadaHero from "@/components/HeroCanada";

const canadaUniversities = [
  {
    name: "University of Toronto",
    image: "/images/torontouniversity.jpg",
    link: "https://www.utoronto.ca",
    rating: 4.7,
    programs: 250,
  },
  {
    name: "University of Alberta",
    image: "/images/albertauniversity.jpeg",
    link: "https://www.ualberta.ca",
    rating: 4.3,
    programs: 160,
  },
  {
    name: "University of Calgary",
    image: "/images/history-and-alumni-from-the-university-of-calgary.jpg",
    link: "https://www.ucalgary.ca",
    rating: 4.2,
    programs: 130,
  },
  {
    name: "University of Waterloo",
    image: "/images/waterloo.jpg",
    link: "https://uwaterloo.ca",
    rating: 4.6,
    programs: 190,
  },
];

export default function CanadaUniversities() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/journey">
          <button className="hidden mb-6 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-sm text-slate-700 transition shadow-sm hover:shadow">
            ← Back to Journey
          </button>
        </Link>

        {/* Country Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🇨🇦</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Canada
            </h1>
            <span className="text-sm text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
              {canadaUniversities.length} Universities
            </span>
          </div>
          <p className="text-slate-600">
            Explore top universities in Canada
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {canadaUniversities.map((uni, index) => (
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
                <h3 className="font-semibold text-slate-900 textsm mb-2 line-clamp-2">
                  {uni.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <span>📚 {uni.programs} programs</span>
                </div>

                <div className="flex gap-2">
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 transition text-white text-xs font-medium rounded -lg text-center"
                  >
                    Explore
                  </a>
                  <a
                    href="/contacts"
                    className="flex-1 px-3 py-2 border border-orange-200 hover:bg-slate-200 transition text-orange-700 text-xs font-medium rounded -lg text-center"
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