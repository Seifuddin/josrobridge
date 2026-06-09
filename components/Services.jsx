import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Users,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "University Placement",
    desc: "Guiding students through applications, scholarships, and admissions to top universities worldwide.",
    icon: GraduationCap,
  },
  {
    title: "IELTS Training",
    desc: "Expert-led preparation programs designed to achieve competitive IELTS scores.",
    icon: BookOpen,
  },
  {
    title: "Business Consultancy",
    desc: "Strategic advisory services for startups, SMEs, and established organizations.",
    icon: Briefcase,
  },
  {
    title: "Professional Training",
    desc: "Leadership, entrepreneurship, and management development programs.",
    icon: Users,
  },
  {
    title: "Labor Mobility",
    desc: "Connecting skilled workers to verified international employment opportunities.",
    icon: Globe,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
            Global Pathways to Education, Skills & Careers
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>

          <p className="mt-6 text-gray-600 text-lg">
            We connect individuals to world-class universities, professional
            training, business growth opportunities, and international employment pathways.
          </p>
        </div>

        {/* FEATURED + LIST LAYOUT */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - FEATURED SERVICE */}
          <div className="bg-blue-950 text-white rounded-3xl p-10 relative overflow-hidden">

            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-3xl"></div>

            <p className="text-orange-400 font-semibold tracking-widest text-sm">
              FLAGSHIP PROGRAM
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              University Placement Program
            </h3>

            <p className="mt-6 text-gray-300 leading-relaxed">
              We provide structured guidance for students seeking admission into
              top global universities, including application support, scholarship
              assistance, documentation, and interview preparation.
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition"
            >
              Start Application
            </a>
          </div>

          {/* RIGHT - SERVICE LIST */}
          <div className="space-y-6">

            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-blue-950">
            Ready to begin your international journey?
          </h3>

          <p className="text-gray-600 mt-2">
            Speak with our consultants and choose the right pathway for you.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Book Consultation
          </a>
        </div>

      </div>
    </section>
  );
}