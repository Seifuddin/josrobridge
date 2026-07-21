"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Link2,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Globe,
} from "lucide-react";

const points = [
  {
    title: "Faster Processing",
    desc: "We eliminate unnecessary delays through direct submission channels and priority handling systems.",
    icon: Zap,
    color: "orange",
  },
  {
    title: "Direct University Access",
    desc: "We connect students directly to partner institutions—no middle layers, no confusion.",
    icon: Link2,
    color: "orange",
  },
  {
    title: "Verified Global Partners",
    desc: "Every institution we work with is vetted, accredited, and internationally recognized.",
    icon: ShieldCheck,
    color: "orange",
  },
  {
    title: "Full Journey Support",
    desc: "From consultation to visa approval and relocation—we stay with you until you land.",
    icon: Users,
    color: "orange",
  },
];

const stats = [
  { label: "Success Rate", value: "94%", color: "blue" },
  { label: "Partner Universities", value: "50+", color: "emerald" },
  { label: "Countries", value: "4+", color: "purple" },
];

export default function WhyJosroWins() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      border: "border-blue-200",
      hover: "hover:border-blue-300 hover:shadow-blue-100",
      gradient: "from-blue-500 to-blue-600",
    },
    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      border: "border-emerald-200",
      hover: "hover:border-emerald-300 hover:shadow-emerald-100",
      gradient: "from-emerald-500 to-emerald-600",
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
      border: "border-purple-200",
      hover: "hover:border-purple-300 hover:shadow-purple-100",
      gradient: "from-purple-500 to-purple-600",
    },
    orange: {
      bg: "bg-orange-50",
      icon: "text-orange-600",
      border: "border-orange-200",
      hover: "hover:border-orange-300 hover:shadow-orange-100",
      gradient: "from-orange-500 to-orange-600",
    },
  };

  return (
    <section id="whyus" className="pt-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Why Us
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Josro Bridge?
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full my-4" />

          <p className="text-lg text-gray-600">
            We don't compete on promises. We win on execution.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* LEFT COLUMN - Stats & Info */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-600" />
                Did You Know?
              </h3>

              <p className=" text-gray-600 leading-relaxed">
                Most agencies slow students down with unclear processes,
                middlemen, and poor communication.
              </p>

              <div className="h-px bg-gray-200 my-4" />

              <p className="text-gray-600 leading-relaxed">
                We removed all of that. What remains is a direct,
                structured, high-success system built for international placement.
              </p>

              {/* Stats Mini Grid */}
              <div className="hidden gridgrid-cols-3 gap-3 mt-6">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-xl bg-orange-50 border border-orange-100"
                  >
                    <div className={`text-xl font-bold text-${stat.color}-600`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-xs font-bold text-gray-600"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-600">
                Trusted by <span className="font-semibold text-orange-700">500+</span> students
              </span>
            </div>

            {/* CTA Link */}
            <motion.div
              variants={itemVariants}
              className="hidden flex items-center gap-2 text-sm font-semibold text-orange-600 cursor-pointer group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Built for serious applicants only
            </motion.div>
          </motion.div>

          {/* CENTER - Image */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flexjustify-center"
          >
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students global opportunities"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-orange-400/10" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-1.5">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Global Network
                    </p>
                    <p className="text-[10px] text-gray-500">
                      50+ partner institutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-400/20 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Points */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-3">
            {points.map((item, i) => {
              const Icon = item.icon;
              const colors = colorMap[item.color];

              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  custom={i}
                  className={`
                    group relative pb-2 px-2 rounded-md 
                    bgwhite 
                    border-b border-gray-100 
                    ${colors.hover} 
                    shadow-sm hover:shadow-lg 
                    transition-all duration-300 
                    hover:-translate-y-1
                  `}
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-md bg-gradient-to-r ${colors.gradient} blur-xl opacity-10`} />
                  </div>

                  <div className="relative flex gap-4">
                    {/* Icon Container */}
                    <div className={`
                      flex-shrink-0 w-7 h-7 
                      ${colors.bg} 
                      rounded 
                      flex items-center justify-center
                      group-hover:scale-110 
                      transition-transform duration-300
                    `}>
                      <Icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Decorative Number */}
                    <div className="absolute top-2 right-3 text-[10px] font-bold text-gray-200">
                      {(i + 1).toString().padStart(2, "0")}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* BOTTOM ACCENT BAR */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-0.5 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"
        />

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden mt-8 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-50 to-orange-50 border border-gray-200 shadow-sm">
            <span className="text-base text-gray-700">
              Ready to start your journey?
            </span>
            <a href="/apply"  className="group inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}