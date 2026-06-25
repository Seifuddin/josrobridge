"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Globe,
  FileText,
  BadgeCheck,
  HelpCircle,
  Briefcase,
} from "lucide-react";

/* =========================
   FAQ DATA (WITH ICONS)
========================= */

const faqs = [
  {
    icon: GraduationCap,
    q: "Do you help with university admissions abroad?",
    a: "Yes. We assist with applications, admission letters, scholarships, and placement into universities in the UK, Canada, Germany, and more.",
  },
  {
    icon: Globe,
    q: "Which countries can I apply to?",
    a: "We support UK, Australia, New Zealand and other international destinations depending on your profile and goals.",
  },
  {
    icon: FileText,
    q: "Can I apply without IELTS?",
    a: "Some institutions accept alternatives, but we also offer IELTS training to improve your chances of admission and visas.",
  },
  {
    icon: Briefcase,
    q: "Do you offer job placement abroad?",
    a: "Yes. Through labor mobility programs, we connect qualified candidates with verified international employers.",
  },
  {
    icon: BadgeCheck,
    q: "How long does the full process take?",
    a: "Depending on the country, the full process takes between 2–8 weeks including admission and visa processing.",
  },
];

/* =========================
   COMPONENT
========================= */

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="pb-16 bg-white">

      <div className="max-w-3xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 text-orange-500 text-xs tracking-[0.3em] uppercase">
            <HelpCircle size={14} />
            Support Center
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 textxs mt-2">
            Everything you need to know before applying
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-2">
          {faqs.map((item, i) => {
            const Icon = item.icon;
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="border border-gray-200 bg-white rounded-xl overflow-hidden"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition"
                >

                  {/* ICON BLOCK */}
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-orange-50 border border-orange-200">
                    <Icon size={16} className="text-orange-500" />
                  </div>

                  {/* TEXT */}
                  <span className="textsm text-gray-800 font-medium flex-1">
                    {item.q}
                  </span>

                  {/* DOT INDICATOR */}
                  <div
                    className={`w-2 h-2 rounded-full transition ${
                      isOpen ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-4 pb-3"
                    >
                      <p className="text-sm text-gray-600 leading-relaxed pl-12">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}