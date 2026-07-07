"use client";

import Link from "next/link";

export default function CanadaHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              🇨🇦 Study in Canada
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Your Journey to a
              <span className="block text-red-600">
                World-Class Education
              </span>
              Starts Here.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Study at top Canadian universities with expert admission,
              visa, scholarship, and career guidance from Josro Bridge
              International.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Book Free Consultation
              </Link>

              <Link
                href="/universities/canada"
                className="rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600"
              >
                Explore Universities
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <h3 className="text-2xl font-bold text-red-600">98%</h3>
                <p className="text-sm text-gray-600">Visa Success</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600">100+</h3>
                <p className="text-sm text-gray-600">Universities</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600">5000+</h3>
                <p className="text-sm text-gray-600">Students Guided</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-600">24/7</h3>
                <p className="text-sm text-gray-600">Support</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/canada-hero.jpg"
                alt="Study in Canada"
                className="h-[600px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 left-6 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm text-gray-500">Top Destination</p>
              <h3 className="text-xl font-bold text-slate-900">
                🇨🇦 Canada
              </h3>
              <p className="text-sm text-gray-600">
                High-quality education & PR opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}