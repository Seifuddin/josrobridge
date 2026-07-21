// components/Hero.tsx
import Image from 'next/image';

export default function StudyInCanadaHero() {
  return (
    <section className="relative w-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.002]">
      {/* Background Image - using local image from public folder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ottawa.jpg" // Place your image in public/images/canada-hero.jpg
          alt="Scenic Canadian mountains and lake"
          fill
          className="object-cover object-[center_30%] brightness-[0.65] saturate-[1.1]"
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[rgba(0,20,30,0.55)] to-[rgba(0,10,20,0.4)] backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center min-h-[480px] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20 text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30 text-sm font-medium text-orange-400 shadow-lg mb-5 sm:mb-6">
          <i className="fas fa-graduation-cap text-orange-300 text-sm" />
          Josrobridge · educational consultancy
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-3xl">
          Study in <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(251,191,36,0.3)]">
            Canada
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl font-light max-w-lg mt-3 sm:mt-4 mb-6 sm:mb-8 leading-relaxed text-white/90 drop-shadow-md">
          Your future starts here — world-class education, diverse culture, and endless opportunities. Let Josrobridge guide your journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="/apply"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 sm:px-8 sm:py-3.5 bg-orange-400 text-white font-semibold rounded shadow-md hover:bg-amber-500 hover:scale-[1.02] transition-all duration-200 border border-white/30 text-sm sm:text-base"
          >
            <i className="fas fa-compass text-[#c44536]" />
            Start Application
          </a>
          <a
            href="https://wa.me/254720823950"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 sm:px-8 sm:py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded shadow-md hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 border border-white/40 text-sm sm:text-base"
          >
            <i className="fas fa-headset text-[#ffd966]" />
            Talk to advisor
          </a>

        </div>

        {/* Footer detail */}
        <div className="flex items-center gap-2 mt-6 sm:mt-8 text-xs sm:text-sm font-light text-[#e0ecff]/80 backdrop-blur-sm">
          <i className="fas fa-maple-leaf text-[#ff6b4a] text-base" />
          <span>Canada · 2026</span>
          <span className="mx-1 opacity-30">|</span>
          <span>Josrobridge</span>
        </div>
      </div>
    </section>
  );
}