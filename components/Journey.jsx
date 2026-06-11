"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const countries = [
  {
    name: "Canada",
    image: "/images/about.jpg",
    description:
      "A top destination for quality education, research opportunities, and post-study pathways.",
    universities: "100+ Universities",
    courses: "10,000+ Courses",
    link: "#canada",
  },
  {
    name: "United Kingdom",
    image: "/images/visa.webp",
    description:
      "Home to world-class universities with globally recognized degrees and rich academic history.",
    universities: "150+ Universities",
    courses: "20,000+ Courses",
    link: "#uk",
  },
  {
    name: "Germany",
    image: "/images/ielts.jpeg",
    description:
      "Affordable and high-quality education with strong focus on engineering and innovation.",
    universities: "90+ Universities",
    courses: "15,000+ Courses",
    link: "#germany",
  },
  {
    name: "United States",
    image: "/images/Graduation_StudentsGroup_Smiling_Outdoor_GettyImages-907837926.jpg",
    description:
      "A global leader in higher education with diverse programs and cutting-edge research.",
    universities: "200+ Universities",
    courses: "30,000+ Courses",
    link: "#usa",
  },
];

export default function GlobalAcademicJourney() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-8">
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
              whileHover={{ y: -5 }}
              className="group relative block rounded-2xl overflow-hidden shadow-md"
            >

              {/* IMAGE */}
              <div className="relative h-44 md:h-64 w-full">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* COUNTRY NAME (INSIDE IMAGE ONLY) */}
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-semibold text-lg">
                    {country.name}
                  </p>
                </div>
              </div>

              {/* CONTENT BELOW IMAGE */}
              <div className="p-4 border border-gray-100 rounded-b-2xl bg-white">

                <p className="text-xs text-gray-600 leading-relaxed">
                  {country.description}
                </p>

                <div className="mt-3 flex justify-between text-xs text-gray-500">
                  <span>{country.universities}</span>
                  <span>{country.courses}</span>
                </div>

                {/* LINK INDICATOR */}
                <div className="mt-3 text-xs font-medium text-orange-500 group-hover:underline">
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