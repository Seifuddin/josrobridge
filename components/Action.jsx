"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe,
} from "lucide-react";

export default function EliteCTA() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/visas.webp" // Replace with your image
          alt="Study Abroad"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/65 via-blue-950/65 to-blue-950/60" />
      </div>

      {/* DECORATIVE GLOWS */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-orange-400 text-xs uppercase tracking-[0.3em]">
              <Globe size={14} />
              Global Education Access
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">
              Your Future Abroad Starts With
              <span className="block text-orange-400">
                The Right Guidance
              </span>
            </h2>

            <p className="text-white/75 text-base mt-4 max-w-xl leading-relaxed">
              We don't just advise. We connect ambitious students
              and professionals to internationally recognized
              universities, training programs, and global career
              opportunities that transform lives.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle
                  size={18}
                  className="text-orange-400 flex-shrink-0"
                />
                Verified university partnerships
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle
                  size={18}
                  className="text-orange-400 flex-shrink-0"
                />
                End-to-end visa assistance
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle
                  size={18}
                  className="text-orange-400 flex-shrink-0"
                />
                IELTS preparation and career guidance
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-2xl"
          >
            <h3 className="text-white text-xl font-bold">
              Start Your Application
            </h3>

            <p className="text-white/70 text-sm mt-2">
              Discover the best study destination based on your
              academic background, career goals, and budget.
            </p>

            {/* CTA BOX */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-orange-400 text-sm font-medium">
                Why Students Choose Josro Bridge
              </p>

              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>• Personalized admission support</li>
                <li>• Scholarship application guidance</li>
                <li>• Visa documentation assistance</li>
                <li>• Career and migration pathways</li>
              </ul>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 space-y-3">
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold py-2 rounded-xl hover:bg-orange-600 transition"
              >
                Start Application
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/254720823950"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-orange-400/40 text-orange-300 py-2 rounded-xl hover:bg-orange-500/10 transition"
              >
                Talk to an Advisor
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}