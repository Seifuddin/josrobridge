"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Globe,
  TrendingUp,
  Building2,
} from "lucide-react";

/* =========================
   COUNTER HOOK (SAFE)
========================= */
function useCount(target, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = target / (2 * 60);

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setValue(Math.floor(current));
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, start]);

  return value;
}

/* =========================
   DATA
========================= */
const stats = [
  { label: "Students Placed", value: 1240, icon: Users, suffix: "+" },
  { label: "Countries Covered", value: 12, icon: Globe, suffix: "+" },
  { label: "Success Rate", value: 94, icon: TrendingUp, suffix: "%" },
  { label: "Partner Institutions", value: 80, icon: Building2, suffix: "+" },
];

/* =========================
   CARD
========================= */
function StatTile({ stat, start, index }) {
  const count = useCount(stat.value, start);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05 }}
      className="relative"
    >
      <div className="rounded-2xl p-3 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden relative">
        {/* glow */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-orange-400/10 blur-3xl rounded-full" />

        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-lg bg-orange-400/10 border border-orange-400/20">
            <Icon className="text-orange-400" size={15} />
          </div>

          <p className="text-[10px] text-white/70 uppercase tracking-wide">
            {stat.label}
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white leading-none">
          {count.toLocaleString()}
          <span className="text-orange-400 ml-1">{stat.suffix}</span>
        </h3>
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
export default function GlobalOpportunitiesCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });

  const start = inView;

  return (
    <div className="relative">
      <section className="sticky top-0 min-h-[500px] py-10 flex items-center bg-[#050f24] overflow-hidden">
        {/* BACKGROUND MAP */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="world map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050f24] via-[#061a38] to-[#050f24]" />

        {/* CONTENT */}
        <div
          ref={ref}
          className="relative max-w-7xl mx-auto px-6 w-full py-2"
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={start ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-3"
          >
            <p className="text-[10px] tracking-[0.3em] text-orange-400 uppercase">
              Global Impact Dashboard
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-white mt-1.5">
              Real Results Across the World
            </h2>

            <p className="text-white/60 mt-1.5 text-xs max-w-xl mx-auto">
              Scroll-triggered live analytics from real international
              placements.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-12 gap-4">
            {/* LEFT PANEL */}
            <div className="md:col-span-5">
              <div className="h-full rounded-2xl p-4 border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden">
                {/* glow */}
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-orange-400/10 blur-3xl rounded-full" />

                <h3 className="text-white text-base font-semibold">
                  Global Trust Network
                </h3>

                <p className="text-white/60 text-xs mt-1.5 leading-relaxed">
                  Direct access to universities, employers, and training
                  institutions across multiple continents with verified
                  pathways.
                </p>

                <div className="mt-3 border-l-2 border-orange-400 pl-3">
                  <p className="text-orange-400 text-xs">
                    Built for serious international applicants
                  </p>
                </div>

                {/* PULSING DOTS */}
                <div className="absolute bottom-4 right-4 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse delay-150" />
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse delay-300" />
                </div>
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className="md:col-span-7 grid grid-cols-2 gap-2.5">
              {stats.map((s, i) => (
                <StatTile key={i} stat={s} start={start} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}