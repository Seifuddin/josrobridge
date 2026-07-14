"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Globe,
  Briefcase,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle,
  Play,
  Sparkles,
  Rocket,
  Users,
  Zap,
  Shield,
  Star,
  MoveRight,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/13486128-pronto-per-successo-quattro-universita-laureati-in-piedi-nel-un-riga-e-sorridente-gratuito-foto.jpeg",
    title: "Transform Your Future",
    subtitle: "Breakthrough boundaries with world-class education, global mobility, and strategic business solutions — all designed to accelerate your success.",
    tag: "University Placement",
    stats: "94% Success Rate",
    color: "from-blue-600/90 to-orange-500/80",
    accent: "orange",
  },
  {
    id: 2,
    image: "/images/istockphoto-1358814280-612x612.jpg",
    title: "Master Global Communication",
    subtitle: "Unlock opportunities worldwide with our intensive IELTS training that turns language barriers into bridges to your dream career.",
    tag: "IELTS Training",
    stats: "Band 7+ Achieved",
    color: "from-orange-600/90 to-blue-500/80",
    accent: "blue",
  },
  {
    id: 3,
    image: "/images/what-is-a-business-consultant-scaled.jpg",
    title: "Scale Without Limits",
    subtitle: "From ambitious startups to global enterprises — we provide the strategic intelligence and operational excellence you need to dominate your market.",
    tag: "Business Consultancy",
    stats: "500+ Clients Served",
    color: "from-blue-700/90 to-orange-400/80",
    accent: "orange",
  },
  {
    id: 4,
    image: "/images/lead.jpg",
    title: "Lead the Revolution",
    subtitle: "Develop the mindset, skills, and network to become a visionary leader who doesn't just adapt to change — creates it.",
    tag: "Professional Training",
    stats: "94% Career Growth",
    color: "from-orange-700/90 to-blue-400/80",
    accent: "blue",
  },
  {
    id: 5,
    image: "/images/horticulture+LHL+lawsuit+TN.webp",
    title: "Your Career Has No Borders",
    subtitle: "Navigate global labor markets with confidence. We connect your talent to opportunities in 4+ countries, ethically and seamlessly.",
    tag: "Labor Mobility",
    stats: "4+ Countries",
    color: "from-blue-800/90 to-orange-300/80",
    accent: "orange",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 12 + 8,
      opacity: Math.random() * 0.2 + 0.05,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPlaying, current]);

  const goToSlide = (index) => {
    setCurrent(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
  };

  const toggleAutoplay = () => setIsPlaying(!isPlaying);

  const currentSlide = slides[current];

  return (
    <section 
      ref={sectionRef}
      className="relative h-[85vh] min-h-[550px] max-h-[800px] overflow-hidden"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
        }}
      >
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          fill
          priority
          className="object-cover"
        />
        
        {/* Dynamic Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${currentSlide.color} mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Animated Gradient Orbs - Smaller */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -top-1/2 -left-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-3xl animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div 
            className="absolute -bottom-1/2 -right-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-400/10 blur-3xl animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          />
        </div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Particles - Fewer */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white animate-float"
              style={{
                width: particle.width + 'px',
                height: particle.height + 'px',
                left: particle.left + '%',
                top: particle.top + '%',
                animationDelay: particle.delay + 's',
                animationDuration: particle.duration + 's',
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content - Compact */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            {/* Status Badge - Smaller */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 animate-fade-in-up hover:bg-white/20 transition-all duration-300 cursor-default">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
              </span>
              <span className="text-white/90 text-[10px] font-medium tracking-widest uppercase">
                {currentSlide.tag}
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-white/70 text-[10px] font-medium">
                {currentSlide.stats}
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-white/50 text-[10px]">✦ Live</span>
            </div>

            {/* Main Heading - Smaller */}
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] animate-fade-in-up">
              {currentSlide.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-blue-400 text-4xl md:text-5xl lg:text-6xl">
                Today
              </span>
            </h1>

            {/* Subtitle - Compact */}
            <p className="mt-3 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl animate-fade-in-up font-light">
              {currentSlide.subtitle}
            </p>

            {/* CTA Section - Compact */}
            <div className="mt-6 flex flex-wrap items-center gap-4 animate-fade-in-up">
              <a
                href="/contacts"
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 hover:scale-105"
              >
                <span className="text-sm">Start Your Journey</span>
                <Rocket className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-300 rounded-full animate-ping" />
              </a>

              <a
                href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 text-white font-medium hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Play className="w-3.5 h-3.5 fill-white" />
                <span className="text-sm">Services</span>
              </a>

              <div className="flex -space-x-2 ml-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white/20 bg-gradient-to-br from-orange-400 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur flex items-center justify-center text-white text-[10px] font-bold">
                  +2k
                </div>
              </div>
            </div>

            {/* Trust Metrics - Compact */}
            <div className="mt-5 flex flex-wrap items-center gap-5 md:gap-8 animate-fade-in-up">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-500/20 backdrop-blur">
                  <Award className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">10+</p>
                  <p className="text-white/60 text-[10px]">Years Excellence</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/20 backdrop-blur">
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">500+</p>
                  <p className="text-white/60 text-[10px]">Students Placed</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-500/20 backdrop-blur">
                  <Globe className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">4+</p>
                  <p className="text-white/60 text-[10px]">Countries</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/20 backdrop-blur">
                  <Star className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">4.9</p>
                  <p className="text-white/60 text-[10px]">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Vertical */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group flex items-center gap-2"
          >
            <span className={`text-[10px] font-medium transition-all duration-300 ${
              current === index ? 'text-white opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'
            }`}>
              {slide.tag.split(' ')[0]}
            </span>
            <div className={`relative w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              current === index ? 'bg-orange-500 w-10' : 'bg-white/30 hover:bg-white/50'
            }`}>
              {current === index && (
                <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Arrow Navigation - Compact */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 text-white hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:-translate-y-1/2 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 text-white hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:-translate-y-1/2 group"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Progress Bar with Label - Compact */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="relative h-1.5 bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={toggleAutoplay}
            className="text-white/40 hover:text-white transition-colors text-[10px]"
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
          <span className="text-white/30 text-[10px] font-mono tracking-wider">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <button
            onClick={nextSlide}
            className="text-white/40 hover:text-white transition-colors text-[10px]"
          >
            Skip <MoveRight className="inline w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Scroll Indicator - Compact */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-white/30 text-[8px] font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-4 h-6 rounded-full border-2 border-white/20 flex justify-center">
          <div className="w-0.5 h-2 bg-white/30 rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
}