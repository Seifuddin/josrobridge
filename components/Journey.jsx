"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    universities: [
      {
        name: "University of Gloucestershire",
        image: "/images/UniversityofGloucestershire.png",
        link: "https://www.glos.ac.uk",
      },
      {
        name: "York St John University",
        image: "/images/YorkStJohnUniversity.webp",
        link: "https://www.yorksj.ac.uk",
      },
      {
        name: "Coventry University",
        image: "/images/CoventryUniversity.jpg",
        link: "https://www.coventry.ac.uk",
      },
    ],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    universities: [
      {
        name: "The University of Queensland",
        image: "/images/UniversityofQueensland.jpg",
        link: "https://www.uq.edu.au",
      },
      {
        name: "The University of Melbourne",
        image: "/images/UniversityofMelbourne.jpeg",
        link: "https://www.unimelb.edu.au",
      },
    ],
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    universities: [
      {
        name: "The University of Auckland",
        image: "/images/UniversityofAuckland.jpg",
        link: "https://www.auckland.ac.nz",
      },
      {
        name: "The University of Waikato",
        image: "/images/UniversityofWaikato.webp",
        link: "https://www.waikato.ac.nz",
      },
    ],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    universities: [
      {
        name: "University of Toronto",
        image: "/images/torontouniversity.jpg",
        link: "https://www.utoronto.ca",
      },
      {
        name: "University of Alberta",
        image: "/images/albertauniversity.jpeg",
        link: "https://www.ualberta.ca",
      },
      {
        name: "University of Calgary",
        image: "/images/university-of-calgary-campus-image.webp",
        link: "https://www.ucalgary.ca",
      },
    ],
  },
];

export default function GlobalAcademicJourney() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-medium">
            Global Opportunities
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Start Your Global Academic Journey
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Explore partner universities across the United Kingdom, Australia,
            and New Zealand and build your future with world-class education.
          </p>
        </div>

        {/* FEATURED SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl mb-20"
        >
          <div className="relative min-h-[520px]">
            <Image
              src="/images/UniversityofMelbourne.jpeg"
              alt="University of Melbourne"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

            {/* GRID LAYOUT */}
            <div className="relative z-10 grid lg:grid-cols-5 min-h-[520px]">

              {/* LEFT SIDE */}
              <div className="lg:col-span-3 flex items-center">
                <div className="p-8 md:p-12 lg:p-16 text-white max-w-2xl">
                  <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-sm">
                    Featured University
                  </span>

                  <h3 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
                    The University of Melbourne
                  </h3>

                  <p className="mt-5 text-white/90 text-lg leading-relaxed">
                    One of Australia's top universities, globally recognized for
                    academic excellence, research innovation, and graduate success.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://www.unimelb.edu.au"
                      target="_blank"
                      className="px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition font-medium"
                    >
                      Explore Programs
                    </a>

                    <a
                      href="#contact"
                      className="px-7 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="lg:col-span-2 flex items-center justify-center p-8">
                <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

                  <h4 className="text-white text-xl font-semibold mb-6">
                    Study Abroad Overview
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl text-center">
                      <div className="text-3xl font-bold text-orange-400">10</div>
                      <div className="text-sm text-white/80">Universities</div>
                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl text-center">
                      <div className="text-3xl font-bold text-orange-400">4</div>
                      <div className="text-sm text-white/80">Countries</div>
                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl text-center">
                      <div className="text-3xl font-bold text-orange-400">1000+</div>
                      <div className="text-sm text-white/80">Courses</div>
                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl text-center">
                      <div className="text-3xl font-bold text-orange-400">24/7</div>
                      <div className="text-sm text-white/80">Support</div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h5 className="text-white font-medium mb-3">
                      Destinations
                    </h5>

                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-2 bg-white/10 rounded-full text-white">
                        🇬🇧 UK
                      </span>
                      <span className="px-3 py-2 bg-white/10 rounded-full text-white">
                        🇦🇺 Australia
                      </span>
                      <span className="px-3 py-2 bg-white/10 rounded-full text-white">
                        🇳🇿 New Zealand
                      </span>
                      <span className="px-3 py-2 bg-white/10 rounded-full text-white">
                        🇨🇦 Canada
                      </span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 block text-center bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-medium"
                  >
                    Start Application
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DESTINATION SECTIONS */}
        <div className="space-y-16">
          {destinations.map((destination, index) => (
            <div key={index}>
              {/* COUNTRY HEADER */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{destination.flag}</span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {destination.country}
                </h3>
              </div>

              {/* UNIVERSITIES */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {destination.universities.map((uni, i) => (
    <motion.a
      key={i}
      href={uni.link}
      target="_blank"
      whileHover={{ y: -5 }}
      className="group relative h-72 rounded-2xl overflow-hidden"
    >
      <Image
        src={uni.image}
        alt={uni.name}
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute bottom-0 p-5 text-white">
        <h4 className="text-lg font-semibold">{uni.name}</h4>
        <p className="text-sm text-white/80 mt-2">
          View admissions and programs
        </p>
        <div className="mt-3 text-orange-300 text-sm font-medium">
          Explore →
        </div>
      </div>
    </motion.a>
  ))}

  {/* 🔥 FILLER CARD (AUTO ADD WHEN LESS THAN 3) */}
  {destination.universities.length < 3 && (
    <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center p-6">
      <div className="text-center text-white">
        <h4 className="text-lg font-semibold">
          Why Study in {destination.country}?
        </h4>

        <p className="text-sm mt-3 text-white/90">
          {destination.country === "Australia" && (
            <>
              Top-ranked universities, strong job opportunities, and post-study work visas.
            </>
          )}

          {destination.country === "New Zealand" && (
            <>
              Safe environment, affordable education, and globally recognized degrees.
            </>
          )}

          {destination.country === "United Kingdom" && (
            <>
              World-class education, short degree duration, and global recognition.
            </>
          )}
        </p>

        <div className="mt-4 text-sm font-medium underline">
          Learn More →
        </div>
      </div>
    </div>
  )}
</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}