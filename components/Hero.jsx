"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/PhD-Scholarship-for-Domestic-International-Students-at-University-of-New-England-in-Australia-1024x684.jpg",
    title: "University Placement",
    subtitle:
      "Guiding students through applications, scholarships, and admissions to top universities worldwide.",
  },
  {
    id: 2,
    image: "/images/ielts.jpeg",
    title: "IELTS Training",
    subtitle:
      "Offering expert-led programs to help candidates achieve competitive IELTS scores.",
  },
  {
    id: 3,
    image: "/images/business-meeting-office_1268-21517.avif",
    title: "Business Consultancy",
    subtitle:
      "Providing tailored advisory services to startups, SMEs, and established firms for improved performance.",
  },
  {
    id: 4,
    image: "/images/profession.jpeg",
    title: "Professional Training",
    subtitle:
      "Delivering workshops and courses in leadership, entrepreneurship, and management skills.",
  },
  {
    id: 5,
    image: "/images/labor-markets.jpg",
    title: "Labor Mobility",
    subtitle:
      "Connecting skilled and semi-skilled labor to work placements abroad.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={slides[current].image}
          alt={slides[current].title}
          fill
          className="object-cover transition-all duration-700"
          priority
        />

        {/* BLUE + ORANGE GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/70 to-orange-500/30" />
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-xl max-w-4xl">
          {slides[current].title}
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-base md:text-xl text-gray-200 max-w-2xl leading-relaxed">
          {slides[current].subtitle}
        </p>

        {/* BUTTONS */}
        <div className="mt-7 flex gap-3 flex-wrap justify-center">

          <a
            href="#services"
            className="px-7 py-1.5 rounded -full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="px-7 py-1.5 rounded -full border border-white/50 text-white hover:border-white transition"
          >
            Contact Us
          </a>
        </div>

        {/* TRUST LINE */}
        <p className="mt-6 text-xs text-white/50">
          Trusted Education • Professional Training • Global Opportunities
        </p>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2
                   bg-white/20 hover:bg-white/40 text-white p-3
                   rounded-full transition border border-white/30"
      >
        <ChevronLeft size={26} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2
                   bg-white/20 hover:bg-white/40 text-white p-3
                   rounded-full transition border border-white/30"
      >
        <ChevronRight size={26} />
      </button>

      {/* INDICATORS */}
      <div className="absolute bottom-6 flex justify-center w-full space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-orange-500 scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}