"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  MapPin, 
  GraduationCap, 
  Globe2, 
  Sparkles, 
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  Building2,
  Plane,
  BookOpen,
  Target,
  Crown,
  Star
} from "lucide-react";
import { useRef } from "react";

const countries = [
  {
    id: "uk",
    name: "United Kingdom",
    code: "🇬🇧",
    universities: 4,
    image: "/images/londonview.jpg",
    href: "/united-kingdom",
    delay: 0.1,
    color: "from-blue-600/90 to-orange-500/50",
    highlight: "Oxford • Cambridge • LSE",
    stats: "94% Student Satisfaction",
    accent: "🇬🇧 London • Edinburgh • Manchester",
  },
  {
    id: "australia",
    name: "Australia",
    code: "🇦🇺",
    universities: 4,
    image: "/images/sidney.jpg",
    href: "/australia",
    delay: 0.2,
    color: "from-orange-600/90 to-blue-500/50",
    highlight: "Sydney • Melbourne • UNSW",
    stats: "Top 100 Universities",
    accent: "🌏 Sydney • Melbourne • Brisbane",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    code: "🇳🇿",
    universities: 4,
    image: "/images/wellington.png",
    href: "/new-zealand",
    delay: 0.3,
    color: "from-blue-700/90 to-orange-400/50",
    highlight: "Auckland • Otago • Wellington",
    stats: "8.5/10 Quality of Life",
    accent: "🏔️ Auckland • Wellington • Christchurch",
  },
  {
    id: "canada",
    name: "Canada",
    code: "🇨🇦",
    universities: 4,
    image: "/images/ottawa.jpg",
    href: "/canada",
    delay: 0.4,
    color: "from-orange-700/90 to-blue-400/50",
    highlight: "Toronto • UBC • McGill",
    stats: "Best Education System",
    accent: "🍁 Toronto • Vancouver • Montreal",
  },
];

const additionalStats = [
  { icon: Users, label: "5000+", sub: "Students" },
  { icon: Award, label: "94%", sub: "Success" },
  { icon: Globe2, label: "4+", sub: "Countries" },
  { icon: TrendingUp, label: "98%", sub: "Career Growth" },
];

export default function GlobalAcademicJourney() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden bg-[#0B0E1A]"
    >
      {/* Background Effects - Reduced */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-orange-950/30" />
        
        {/* Animated Grid - Reduced opacity */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Gradient Orbs - Smaller */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
      >
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          {/* Premium Badge - Compact */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4 hover:border-orange-400/30 transition-all duration-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
            </span>
            <span className="text-white/70 text-[10px] font-medium tracking-[0.15em] uppercase">
              Global Education Network
            </span>
            <Sparkles className="w-3 h-3 text-orange-400" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400">
              Global
            </span>
            <span className="text-white mx-1">Academic</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
              Journey
            </span>
            <span className="text-white"> 🌍</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
            <div className="w-2 h-2 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <p className="mt-4 text-sm md:text-base text-white/60 max-w-2xl mx-auto font-light">
            Explore world-class education across <span className="text-white font-medium">14+ universities</span> in 
            <span className="text-orange-400 font-medium"> 4 countries</span> with access to 
            <span className="text-blue-400 font-medium"> 1000+ programs</span>
          </p>

          {/* Quick Stats - Compact */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-5">
            {additionalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-3 py-1.5 border border-white/5"
              >
                <stat.icon className="w-3.5 h-3.5 text-orange-400" />
                <div className="text-left">
                  <span className="text-white font-bold text-xs block leading-none">{stat.label}</span>
                  <span className="text-white/40 text-[8px]">{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Cards Grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {countries.map((country, index) => (
            <Link key={country.id} href={country.href}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: country.delay, ease: "easeOut" }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.15 }
                }}
                className="group relative h-[320px] md:h-[350px] cursor-pointer"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/30 transition-all duration-500 shadow-xl shadow-black/20 hover:shadow-orange-500/10">
                  {/* Background Image */}
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${country.color} mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  
                  {/* Glow Effect - Subtle */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative Elements - Smaller */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-12 -mt-12 blur-xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-10 -mb-10 blur-xl" />
                  
                  {/* Country Flag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-3xl filter drop-shadow-lg">{country.code}</span>
                  </div>

                  {/* Content - Bottom Aligned */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <motion.div className="transform transition-all duration-300 group-hover:-translate-y-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5 group-hover:text-orange-400 transition-colors duration-300">
                        {country.name}
                      </h3>
                      <p className="text-white/70 text-xs flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
                        <span>{country.universities} Universities</span>
                        <span className="w-0.5 h-0.5 bg-white/30 rounded-full" />
                        <span className="text-white/50 text-[10px]">{country.highlight}</span>
                      </p>
                    </motion.div>

                    {/* Expandable Details - Quick reveal */}
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 pt-2 border-t border-white/10">
                        <p className="text-white/50 text-[10px] flex items-center gap-1 mb-1.5">
                          <MapPin className="w-2.5 h-2.5" />
                          {country.accent}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] text-white/40 font-medium tracking-wider uppercase bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                            {country.stats}
                          </span>
                          <span className="inline-flex items-center gap-0.5 text-white/60 text-[10px] font-medium group-hover:text-orange-400 transition-colors duration-300">
                            Explore <ChevronRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Top-right Action Badge - Smaller */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/10 text-white/80 text-[8px] font-medium">
                      <Sparkles className="w-2.5 h-2.5 text-orange-400" />
                      Apply Now
                    </span>
                  </div>

                  {/* Bottom-right Arrow - Smaller */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Shimmer Effect - Subtle */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Premium CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F1525] via-[#1A1F35] to-[#0F1525] border border-white/5 p-6 md:p-8 shadow-xl shadow-black/30">
            {/* Background Decor - Subtle */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-1.5 justify-center md:justify-start mb-1">
                  <Crown className="w-4 h-4 text-orange-400" />
                  <span className="text-white/50 text-[10px] font-medium tracking-widest uppercase">
                    Your Future Starts Here
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Ready to Begin?
                </h3>
                <p className="text-white/60 text-xs mt-0.5 max-w-lg">
                  Join <span className="text-white font-semibold">5000+</span> students who have transformed their careers globally
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 rounded-full text-white font-semibold text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 hover:scale-105"
                >
                  Start Application
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 rounded-full text-white font-medium text-sm border border-white/10 hover:border-white/20 hover:-translate-y-0.5"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Bar - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white/30 text-[10px]"
        >
          <span className="flex items-center gap-1.5">
            <Star className="w-3 h-3 text-yellow-500/50 fill-yellow-500/20" />
            Rated 4.9/5
          </span>
          <span className="w-px h-3 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <Award className="w-3 h-3 text-orange-400/50" />
            10+ Years
          </span>
          <span className="w-px h-3 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <Target className="w-3 h-3 text-blue-400/50" />
            95% Success
          </span>
          <span className="w-px h-3 bg-white/10 hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <Building2 className="w-3 h-3 text-green-400/50" />
            50+ Partners
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}