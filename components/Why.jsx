"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Link2,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const points = [
  {
    title: "Faster Processing",
    desc: "We eliminate unnecessary delays through direct submission channels and priority handling systems.",
    icon: Zap,
  },
  {
    title: "Direct University Access",
    desc: "We connect students directly to partner institutions—no middle layers, no confusion.",
    icon: Link2,
  },
  {
    title: "Verified Global Partners",
    desc: "Every institution we work with is vetted, accredited, and internationally recognized.",
    icon: ShieldCheck,
  },
  {
    title: "Full Journey Support",
    desc: "From consultation to visa approval and relocation—we stay with you until you land.",
    icon: Users,
  },
];

export default function WhyJosroWins() {
  return (
    <section id="whyus" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-xs text-center tracking-[0.35em] text-orange-600 uppercase">
            Why Choose Josro?
          </p>

          <h2 className="text-2xl text-center md:text-3xl font-bold text-blue-950">
            We don’t compete on promises. We win on execution.
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-12 gap-6 items-center">

          {/* LEFT TEXT */}
          <div className="md:col-span-5 space-y-4">

            <p className="text-sm text-gray-600 leading-relaxed">
              Most agencies slow students down with unclear processes,
              middlemen, and poor communication.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              We removed all of that. What remains is a direct,
              structured, high-success system built for international placement.
            </p>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-blue-950 text-white">
              Trusted International Advisory Network
            </div>

            {/* SMALL CTA LINE */}
            <div className="flex items-center gap-2 text-sm font-medium text-orange-600">
              <ArrowRight size={16} />
              Built for serious applicants only
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="md:col-span-3 flex justify-center">
            <div className="relative w-full h-[240px] rounded-2xl overflow-hidden shadow-lg border">
              <img
                src="/images/why-choose-us-page.jpg"
                alt="Students global opportunities"
                className="w-full h-full object-cover"
              />

              {/* BLUE + ORANGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-orange-400/20" />
            </div>
          </div>

          {/* RIGHT POINTS */}
          <div className="md:col-span-4 space-y-4">

            {points.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex gap-3"
                >

                  {/* ICON */}
                  <div className="mt-1">
                    <Icon size={18} className="text-orange-600" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-sm font-semibold text-blue-900">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* BOTTOM ACCENT BAR */}
        <div className="mt-10 h-1 w-full bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 rounded-full opacity-80" />

      </div>
    </section>
  );
}