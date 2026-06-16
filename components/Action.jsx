"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe } from "lucide-react";

export default function EliteCTA() {
  return (
    <section className="relative py-20 bg-blue-950 overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT: EMOTIONAL HOOK */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-2 text-orange-400 text-xs uppercase tracking-[0.3em]">
              <Globe size={14} />
              Global Education Access
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 leading-tight">
              Your Future Abroad Starts With the Right Guidance
            </h2>

            <p className="text-white/70 text-sm mt-3">
              We don’t just advise — we place students into real universities,
              real programs, and real international opportunities.
            </p>

            {/* TRUST POINTS */}
            <div className="mt-5 space-y-2 text-sm text-white/70">

              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-400" size={16} />
                Verified university partnerships
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-400" size={16} />
                End-to-end visa support
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-400" size={16} />
                IELTS + career guidance included
              </div>

            </div>

          </motion.div>

          {/* RIGHT: ACTION PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-900/40 border border-orange-400/20 backdrop-blur-xl rounded-2xl p-6 shadow-2xl"
          >

            <h3 className="text-white font-semibold text-lg">
              Start Your Application
            </h3>

            <p className="text-white/60 text-sm mt-2">
              Get matched with the best country in minutes.
            </p>

            {/* MINI STATS */}
            <div className="grid grid-cols-2 gap-3 mt-5 text-center">

              <div className="bg-blue-950/40 p-3 rounded-xl border border-white/10">
                <p className="text-orange-400 text-lg font-bold">94%</p>
                <p className="text-white/50 text-xs">Success Rate</p>
              </div>

              <div className="bg-blue-950/40 p-3 rounded-xl border border-white/10">
                <p className="text-orange-400 text-lg font-bold">12+</p>
                <p className="text-white/50 text-xs">Countries</p>
              </div>

            </div>

            {/* CTA BUTTONS */}
            <div className="mt-6 space-y-3">

              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 bg-orange-400 text-blue-950 font-semibold py-2.5 rounded -xl hover:bg-yellow-300 transition"
              >
                Start Application
                <ArrowRight size={16} />
              </a>

              <a
                href="https://wa.me/254720823950"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 border border-orange-400/30 text-orange-400 py-2.5 rounded -xl hover:bg-yellow-400/10 transition"
              >
                Talk to Advisor
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}