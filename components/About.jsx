import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-amber-50 overflow-hidden"
    >
      {/* decorative background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-xs mb-2 tracking-[0.3em] uppercase text-orange-600">
            About Josro Bridge
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-blue-950">
            We Build Real Bridges to{" "}
            <span className="text-orange-500">Global Opportunity</span>
          </h2>

          <div className="w-24 h-1 bg-orange-500 mt-6 rounded-full"></div>

          <p className="mt-8 text-gray-600 textsm leading-relaxed">
            Josro Bridge International Limited is an education and consultancy firm
            committed to building bridges of opportunity for individuals and organizations.
            With a focus on international education, language proficiency, and business growth,
            we empower students and professionals to achieve success in a globalized world.
          </p>

          <p className="hidden mt-5 text-gray-600 textsm leading-relaxed">
            We guide students to world-class universities, provide IELTS training,
            and deliver strategic consultancy and career development programs that
            open global opportunities.
          </p>

          {/* highlight tags */}
          <div className="mt-10 flex gap-3 flex-wrap">
            <div className="bg-white border px-5 py-1 rounded-full text-sm text-blue-900 shadow-sm">
              🌍 Global Education
            </div>
            <div className="bg-white border px-5 py-1 rounded-full text-sm text-blue-900 shadow-sm">
              🎓 IELTS Training
            </div>
            <div className="bg-white border px-5 py-1 rounded-full text-sm text-blue-900 shadow-sm">
              💼 Career Growth
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* IMAGE CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[400px]">

            <Image
              src="/images/PhD-Scholarship-for-Domestic-International-Students-at-University-of-New-England-in-Australia-1024x684.jpg"
              alt="Josro Bridge International"
              fill
              className="object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/30 to-transparent"></div>

            {/* image text */}
            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-2xl font-bold">
                Global Education Access
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Connecting students to universities, careers, and global opportunities worldwide.
              </p>
            </div>
          </div>

          {/* FLOATING STATS */}
          <div className="absolute -bottom-10 right-6 bg-white shadow-xl rounded-2xl p-6 w-64 border border-gray-100">

            <h4 className="text-blue-950 font-bold text-lg">
              Our Impact
            </h4>

            <div className="mt-4 space-y-3">

              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Students Placed</span>
                <span className="text-orange-500 font-bold">500+</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Countries</span>
                <span className="text-orange-500 font-bold">10+</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600 text-sm">Programs</span>
                <span className="text-orange-500 font-bold">5</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}