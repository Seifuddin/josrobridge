import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-blue-950 text-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-12 gap-10">

          {/* BRAND SECTION */}
          <div className="md:col-span-4">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/josro.png"
                alt="Josro Bridge Logo"
                width={45}
                height={45}
                className="rounded-md"
              />

              <div>
                <h2 className="text-sm font-bold">Josro Bridge</h2>
                <p className="text-orange-400 text-xs tracking-widest">
                  INTERNATIONAL LIMITED
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-300 text-sm leading-relaxed">
              We build bridges of opportunity for students and professionals
              through global education, IELTS training, business consultancy,
              professional development, and international labor mobility.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6 text-orange-400">
              <FaFacebook className="hover:text-white transition cursor-pointer text-lg" />
              <FaInstagram className="hover:text-white transition cursor-pointer text-lg" />
              <FaTwitter className="hover:text-white transition cursor-pointer text-lg" />
              <FaLinkedin className="hover:text-white transition cursor-pointer text-lg" />
            </div>

          </div>

          {/* LINKS */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>University Placement</li>
              <li>IELTS Training</li>
              <li>Business Consultancy</li>
              <li>Professional Training</li>
              <li>Labor Mobility</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-gray-300 text-sm">

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-orange-400" />
                +254 720 823 950
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-orange-400" />
                info@josrobridge.com
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-400" />
                Nairobi, Kenya
              </div>
            </div>

          </div>
        </div>

        {/* NEWSLETTER CTA */}
        <div className="hidden mt-16 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h4 className="textlg font-semibold">
              Stay Updated with Global Opportunities
            </h4>
            <p className="text-gray-400 text-sm">
              Get updates on admissions, IELTS training & international programs.
            </p>
          </div>

          <div className="flex wfull gap2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l full bg-white/10 border border-white/20 text-sm outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-r full text-sm font-semibold transition">
              Subscribe
            </button>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-400 text-sm">

          <p>
            © {new Date().getFullYear()} Josro Bridge International Limited. All rights reserved.
          </p>

          <p className="text-xs mt-2">
            Designed & Powered by{" "}
            <Link
              href="https://lapsa.vercel.app"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Lapsa Web and Graphics
            </Link>
          </p>

        </div>

      </div>
    </footer>
  );
}