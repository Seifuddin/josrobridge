"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Globe,
  TrendingUp,
  Building2,
  ArrowUpRight,
  Award,
  ChevronRight,
} from "lucide-react";

/* =========================
   COUNTER HOOK
========================= */
function useCount(target, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / (duration / (1000 / steps));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setValue(Math.floor(current));
    }, 1000 / steps);

    return () => clearInterval(timer);
  }, [target, start]);

  return value;
}

/* =========================
   DATA
========================= */
const stats = [
  {
    label: "Students Placed",
    value: 500,
    icon: Users,
    suffix: "+",
    color: "blue",
    description: "Global placements",
  },
  {
    label: "Countries",
    value: 4,
    icon: Globe,
    suffix: "+",
    color: "emerald",
    description: "Study destinations",
  },
  {
    label: "Success Rate",
    value: 94,
    icon: TrendingUp,
    suffix: "%",
    color: "purple",
    description: "Visa & admission",
  },
  {
    label: "Partner Institutions",
    value: 50,
    icon: Building2,
    suffix: "+",
    color: "orange",
    description: "University network",
  },
];

/* =========================
   STAT CARD - COMPACT VERSION
========================= */
function StatCard({ stat, start, index }) {
  const count = useCount(stat.value, start);
  const Icon = stat.icon;

  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    emerald: "from-emerald-500 to-emerald-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  };

  const bgColorMap = {
    blue: "bg-blue-500/10 border-blue-500/20",
    emerald: "bg-emerald-500/10 border-emerald-500/20",
    purple: "bg-purple-500/10 border-purple-500/20",
    orange: "bg-orange-500/10 border-orange-500/20",
  };

  const iconColorMap = {
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    purple: "text-purple-400",
    orange: "text-orange-400",
  };

  const glowColorMap = {
    blue: "bg-blue-500/20",
    emerald: "bg-emerald-500/20",
    purple: "bg-purple-500/20",
    orange: "bg-orange-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div
        className={`
        relative rounded-xl p-4 
        bg-gradient-to-br from-white/5 to-white/10 
        backdrop-blur-xl 
        border border-white/10 
        hover:border-white/20 
        transition-all duration-500 
        hover:scale-[1.02] 
        hover:shadow-2xl 
        hover:shadow-${stat.color}-500/10
        overflow-hidden
      `}
      >
        {/* Glow Effect */}
        <div
          className={`
          absolute -top-20 -right-20 w-32 h-32 
          ${glowColorMap[stat.color]} 
          blur-3xl rounded-full 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-700
        `}
        />

        {/* Card Content */}
        <div className="relative z-10">
          {/* Icon & Label */}
          <div className="flex items-start justify-between mb-3">
            <div
              className={`
              p-2 rounded-lg 
              ${bgColorMap[stat.color]} 
              border 
              group-hover:scale-110 
              transition-transform duration-300
            `}
            >
              <Icon className={`w-4 h-4 ${iconColorMap[stat.color]}`} />
            </div>

            <motion.div
              initial={{ rotate: -45, opacity: 0 }}
              animate={start ? { rotate: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-[8px] font-medium text-white/40 uppercase tracking-wider"
            >
              Live
            </motion.div>
          </div>

          {/* Value */}
          <div className="mb-0.5">
            <span className="text-2xl font-bold text-white tracking-tight">
              {count.toLocaleString()}
            </span>
            <span className={`text-lg font-bold ${iconColorMap[stat.color]} ml-0.5`}>
              {stat.suffix}
            </span>
          </div>

          {/* Label */}
          <h4 className="text-xs font-semibold text-white/90">{stat.label}</h4>

          {/* Description */}
          <p className="text-[10px] text-white/40 mt-0.5">{stat.description}</p>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={start ? { width: "100%" } : {}}
            transition={{
              delay: index * 0.1 + 0.5,
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-3 h-0.5 bg-white/5 rounded-full overflow-hidden"
          >
            <div
              className={`h-full bg-gradient-to-r ${colorMap[stat.color]} rounded-full`}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN COMPONENT - COMPACT VERSION
========================= */
export default function GlobalOpportunitiesCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const [start, setStart] = useState(false);
  const [particles, setParticles] = useState([]);

  // Handle particles on client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newParticles = [...Array(15)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 10 + 10,
        size: Math.random() * 2 + 1,
      }));
      setParticles(newParticles);
    }
  }, []);

  useEffect(() => {
    if (inView && !start) {
      setStart(true);
    }
  }, [inView, start]);

  return (
    <section className="relative py-16 bg-[#0a0f1e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

        {/* Gradient Orbs - Smaller */}
        <div className="absolute -top-1/3 -left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/3 -right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles - Fixed */}
      {particles.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
              }}
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                y: [
                  particle.y,
                  particle.y - 100,
                  particle.y + 100,
                  particle.y,
                ],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={start ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-medium text-white/70 uppercase tracking-wider">
              Live Analytics
            </span>
          </motion.div>

          {/* Main Heading - Smaller */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Real Impact,
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Global Results
            </span>
          </h2>

          <p className="text-sm text-white/50 max-w-2xl mx-auto">
            Transforming international education through verified placements
            and measurable success rates.
          </p>

          {/* Trust Indicators - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={start ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <div className="flex items-center gap-1.5 text-white/40">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px]">Verified by</span>
              <span className="text-white/80 font-medium text-[10px]">
                QS Rankings
              </span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-1.5 text-white/40">
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px]">98% Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid - 2x2 on mobile, 4x4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} start={start} index={index} />
          ))}
        </div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={start ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-xs text-white/60">Ready to start your journey?</span>
            <a href="/apply" className="group inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-xs font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave - Smaller */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          className="w-full h-8 opacity-10"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            className="fill-white/5"
          />
        </svg>
      </div>
    </section>
  );
}