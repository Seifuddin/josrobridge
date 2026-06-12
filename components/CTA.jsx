"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, GraduationCap } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-3 left-0 right-0 z-50 flex justify-center px-3"
    >
      <div className="w-full max-w-md">

        {/* GLASS BAR */}
        <div className="flex items-center justify-between gap-2 
                        bg-blue-950/80 backdrop-blur-xl 
                        border border-orange-400/20 
                        rounded-2xl px-3 py-2 shadow-2xl">

          {/* CALL */}
          <a
            href="tel:+254700000000"
            className="flex flex-col items-center justify-center flex-1 py-1 rounded-xl hover:bg-blue-900/50 transition"
          >
            <Phone className="text-orange-400" size={18} />
            <span className="text-[10px] text-white/80 mt-1">
              Call
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            className="flex flex-col items-center justify-center flex-1 py-1 rounded-xl hover:bg-blue-900/50 transition"
          >
            <MessageCircle className="text-orange-400" size={18} />
            <span className="text-[10px] text-white/80 mt-1">
              WhatsApp
            </span>
          </a>

          {/* APPLY */}
          <a
            href="#apply"
            className="flex flex-col items-center justify-center flex-1 py-1 rounded-xl hover:bg-blue-900/50 transition"
          >
            <GraduationCap className="text-orange-400" size={18} />
            <span className="text-[10px] text-white/80 mt-1">
              Apply
            </span>
          </a>

        </div>
      </div>
    </motion.div>
  );
}