"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GlobalAcademicJourney() {
  return (
    <section className="pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/50 text-orange-600 text-[10px] font-semibold tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
            Global Network
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            <span className="text-blue-950">Global</span>
            <span className="text-blue-600"> Academic Journey</span>
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            14+ universities • 4 countries • 1000+ programs
          </p>
        </div>

        {/* CLICKABLE CARDS GRID - With Image Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* United Kingdom Card */}
          <Link href="/united-kingdom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <Image
                  src="/images/londonview.jpg"
                  alt="United Kingdom"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8" />
                
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="absolute bottom-1">
                    <span className="hidden text-5xl mb-2 block">🇬🇧</span>
                    <h3 className="font-bold text-white mb-1">United Kingdom</h3>
                    <p className="text-white/80 text-sm">4 Universities</p>
                  </div>

                  <div className="hidden flex gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition rounded-full text-white text-sm font-medium">
                      Explore
                    </span>
                    <span className="hidden px-4 py-2 bg-white text-slate-900 hover:bg-white/90 transition rounded-full text-sm font-medium">
                      Apply
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="text-white/40 text-sm">→</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Australia Card */}
          <Link href="/australia">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <Image
                  src="/images/sidney.jpg"
                  alt="Australia"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8" />
                
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="absolute bottom-1">
                    <span className="hidden text-5xl mb-2 block">🇦🇺</span>
                    <h3 className="font-bold text-white mb-1">Australia</h3>
                    <p className="text-white/80 text-sm">4 Universities</p>
                  </div>

                  <div className="hidden flex gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition rounded-full text-white text-sm font-medium">
                      Explore
                    </span>
                    <span className="hidden px-4 py-2 bg-white text-slate-900 hover:bg-white/90 transition rounded-full text-sm font-medium">
                      Apply
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="text-white/40 text-sm">→</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* New Zealand Card */}
          <Link href="/new-zealand">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <Image
                  src="/images/wellington.png"
                  alt="New Zealand"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8" />
                
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="absolute bottom-1">
                    <span className="hidden text-5xl mb-2 block">🇳🇿</span>
                    <h3 className="font-bold text-white mb-1">New Zealand</h3>
                    <p className="text-white/80 text-sm">4 Universities</p>
                  </div>

                  <div className="hidden flex gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition rounded-full text-white text-sm font-medium">
                      Explore
                    </span>
                    <span className="hidden px-4 py-2 bg-white text-slate-900 hover:bg-white/90 transition rounded-full text-sm font-medium">
                      Apply
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="text-white/40 text-sm">→</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Canada Card */}
          <Link href="/canada">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <Image
                  src="/images/ottawa.jpg"
                  alt="Canada"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8" />
                
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="absolute bottom-1">
                    <span className="hidden text-5xl mb-2 block">🇨🇦</span>
                    <h3 className=" font-bold text-white mb-1">Canada</h3>
                    <p className="text-white/80 text-sm">4 Universities</p>
                  </div>

                  <div className="hidden flex gap-3">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition rounded-full text-white text-sm font-medium">
                      Explore
                    </span>
                    <span className="hidden px-4 py-2 bg-white text-slate-900 hover:bg-white/90 transition rounded-full text-sm font-medium">
                      Apply
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="text-white/40 text-sm">→</span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden mt-12"
        >
          <div className="hidden relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-5">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-sm font-bold text-white">
                  Ready to Begin?
                </h3>
                <p className="text-xs text-slate-300">
                  Join 1000+ students on their global journey
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="#contact"
                  className="px-5 py-1.5 bg-blue-600 hover:bg-blue-700 transition rounded-full text-white text-xs font-medium shadow-lg shadow-blue-500/25"
                >
                  Start Application
                </a>
                <a
                  href="#"
                  className="px-5 py-1.5 bg-white/10 hover:bg-white/20 transition rounded-full text-white text-xs font-medium border border-white/20"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}