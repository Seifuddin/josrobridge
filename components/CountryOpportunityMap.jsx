"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Briefcase,
  FileText,
  ArrowRight,
} from "lucide-react";

/* =========================
   COUNTRY DATA
========================= */

const countries = [
  {
    name: "UK",
    color: "#1f2937",
    icon: GraduationCap,
    scoreBase: 90,
    opportunities: [
      "IELTS Training",
      "University Placement",
      "Student Visa Guidance",
    ],
    requirements: [
      "IELTS 5.5+ (recommended)",
      "Academic certificates",
      "Financial proof",
    ],
  },
  {
    name: "Canada",
    color: "#16a34a",
    icon: Globe,
    scoreBase: 95,
    opportunities: [
      "Study Programs",
      "Permanent Residency Pathways",
      "Work While Studying",
    ],
    requirements: [
      "IELTS 6.0+",
      "Good academic record",
      "Funds for tuition",
    ],
  },
  {
    name: "Germany",
    color: "#dc2626",
    icon: Briefcase,
    scoreBase: 85,
    opportunities: [
      "Free/Low-cost Education",
      "Vocational Training",
      "Work Opportunities",
    ],
    requirements: [
      "German/English proficiency",
      "Academic transcripts",
      "Motivation letter",
    ],
  },
  {
    name: "UAE",
    color: "#f59e0b",
    icon: FileText,
    scoreBase: 80,
    opportunities: [
      "Labor Mobility Programs",
      "Job Placement",
      "Short-term Work Contracts",
    ],
    requirements: [
      "Valid passport",
      "Basic experience (preferred)",
      "Medical clearance",
    ],
  },
];

/* =========================
   SIMULATED ANALYTICS DATA
   (Heatmap intensity)
========================= */

const analytics = {
  UK: 70,
  Canada: 95,
  Germany: 60,
  UAE: 40,
};

/* =========================
   MAP POSITIONS
========================= */

const mapAreas = [
  { name: "UK", x: 48, y: 35 },
  { name: "Canada", x: 20, y: 25 },
  { name: "Germany", x: 52, y: 40 },
  { name: "UAE", x: 60, y: 55 },
];

/* =========================
   COMPONENT
========================= */

export default function CountryOpportunityMap() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  /* =========================
     🧠 AI RECOMMENDER ENGINE
  ========================= */

  const recommended = useMemo(() => {
    // simple smart scoring (you can connect quiz later)
    const weighted = countries.map((c) => {
      const popularityBoost = analytics[c.name] || 0;
      const finalScore = c.scoreBase + popularityBoost;
      return { ...c, finalScore };
    });

    return weighted.sort((a, b) => b.finalScore - a.finalScore)[0];
  }, []);

  /* auto-select best country */
  useEffect(() => {
    setSelected(recommended);
  }, [recommended]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Country Opportunity Intelligence
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            AI-powered recommendations + live opportunity analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* =========================
              MAP + HEATMAP
          ========================= */}
          <div className="relative h-[430px] rounded-3xl border bg-white shadow-lg overflow-hidden">

            {/* BACKGROUND MAP */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-cover" />

            {mapAreas.map((area) => {
              const country = countries.find((c) => c.name === area.name);
              const heat = analytics[area.name];

              const isActive = selected?.name === area.name;

              return (
                <motion.button
                  key={area.name}
                  onClick={() => setSelected(country)}
                  onMouseEnter={() => setHovered(country)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute w-4 h-4 rounded-full border-2 border-white shadow-lg"
                  style={{
                    left: `${area.x}%`,
                    top: `${area.y}%`,
                    backgroundColor: country.color,

                    /* 📊 HEATMAP EFFECT */
                    boxShadow: `
                      0 0 ${(heat / 10)}px ${country.color}88,
                      0 0 ${(heat / 5)}px ${country.color}55
                    `,

                    transform: isActive ? "scale(1.5)" : "scale(1)",
                  }}
                  whileHover={{ scale: 1.6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              );
            })}

            {/* TOOLTIP */}
            {hovered && (
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md border rounded-xl px-3 py-2 text-xs shadow-lg">
                <p className="font-semibold text-gray-900">
                  {hovered.name}
                </p>
                <p className="text-gray-500">
                  Click to explore opportunities
                </p>
              </div>
            )}

            {/* AI BADGE */}
            <div className="absolute top-3 left-3 bg-black text-white text-[10px] px-2 py-1 rounded-full">
              AI Recommended Active
            </div>
          </div>

          {/* =========================
              DETAILS PANEL
          ========================= */}
          {selected && (
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white border rounded-3xl p-6 shadow-lg"
            >

              {/* HEADER */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="p-3 rounded-2xl text-white shadow-md"
                  style={{ backgroundColor: selected.color }}
                >
                  <selected.icon size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selected.name}
                  </h3>
                  {selected.name === recommended.name && (
                    <p className="text-xs text-green-600 font-medium">
                      AI Recommended Match ✨
                    </p>
                  )}
                </div>
              </div>

              {/* OPPORTUNITIES */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase">
                  Opportunities
                </h4>

                <div className="space-y-2">
                  {selected.opportunities.map((op, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <ArrowRight size={14} className="text-gray-400" />
                      {op}
                    </div>
                  ))}
                </div>
              </div>

              {/* REQUIREMENTS */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase">
                  Requirements
                </h4>

                <div className="space-y-2">
                  {selected.requirements.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: selected.color }}
                      />
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                className="mt-7 w-full py-3 rounded-2xl text-white font-medium shadow-md hover:shadow-xl transition"
                style={{ backgroundColor: selected.color }}
              >
                Apply for {selected.name}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}