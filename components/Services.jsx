"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Award,
  Globe,
  Users,
  ArrowRight,
} from "lucide-react";

/* =========================
   DATA
========================= */

const services = [
  {
    title: "University Placement",
    icon: GraduationCap,
    image: "/images/PhD-Scholarship-for-Domestic-International-Students-at-University-of-New-England-in-Australia-1024x684.jpg",
    description:
      "Helping students secure admission to leading universities and colleges across the globe.",
    subServices: [
      "University applications",
      "Admission guidance",
      "Scholarship assistance",
      "Course selection support",
    ],
  },

  {
    title: "IELTS Training",
    icon: BookOpen,
    image: "/images/IELTS-Training-Centre.jpg",
    description:
      "Professional IELTS preparation programs designed to help students achieve their desired scores.",
    subServices: [
      "Listening practice",
      "Speaking coaching",
      "Writing workshops",
      "Mock examinations",
    ],
  },

  {
    title: "Business Consultancy",
    icon: Briefcase,
    image: "/images/business-meeting-office_1268-21517.avif",
    description:
      "Strategic business advisory services that help organizations grow and succeed in competitive markets.",
    subServices: [
      "Business planning",
      "Market research",
      "Investment guidance",
      "Growth strategies",
    ],
  },

  {
    title: "Professional Training",
    icon: Award,
    image: "/images/profession.jpeg",
    description:
      "Industry-focused training programs that equip professionals with practical and relevant skills.",
    subServices: [
      "Leadership development",
      "Corporate workshops",
      "Career advancement",
      "Skills enhancement",
    ],
  },

  {
    title: "Labor Mobility",
    icon: Globe,
    image: "/images/labor-markets.jpg",
    description:
      "Connecting skilled professionals with international employment opportunities and mobility programs.",
    subServices: [
      "International recruitment",
      "Work permit guidance",
      "Employer matching",
      "Relocation support",
    ],
  },

  {
    title: "Student Visa Assistance",
    icon: Users,
    image: "/images/visa.webp",
    description:
      "Comprehensive visa application support to help students study abroad with confidence.",
    subServices: [
      "Visa processing",
      "Document verification",
      "Interview preparation",
      "Travel advisory",
    ],
  },
];

/* =========================
   MODAL
========================= */

function Modal({ service, open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
      />

      <div className="relative bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-semibold text-blue-950">
          {service?.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {service?.description}
        </p>

        <div className="mt-5 space-y-3">
          {service?.subServices?.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 w-full bg-blue-950 text-white py-3 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* =========================
   MAIN SECTION
========================= */

export default function Services() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  return (
  <section id="services" className="py-12 bg-amber-50">
    {/* HEADER */}
    <div className="text-center max-w-2xl mx-auto px-4">
      <p className="text-xs mb-2 tracking-[0.3em] uppercase text-orange-600">
        Our Services
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
        Empowering Education & Global Opportunities
      </h2>

      <p className="mt-3 text-sm text-gray-700">
        Josro Bridge International provides trusted guidance in university
        placement, IELTS preparation, professional development, labor mobility,
        and international career opportunities.
      </p>
    </div>

    {/* SERVICES GRID */}
    <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((s, i) => {
        const Icon = s.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="relative h-40">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-orange-100 rounded-md">
                  <Icon size={18} className="text-orange-600" />
                </div>

                <h3 className="font-semibold text-base text-blue-950">
                  {s.title}
                </h3>
              </div>

              <p className="mt-2 text-xs text-gray-600 line-clamp-3">
                {s.description}
              </p>

              <div className="mt-3 space-y-1">
                {s.subServices.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setActive(s);
                    setOpen(true);
                  }}
                  className="flex-1 bg-blue-950 hover:bg-blue-900 text-white py-2 rounded-lg text-xs transition"
                >
                  View
                </button>

                <button className="flex-1 border border-blue-950 text-blue-950 hover:bg-blue-50 py-2 rounded-lg text-xs flex items-center justify-center gap-1 transition">
                  Request
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* MODAL */}
    <Modal service={active} open={open} setOpen={setOpen} />
  </section>
);
}