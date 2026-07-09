"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MapPin,
  Users,
  Award,
} from "lucide-react";

export default function EliteCTA() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo-1521295121783-8a321d551ad2.avif"
          alt="Study Abroad"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay - gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-blue-950/80" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/5 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 text-orange-400 text-xs uppercase tracking-[0.2em] mb-6"
        >
          <Globe size={14} />
          Global Education Access
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight">
            Your Future Abroad Starts With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              The Right Guidance
            </span>
          </h2>

          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            We connect ambitious students to internationally recognized
            universities, training programs, and global career opportunities
            that transform lives.
          </p>
        </motion.div>

        {/* Benefits Grid - replaces the right column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-8"
        >
          {[
            { icon: CheckCircle, label: "Verified University Partnerships" },
            { icon: MapPin, label: "Visa Documentation Assistance" },
            { icon: Users, label: "Personalized Admission Support" },
            { icon: Award, label: "Scholarship Guidance" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white/90 text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <item.icon size={16} className="text-orange-400 flex-shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* BUTTONS */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="/contacts"
                className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold py-2 rounded -xl hover:bg-orange-600 transition"
              >
                Start Application
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/254720823950"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-orange-400/40 text-orange-300 py-2 rounded -xl hover:bg-orange-500/10 transition"
              >
                Talk to an Advisor
              </a>
            </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
            500+ Successful Placements
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
            15+ Partner Universities
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
            95% Visa Success Rate
          </span>
        </motion.div>
      </div>
    </section>
  );
}