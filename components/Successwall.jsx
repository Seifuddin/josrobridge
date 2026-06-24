"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
GraduationCap,
MapPin,
BadgeCheck,
ArrowLeft,
ArrowRight,
} from "lucide-react";

const students = [
{
name: "Grace W.",
from: "Kisumu, Kenya",
country: "Canada 🇨🇦",
achievement: "Studying Nursing in Toronto",
before: "Uncertain career path",
after: "Fully funded nursing placement",
story:
"Josro Bridge guided me through admissions and scholarship opportunities, helping me secure a life-changing nursing placement in Canada.",
image: "/images/laboratory.jpg",
},
{
name: "Muriithi Nguru",
from: "Nairobi, Kenya",
country: "United Kingdom 🇬🇧",
achievement: "Computer Science Student",
before: "Limited academic opportunities",
after: "Accepted into a UK university",
story:
"The entire application process felt simple and organized. Today I'm pursuing Computer Science in the UK.",
image: "/images/1765669389666~2.jpg",
},
{
name: "Amina S.",
from: "Mombasa, Kenya",
country: "Germany 🇩🇪",
achievement: "Engineering Training Program",
before: "Unsure about career direction",
after: "Vocational placement in Germany",
story:
"I discovered a clear pathway into engineering and secured an international vocational opportunity in Germany.",
image: "/images/profession.jpeg",
},

{
name: "Sharon N.",
from: "Eldoret, Kenya",
country: "New Zealand 🇳🇿",
achievement: "Bachelor of Hospitality Management",
before: "Unsure which country matched her career goals",
after: "Accepted into a leading New Zealand institution",
story:
"The guidance I received helped me choose the right course and successfully begin my international education journey.",
image: "/images/Graduation_StudentsGroup_Smiling_Outdoor_GettyImages-907837926.jpg",
},
{
name: "Kevin O.",
from: "Kisii, Kenya",
country: "Australia 🇦🇺",
achievement: "Information Technology Student",
before: "Limited access to global opportunities",
after: "Started an IT degree in Australia",
story:
"From university selection to visa processing, every step was handled professionally and efficiently.",
image: "/images/download.jpg",
},

{
name: "Brian K.",
from: "Nakuru, Kenya",
country: "Australia 🇦🇺",
achievement: "Business Management Student",
before: "Unsure where to study",
after: "Accepted into a leading Australian institution",
story:
"With expert guidance, I found the right university and course to match my long-term career goals.",
image: "/images/IELTS-Training-Centre.jpg",
},
];

export default function StudentSuccessWall() {
const [active, setActive] = useState(0);

const slides = [];
for (let i = 0; i < students.length; i += 2) {
slides.push(students.slice(i, i + 2));
}

useEffect(() => {
const timer = setInterval(() => {
setActive((prev) => (prev + 1) % slides.length);
}, 5000);


return () => clearInterval(timer);


}, [slides.length]);

const nextSlide = () => {
setActive((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
setActive((prev) => (prev - 1 + slides.length) % slides.length);
};

return ( <section className="py-16 bg-white"> <div className="max-w-7xl mx-auto px-5">
{/* Header */} <div className="text-center max-w-3xl mx-auto mb-10"> <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs fontmedium"> <GraduationCap size={16} />
Student Success Stories </div>


      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">
        Real Students. Real Transformations.
      </h2>

      <p className="mt-3 text-slate-600">
        See how students from Kenya have successfully achieved their
        academic and career ambitions through international opportunities.
      </p>
    </div>

    {/* Slider Controls */}
    <div className="flex justify-end gap-3 mb-5">
      <button
        onClick={prevSlide}
        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition"
      >
        <ArrowLeft size={18} />
      </button>

      <button
        onClick={nextSlide}
        className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition"
      >
        <ArrowRight size={18} />
      </button>
    </div>

    {/* Slides */}
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {slides[active].map((student) => (
          <div
            key={student.name}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <div className="relative h-56">
              <Image
                src={student.image}
                alt={student.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold shadow">
                  {student.country}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold textxl">
                  {student.name}
                </h3>

                <p className="text-sm text-white/90">
                  {student.achievement}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 text-orange-600 text-sm fontmedium">
                <BadgeCheck size={15} />
                Verified Success Story
              </div>

              <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
                <MapPin size={14} />
                {student.from}
              </div>

              <p className="mt-4 text-slate-600 text-sm leading-relaxed italic">
                "{student.story}"
              </p>

              {/* Journey */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <p className="text-xs uppercase font-semibold text-slate-500">
                    Before
                  </p>

                  <p className="text-sm text-slate-700 mt-1">
                    {student.before}
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-100 rounded-xl p-3">
                  <p className="text-xs uppercase font-semibold text-orange-600">
                    After
                  </p>

                  <p className="text-sm text-slate-800 mt-1 font-medium">
                    {student.after}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-8">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            active === index
              ? "w-8 bg-orange-500"
              : "w-2.5 bg-slate-300"
          }`}
        />
      ))}
    </div>
  </div>
</section>


);
}
