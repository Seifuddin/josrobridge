"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const countries = [
  {
    name: "University of Toronto, Canada",
    image: "/images/torontouniversity.jpg",
    description:
      "A top destination for quality education, research opportunities, and post-study pathways.",
    universities: "100+ Universities in Canada",
    courses: "10,000+ Courses",
    link: "https://www.utoronto.ca",
  },
  {
    name: "University of Oxford, United Kingdom",
    image: "/images/oxforduniversity.jpg",
    description:
      "Home to world-class universities with globally recognized degrees and rich academic history.",
    universities: "150+ Universities in UK",
    courses: "20,000+ Courses",
    link: "https://www.ox.ac.uk",
  },
  {
    name: "Technical University of Munich, Germany",
    image: "/images/munichuniversity.jpg",
    description:
      "Affordable and high-quality education with strong focus on engineering and innovation.",
    universities: "90+ Universities in Germany",
    courses: "15,000+ Courses",
    link: "https://www.tum.de",
  },
  {
    name: "Harvard University, United States",
    image: "/images/havarduniversity.webp",
    description:
      "A global leader in higher education with diverse programs and cutting-edge research.",
    universities: "200+ Universities in USA",
    courses: "30,000+ Courses",
    link: "https://www.harvard.edu",
  },
];

export default function GlobalAcademicJourney() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Start your global academic journey with the worlds top institutions
          </h2>

          <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto">
            Choose your destination and explore globally recognized universities,
            programs, and academic pathways tailored to your future.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {countries.map((country, i) => (
            <motion.a
              key={i}
              href={country.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group relative block rounded -xl overflow-hidden shadowmd"
            >

              {/* IMAGE */}
              <div className="relative h-48 mdh-64 w-full">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* UNIVERSITY NAME (INSIDE IMAGE ONLY) */}
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-semibold md: text- lg">
                    {country.name}
                  </p>
                </div>
              </div>

              {/* CONTENT BELOW IMAGE */}
              <div className="p-4 border border-gray-200 rounded-b-xl bg-white">

                <p className="text-xs text-gray-600 leading-relaxed">
                  {country.description}
                </p>

                <div className="mt-3 flex justify-between text-xs text-gray-500">
                  <span>{country.universities}</span>
                  <span>{country.courses}</span>
                </div>

                {/* LINK INDICATOR */}
                <div className="hiddn mt-3 text-xs font-medium text-orange-500 group-hover:underline">
                  Explore Programs →
                </div>

              </div>

            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}