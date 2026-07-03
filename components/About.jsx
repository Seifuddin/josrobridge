"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  GraduationCap,
  Briefcase,
  Sparkles,
  ArrowRight,
  Building2,
} from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      icon: GraduationCap,
      title: "University Placement",
      description: "Top-tier universities worldwide",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "International career pathways",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Building2,
      title: "Global Network",
      description: "15+ countries, 50+ partners",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Background Decorations - Minimal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-orange-200/20 to-orange-100/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-gradient-to-tl from-blue-200/15 to-blue-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 smpx-6">
        {/* TITLE AND SUBTITLE AT TOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/50">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-[10px] font-sembold text-orange-600 tracking-widest uppercase">
              About Josro Bridge
            </span>
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            <span className="text-blue-950">Building Bridges to</span>
            <br className="hidden sm:block" />
            <span className="text-blue-600"> Global Opportunities</span>
          </h2>

          <p className="mt-3 text-slate-600 text-smmd: text-base max-w-2xl mx-auto">
            We connect ambitious individuals with world-class universities,
                IELTS preparation programs, and career pathways that create
                lasting impact.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* LEFT COLUMN - Now has the image (swapped from right) */}
          <motion.div variants={itemVariants} className="relative order-2lg:order-1">
            {/* Main Image Container */}
            <div className="relative h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/PhD-Scholarship-for-Domestic-International-Students-at-University-of-New-England-in-Australia-1024x684.jpg"
                alt="Josro Bridge International"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-transparent" />

              {/* Bottom Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[8px] font-medium text-white/90 tracking-wider uppercase">
                    Live Opportunities
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Empowering Global Success
                </h3>
                <p className="mt-1 text-white/80 text-xs max-w-md">
                  World-class education, international careers, life-changing opportunities.
                </p>
              </motion.div>

              {/* Floating Cards - Smaller */}
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                className="absolute -left-3 top-12 bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-3 border border-white/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-xs">
                      Global Education
                    </div>
                    <div className="text-[9px] text-slate-500">
                      University Placement
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1.5 }}
                className="absolute -right-3 bottom-24 bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-3 border border-white/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-xs">
                      Global Careers
                    </div>
                    <div className="text-[9px] text-slate-500">
                      Study & Work Pathways
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge - Compact */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
                className="absolute left-1/2 top-4 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-xl rounded-full px-4 py-1.5 border border-white/50"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">🌟</span>
                  <span className="text-[9px] font-bold text-slate-700 whitespace-nowrap">
                    Trusted by 500+ Students
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative Rings - Subtle */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 border border-orange-200/20 rounded-full" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 border border-blue-200/20 rounded-full" />
          </motion.div>

          {/* RIGHT COLUMN - Now has the content (swapped from left) */}
          <motion.div variants={itemVariants} className="space-y-4 order-1 lg:order-2">
            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-slate-600 text-smmd:text-base leading-relaxed">
                Josro Bridge International Limited is an education and consultancy
                firm committed to helping students and professionals unlock
                international opportunities through education, language
                proficiency, and career development.
              </p>
              <p className="hidden text-slate-600 text-sm md:text-base leading-relaxed">
                We connect ambitious individuals with world-class universities,
                IELTS preparation programs, and career pathways that create
                lasting impact.
              </p>
            </motion.div>

            {/* Features - Compact Grid */}
            <motion.div variants={itemVariants} className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="group p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* MISSION & VISION - Replacing the three small cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* Mission Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group p-4 rounded-xl bg-white bggradient-to-br from-orange-500 to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-lg text-orange-500">🎯</span>
                </div>
                <h4 className="textxs font-bold text-blue-950">Our Mission</h4>
                <p className="text-[10px] text-gray-700 mt-1 leading-relaxed">
                  To empower students worldwide with access to quality education, 
                  fostering academic excellence and cultural understanding.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group p-4 rounded-xl bg-white gradient-to-br from-blue-600 to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                  <span className="text-lg text-orange-500">👁️</span>
                </div>
                <h4 className="textxs font-bold text-blue-950">Our Vision</h4>
                <p className="text-[10px] text-gray-700 mt-1 leading-relaxed">
                  To become the leading global education consultancy, creating 
                  opportunities for every student regardless of boundaries.
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="/contacts"
                className="hidden inline-flexitems-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-medium rounded -full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group"
              >
                <span>Discover Your Pathway</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}