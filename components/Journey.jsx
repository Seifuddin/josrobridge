"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const destinations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    color: "from-red-600 to-blue-600",
    universities: [
      {
        name: "University of Gloucestershire",
        image: "/images/UniversityofGloucestershire.png",
        link: "https://www.glos.ac.uk",
        rating: 4.2,
        programs: 120,
      },
      {
        name: "York St John University",
        image: "/images/YorkStJohnUniversity.webp",
        link: "https://www.yorksj.ac.uk",
        rating: 4.1,
        programs: 95,
      },
      {
        name: "Coventry University",
        image: "/images/CoventryUniversity.jpg",
        link: "https://www.coventry.ac.uk",
        rating: 4.4,
        programs: 150,
      },
      {
        name: "University of Bristol",
        image: "/images/Geography_Department,_University_of_Bristol_-_geograph.org.uk_-_201159.jpg",
        link: "https://www.bristol.ac.uk",
        rating: 4.5,
        programs: 180,
      },
    ],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    color: "from-yellow-600 to-green-700",
    universities: [
      {
        name: "The University of Queensland",
        image: "/images/qweensland.png",
        link: "https://www.uq.edu.au",
        rating: 4.6,
        programs: 200,
      },
      {
        name: "The University of Melbourne",
        image: "/images/UniversityofMelbourne.jpeg",
        link: "https://www.unimelb.edu.au",
        rating: 4.8,
        programs: 220,
      },
      {
        name: "The University of Adelaide",
        image: "/images/adelaide.jpeg",
        link: "https://www.adelaide.edu.au",
        rating: 4.4,
        programs: 170,
      },
      {
        name: "The University of Sydney",
        image: "/images/University-of-Sydney-campus.jpg",
        link: " https://www.sydney.edu.au/",
        rating: 4.8,
        programs: 220,
      },
    ],
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    color: "from-blue-700 to-red-600",
    universities: [
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
    ],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    color: "from-red-600 to-red-800",
    universities: [
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
    ],
  },
];

export default function GlobalAcademicJourney() {
  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* COMPACT HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/50 text-orange-600 text-[10px] font-semibold tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
            Global Network
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            <span className="text-blue-950">Global</span>
            <span className="text-blue-600"> Academic Journey</span>
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            14+ universities • 4 countries • 1000+ programs
          </p>
        </div>

        {/* COMPACT FEATURED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative h-[2000px] md:h-[220px]">
              <Image
                src="/images/UniversityofMelbourne.jpeg"
                alt="University of Melbourne"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

              <div className="relative z-10 flex items-center h-full px-6 md:px-8">
                <div className="max-w-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-yellow-400">🏆</span>
                    <span className="text-[10px] text-white/80 font-medium tracking-wider uppercase">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    University of Melbourne
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-white/70 text-xs">
                    <span>⭐ 4.8</span>
                    <span className="w-px h-3 bg-white/30" />
                    <span>220+ programs</span>
                    <span className="w-px h-3 bg-white/30" />
                    <span>🇦🇺 Australia</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <a
                      href="https://www.unimelb.edu.au"
                      target="_blank"
                      className="px-4 py-1 bg-white text-slate-900 hover:bg-yellow-50 transition rounded-full text-xs font-medium"
                    >
                      Explore
                    </a>
                    <a
                      href="#contact"
                      className="px-4 py-1 border border-white/30 hover:bg-white/10 transition rounded-full text-xs text-white"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* COMPACT DESTINATION GRID */}
        <div className="space-y-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Compact Country Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{destination.flag}</span>
                <h3 className="text-sm font-bold text-slate-800">
                  {destination.country}
                </h3>
                <span className="text-[10px] text-slate-400 font-medium">
                  {destination.universities.length} unis
                </span>
              </div>

              {/* University Cards - Smaller Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {destination.universities.map((uni, i) => (
                  <motion.a
                    key={i}
                    href={uni.link}
                    target="_blank"
                    whileHover={{ y: -3 }}
                    className="group relative h-32 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-400"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Rating Badge - Smaller */}
                    <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full text-white text-[8px] font-medium flex items-center gap-0.5">
                      ⭐ {uni.rating}
                    </div>

                    <div className="absolute bottom-0 p-2 text-white">
                      <h4 className="text-[10px] font-semibold leading-tight line-clamp-2">
                        {uni.name}
                      </h4>
                      <p className="text-[8px] text-white/70 mt-0.5">
                        📚 {uni.programs}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* COMPACT BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden mt-10"
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-5">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-sm font-bold text-white">
                  Ready to Begin?
                </h3>
                <p className="text-xs text-slate-300">
                  Join 1000+ students on their global journey
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="#contact"
                  className="px-5 py-1.5 bg-blue-600 hover:bg-blue-700 transition rounded-full text-white text-xs font-medium shadow-lg shadow-blue-500/25"
                >
                  Start Application
                </a>
                <a
                  href="#"
                  className="px-5 py-1.5 bg-white/10 hover:bg-white/20 transition rounded-full text-white text-xs font-medium border border-white/20"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}