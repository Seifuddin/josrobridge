"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#whyus" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        {/* LOGO */}
<div className="flex items-center gap-3">
  <img
    src="/images/josro.png"
    alt="Josro Bridge Logo"
    className="w-14 h-14 object-contain"
  />

  <div className="leading-tight">
    <h1 className="font-semibold text-blue-900 text-sm">
      Josro Bridge
    </h1>
    <p className="text-xs text-orange-500 fontmedium">
      International Limited
    </p>
  </div>
</div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 font-medium hover:text-blue-900 transition group"
            >
              {link.name}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-900 to-orange-500 text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-900"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-6 space-y-5 animate-in slide-in-from-top">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-gray-700 hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="block text-center bg-blue-900 text-white py-3 rounded-lg mt-4"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}