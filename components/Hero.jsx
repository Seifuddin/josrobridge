"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
ChevronLeft,
ChevronRight,
GraduationCap,
Globe,
Briefcase,
ArrowRight,
} from "lucide-react";

const slides = [
{
id: 1,
image:
"/images/PhD-Scholarship-for-Domestic-International-Students-at-University-of-New-England-in-Australia-1024x684.jpg",
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
"Providing tailored advisory services to startups, SMEs, and established firms.",
},
{
id: 4,
image: "/images/profession.jpeg",
title: "Professional Training",
subtitle:
"Delivering leadership, entrepreneurship, and management development programs.",
},
{
id: 5,
image: "/images/labor-markets.jpg",
title: "Labor Mobility",
subtitle:
"Connecting skilled professionals to international work opportunities.",
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
setCurrent((prev) =>
prev === 0 ? slides.length - 1 : prev - 1
);

const nextSlide = () =>
setCurrent((prev) =>
prev === slides.length - 1 ? 0 : prev + 1
);

return ( <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
{/* Background */} <div className="absolute inset-0"> <Image
       src={slides[current].image}
       alt={slides[current].title}
       fill
       priority
       className="object-cover transition-all duration-700"
     />

    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-orange-950/40" />
  </div>

  {/* Content */}
  <div className="relative z-10 h-full">
    <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
      <div className="max-w-2xl">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-500 text-xs md:text-sm">
          <Globe size={14} />
          Global Education & Consultancy
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
          {slides[current].title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-basemd: text-lg text-slate-200 leading-relaxed max-w-xl">
          {slides[current].subtitle}
        </p>

        {/* Service Highlights */}
        <div className="mt-5 flex flex-wrap gap-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-xs md:text-sm">
            🎓 Study Abroad
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-xs md:text-sm">
            🌍 Global Opportunities
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-xs md:text-sm">
            💼 Career Development
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded -full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Explore Services
            <ArrowRight size={16} />
          </a>

          <a
            href="#contact"
            className="px-5 py-1.5 rounded -full border border-white/30 text-white hover:bg-white/10 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Trust Statement */}
        <div className="mt-6 flex flex-wrap gap-4 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <GraduationCap size={15} />
            International Education
          </div>

          <div className="flex items-center gap-2">
            <Briefcase size={15} />
            Career Pathways
          </div>

          <div className="flex items-center gap-2">
            <Globe size={15} />
            Global Mobility
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Service Tabs */}
  <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 hidden lg:flex gap-2">
    {slides.map((slide, index) => (
      <button
        key={slide.id}
        onClick={() => setCurrent(index)}
        className={`px-4 py-2 rounded-xl backdrop-blur-md border transition-all text-sm ${
          current === index
            ? "bg-orange-500 text-white border-orange-500"
            : "bg-white/10 text-white border-white/20 hover:bg-white/20"
        }`}
      >
        {slide.title}
      </button>
    ))}
  </div>

  {/* Left Arrow */}
  <button
    onClick={prevSlide}
    className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
  >
    <ChevronLeft size={22} />
  </button>

  {/* Right Arrow */}
  <button
    onClick={nextSlide}
    className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
  >
    <ChevronRight size={22} />
  </button>

  {/* Dots */}
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`transition-all rounded-full ${
          current === index
            ? "w-8 h-2.5 bg-orange-500"
            : "w-2.5 h-2.5 bg-white/40"
        }`}
      />
    ))}
  </div>
</section>


);
}
