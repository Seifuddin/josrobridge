"use client"

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, GraduationCap, Globe, Award, ArrowRight } from 'lucide-react';

const StudyInCanadaHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroRef.current.style.opacity = 1 - scrolled / 700;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-red-100/30 to-red-200/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-100/30 to-blue-200/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-yellow-100/10 to-orange-100/10 blur-3xl" />
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <GraduationCap className="w-12 h-12 text-blue-400/40" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float-medium">
          <MapPin className="w-16 h-16 text-red-400/40" />
        </div>
        <div className="absolute top-1/3 right-10 animate-float-fast">
          <Globe className="w-10 h-10 text-green-400/40" />
        </div>
        <div className="absolute bottom-1/4 left-20 animate-float-slow">
          <Award className="w-14 h-14 text-yellow-400/40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4sm: px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8" ref={heroRef}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-gray-700">
                🇨🇦 Apply Now for 2026 Intake
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Study in
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                Canada
              </span>
              <span className="text-gray-800"> 🇨🇦</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
              Your gateway to world-class education, multicultural experiences, 
              and unlimited career opportunities in one of the world's most 
              welcoming countries.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">100+</p>
                  <p className="text-sm text-gray-500">Universities</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-100 rounded-full p-2">
                  <Globe className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">200+</p>
                  <p className="text-sm text-gray-500">Programs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">95%</p>
                  <p className="text-sm text-gray-500">Success Rate</p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
                        <div className="mt-6 space-y-3">
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

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-bold text-gray-600"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">500+</span> students placed
                <span className="hidden sm:inline"> in Canadian universities</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative lg: block idden">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-400 to-blue-600">
                  {/* Replace src with your actual image */}
                  <img
                    src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Study in Canada"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Visa Approved</p>
                    <p className="text-xs text-gray-500">98% success rate</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 animate-float-medium">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Top Universities</p>
                    <p className="text-xs text-gray-500">UofT, UBC, McGill</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 animate-float-fast">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 rounded-full p-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Scholarships</p>
                    <p className="text-xs text-gray-500">Up to $50,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            className="fill-blue-50/50"
          />
          <path
            d="M0 60C240 110 480 10 720 60C960 110 1200 10 1440 60V100H0V60Z"
            className="fill-white/70"
          />
        </svg>
      </div>

      {/* Custom Animations - Add to your global CSS or use a style tag
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
       */}
    </div>
  );
};

export default StudyInCanadaHero;