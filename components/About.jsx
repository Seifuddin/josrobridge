"use client";

import Image from "next/image";
import {
  Globe,
  GraduationCap,
  Briefcase,
  Target,
  Eye,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-40" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium">
              <Globe size={16} />
              About Josro Bridge
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-2xl md:text-4xl font-bold leading-tight text-slate-900">
              Building Bridges to
              <span className="block text-orange-500">
                Global Opportunities
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              Josro Bridge International Limited is an education and consultancy
              firm committed to helping students and professionals unlock
              international opportunities through education, language
              proficiency, and career development.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We connect ambitious individuals with world-class universities,
              IELTS preparation programs, and career pathways that create
              lasting impact in an increasingly global world.
            </p>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl border-b border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Target className="text-orange-500" size={18} />
                  </div>

                  <h3 className="font-semibold text-blue-900">
                    Our Mission
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  To empower students and professionals through education,
                  training, and global opportunities that transform lives.
                </p>
              </div>

              <div className="p-4 rounded-xl border-b border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Eye className="text-orange-500" size={18} />
                  </div>

                  <h3 className="font-semibold text-blue-900">
                    Our Vision
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  To become a trusted global bridge connecting talent,
                  education, and international success opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[550px] rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src="/images/PhD-Scholarship-for-Domestic-International-Students-at-University-of-New-England-in-Australia-1024x684.jpg"
                alt="Josro Bridge International"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-lg font-bold text-white">
                  Empowering Global Success
                </h3>

                <p className="mt-3 text-white/85">
                  Helping students access world-class education,
                  international careers, and life-changing opportunities.
                </p>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-6 top-10 bg-white shadow-xl rounded-3xl p-5 border border-slate-100">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-orange-500" size={26} />

                <div>
                  <div className="font-bold text-slate-900">
                    Global Education
                  </div>

                  <div className="text-sm text-slate-500">
                    University Placement
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-6 bottom-16 bg-white shadow-xl rounded-3xl p-5 border border-slate-100">
              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-600" size={26} />

                <div>
                  <div className="font-bold text-slate-900">
                    Global Careers
                  </div>

                  <div className="text-sm text-slate-500">
                    Study & Work Pathways
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 3 */}
            <div className="absolute left-12 bottom-4 bg-orange-500 text-white rounded-3xl px-6 py-4 shadow-xl">
              <div className="font-bold textlg">
                Worldwide Opportunities
              </div>

              <div className="text-sm text-orange-100">
                Education • Careers • Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}