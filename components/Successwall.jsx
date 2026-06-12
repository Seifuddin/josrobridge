"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowRight, BadgeCheck } from "lucide-react";

/* =========================
   DATA
========================= */

const students = [
  {
    name: "Grace W.",
    from: "Kisumu, Kenya",
    country: "Canada 🇨🇦",
    achievement: "Studying Nursing in Toronto",
    before: "Uncertain career path in Kenya",
    after: "Fully funded nursing placement in Canada",
    image: "/images/laboratory.jpg",
  },
  {
    name: "Muriithi Nguru.",
    from: "Nairobi, Kenya",
    country: "UK 🇬🇧",
    achievement: "Computer Science Student",
    before: "Limited academic exposure locally",
    after: "Accepted into UK university program",
    image: "/images/1765669389666~2.jpg",
  },
  {
    name: "Amina S.",
    from: "Mombasa, Kenya",
    country: "Germany 🇩🇪",
    achievement: "Engineering Training Program",
    before: "Struggling to find direction",
    after: "Skilled vocational placement in Germany",
    image: "/images/istockphoto-1350330301-612x612.jpg",
  },
];

/* =========================
   COMPONENT
========================= */

export default function StudentSuccessWall() {
  const [index, setIndex] = useState(0);
  const student = students[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % students.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 bg-blue-950 relative overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER (compact) */}
        <div className="text-center mb-6">
          <p className="text-yellow-400 text-[10px] tracking-[0.3em] uppercase">
            Student Success Wall
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
            Real Student Transformations
          </h2>
        </div>

        {/* MAIN CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={student.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="bg-blue-900/40 border border-yellow-400/20 rounded-2xl overflow-hidden shadow-lg"
          >

            <div className="grid md:grid-cols-2">

              {/* IMAGE SIDE */}
              <div className="relative h-56 md:h-full">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
              </div>

              {/* CONTENT SIDE */}
              <div className="p-4 md:p-5 text-white">

                {/* TOP ROW */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold flex items-center gap-1 text-sm md:text-base">
                    <BadgeCheck className="text-yellow-400" size={16} />
                    {student.name}
                  </h3>

                  <span className="text-[10px] px-2 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/30">
                    {student.country}
                  </span>
                </div>

                {/* ACHIEVEMENT */}
                <p className="text-xs text-white/80 mt-2">
                  {student.achievement}
                </p>

                {/* BEFORE / AFTER */}
                <div className="mt-4 space-y-2">

                  <div className="p-2 rounded-lg bg-blue-950/40 border border-white/10">
                    <p className="text-[10px] text-yellow-300">Before</p>
                    <p className="text-xs text-white/70">
                      {student.before}
                    </p>
                  </div>

                  <div className="flex justify-center text-yellow-400 text-xs">
                    ↓
                  </div>

                  <div className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                    <p className="text-[10px] text-yellow-300">After</p>
                    <p className="text-xs text-white">
                      {student.after}
                    </p>
                  </div>

                </div>

                {/* FOOTER */}
                <div className="flex items-center gap-2 mt-4 text-[10px] text-white/60">
                  <MapPin size={12} className="text-yellow-400" />
                  {student.from}
                </div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOT NAV */}
        <div className="flex justify-center gap-2 mt-4">
          {students.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === index
                  ? "bg-yellow-400"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}