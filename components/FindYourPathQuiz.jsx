"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

const questions = [
  {
    id: "goal",
    question: "What is your main goal?",
    options: [
      "Study Abroad 🎓",
      "Work Abroad 💼",
      "Improve English 🗣️",
      "Business Expansion 🌍",
    ],
  },
  {
    id: "education",
    question: "What is your education level?",
    options: ["High School", "Diploma", "Bachelor’s Degree", "Postgraduate"],
  },
  {
    id: "budget",
    question: "What is your budget level?",
    options: ["Low", "Medium", "High"],
  },
  {
    id: "country",
    question: "Preferred destination?",
    options: ["Canada 🇨🇦", "UK 🇬🇧", "USA 🇺🇸", "Germany 🇩🇪", "Not sure"],
  },
];

export default function FindYourPathQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const current = questions[step];

  const handleSelect = (value) => {
    const updated = { ...answers, [current.id]: value };
    setAnswers(updated);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      generateResult(updated);
    }
  };

  /* =========================
     LOGIC (UNCHANGED)
  ========================= */

  const generateResult = (data) => {
    let score = 0;
    let programs = [];

    if (data.goal.includes("Study")) {
      score += 40;
      programs.push({
        title: "University Placement 🎓",
        action: "Apply to top universities with full guidance",
      });
    }

    if (data.goal.includes("Work")) {
      score += 40;
      programs.push({
        title: "Labor Mobility 💼",
        action: "International job placement & work permits",
      });
    }

    if (data.goal.includes("English")) {
      score += 30;
      programs.push({
        title: "IELTS Training 🗣️",
        action: "Improve English for exams & admission",
      });
    }

    if (data.goal.includes("Business")) {
      score += 25;
      programs.push({
        title: "Business Consultancy 🌍",
        action: "Start or expand business internationally",
      });
    }

    if (
      data.education === "Bachelor’s Degree" ||
      data.education === "Postgraduate"
    ) {
      score += 15;
    }

    if (data.budget === "High") score += 20;
    else if (data.budget === "Medium") score += 10;

    if (data.country.includes("Canada") || data.country.includes("UK")) {
      score += 20;
    }

    const confidence =
      score >= 70
        ? "Very High"
        : score >= 50
        ? "High"
        : score >= 30
        ? "Medium"
        : "Low";

    setResult({ score, confidence, programs, data });
  };

  const generateWhatsAppMessage = () => {
    if (!result) return "";

    return encodeURIComponent(`
Hello Josro Bridge International 👋

I completed the Path Finder Quiz.

Score: ${result.score}
Confidence: ${result.confidence}

Programs:
${result.programs.map((p) => `- ${p.title}`).join("\n")}

Goal: ${result.data.goal}
Education: ${result.data.education}
Budget: ${result.data.budget}
Country: ${result.data.country}
`);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section className="py-10 bg-orange-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
            Global Path Finder
          </h2>
          <p className="text-gray-700 text-xs mt-1">
            Discover your best study, work, or migration pathway in minutes
          </p>
        </div>

        {!result ? (
          <div className="grid md:grid-cols-3 gap-4">

            {/* PROGRESS */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
              <h3 className="text-xs font-semibold text-gray-700 mb-3">
                Progress
              </h3>

              {questions.map((q, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 mb-2 text-xs ${
                    i <= step ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border border-orange-300 ${
                      i < step
                        ? "bg-orange-500 text-white border-orange-500"
                        : i === step
                        ? "bg-blue-700 text-white border-blue-900"
                        : "bg-white border-orange-200"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>

                  <span className="leading-tight">{q.question}</span>
                </div>
              ))}
            </div>

            {/* QUESTION CARD */}
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-2 bg-orange-50 border border-orange-200 rounded-2xl p-5 shadow-sm"
            >
              <p className="text-[11px] text-gray-600 mb-2">
                Step {step + 1}/{questions.length}
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {current.question}
              </h3>

              <div className="grid gap-2">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(opt)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg border-b border-orange-200 text-xs hover:bg-gray-900 hover:text-white transition group"
                  >
                    <span>{opt}</span>
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          /* RESULT */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border rounded-2xl p-4 shadow-sm text-center"
          >
            <CheckCircle className="mx-auto text-orange-700 mb-2" size={32} />

            <h3 className="text-lg font-bold text-gray-900">
              Your Path is Ready
            </h3>

            <p className="text-xs text-gray-700 mt-1">
              Score: <b>{result.score}</b> • {result.confidence}
            </p>

            {/* PROGRAMS */}
            <div className="mt-4 grid md:grid-cols-2 gap-2 text-left">
              {result.programs.map((p, i) => (
                <div key={i} className="p-2 border rounded-lg bg-blue-50">
                  <p className="font-semibold text-gray-900 text-sm">
                    {p.title}
                  </p>
                  <p className="text-xs text-gray-700">{p.action}</p>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-5 flex flex-col md:flex-row gap-2 justify-center">
              <a
                href={`https://wa.me/2547XXXXXXX?text=${generateWhatsAppMessage()}`}
                className="bg-orange-600 hover:bg-orange-700 text-white px-2 py-1 rounded-lg text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} />
                WhatsApp Advisor
              </a>

              <button
                onClick={resetQuiz}
                className="border px-2 py-1 rounded-lg text-xs hover:bg-blue-100"
              >
                Retake
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}