"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Award,
  Globe,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Star,
} from "lucide-react";

/* =========================
   DATA
========================= */

const services = [
  {
    title: "University Placement",
    icon: GraduationCap,
    image: "/images/about.jpg",
    description:
      "Helping students secure admission to leading universities and colleges across the globe.",
    subServices: [
      "University applications",
      "Admission guidance",
      "Scholarship assistance",
      "Course selection support",
    ],
    color: "orange",
    gradient: "from-cyan-500 to-cyan-600",
    lightGradient: "from-blue-50 to-blue-100/50",
    tag: "Top Choice",
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
    color: "orange",
    gradient: "from-cyan-500 to-cyan-600",
    lightGradient: "from-emerald-50 to-emerald-100/50",
    tag: "Popular",
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
    color: "orange",
    gradient: "from-cyan-500 to-cyan-600",
    lightGradient: "from-purple-50 to-purple-100/50",
    tag: "Expert",
  },
  {
    title: "Professional Training",
    icon: Award,
    image: "/images/lead.jpg",
    description:
      "Industry-focused training programs that equip professionals with practical and relevant skills.",
    subServices: [
      "Leadership development",
      "Corporate workshops",
      "Career advancement",
      "Skills enhancement",
    ],
    color: "orange",
    gradient: "from-cyan-500 to-cyan-600",
    lightGradient: "from-orange-50 to-orange-100/50",
    tag: "Premium",
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
    color: "orange",
    gradient: "from-cyan-500 to-cyan-600",
    lightGradient: "from-rose-50 to-rose-100/50",
    tag: "Global",
  },
  {
    title: "Student Visa Assistance",
    icon: Users,
    image: "/images/visas.webp",
    description:
      "Comprehensive visa application support to help students study abroad with confidence.",
    subServices: [
      "Visa processing",
      "Document verification",
      "Interview preparation",
      "Travel advisory",
    ],
    color: "orange",
    gradient: "from-cyan-500 to-cyan-600",
    lightGradient: "from-cyan-50 to-cyan-100/50",
    tag: "Essential",
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-200",
    text: "text-blue-600",
    hover: "hover:border-blue-300 hover:shadow-blue-100",
    ring: "ring-blue-400/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-200",
    text: "text-emerald-600",
    hover: "hover:border-emerald-300 hover:shadow-emerald-100",
    ring: "ring-emerald-400/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-200",
    text: "text-purple-600",
    hover: "hover:border-purple-300 hover:shadow-purple-100",
    ring: "ring-purple-400/20",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-200",
    text: "text-orange-600",
    hover: "hover:border-orange-300 hover:shadow-orange-100",
    ring: "ring-orange-400/20",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-200",
    text: "text-rose-600",
    hover: "hover:border-rose-300 hover:shadow-rose-100",
    ring: "ring-rose-400/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-200",
    text: "text-cyan-600",
    hover: "hover:border-cyan-300 hover:shadow-cyan-100",
    ring: "ring-cyan-400/20",
  },
};

/* =========================
   SERVICE CARD COMPONENT
========================= */
function ServiceCard({ service, index, onView }) {
  const Icon = service.icon;
  const colors = colorMap[service.color];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full rounded bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Image Section */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-1 left-3">
           
           <div className="relative flex items-center gap-3">
             <div className={`p-2 rounded -2xl bg-white backdrop-blur-sm ${colors.text}`}>
              <Icon className="w-5 h-5 text-orange-400" />
            </div>
          <h3 className="text font-bold text-gray-200 mb-1">
            {service.title}
          </h3>
          </div>

          <p className="text-sm text-white leading-relaxed line-clamp-2">
            {service.description}
          </p>
          
          </div>

          
          
          {/* Tag Badge */}
          <div className="absolute top-4 right-4">
            <span className={`
              inline-flex items-center gap-1.5 px-3 py-1.5 
              bg-white/90 backdrop-blur-sm 
              text-[10px] font-bold uppercase tracking-wider 
              rounded-full shadow-lg
              ${colors.text}
            `}>
              <Sparkles className="w-3 h-3" />
              {service.tag}
            </span>
            
          </div>

          {/* Icon - Overlay */}
          <div className="hidden absolutebottom-4 left-4">
            <div className={`
              p-3 rounded-2xl 
              bg-white/90 backdrop-blur-sm 
              shadow-lg
              group-hover:scale-110 
              transition-transform duration-300
              ${colors.text}
            `}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4">
          <h3 className="hidden text-xl font-bold text-gray-900 mb-2">
            {service.title}
          </h3>

          <p className="hidden text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Sub-services */}
          <div className="space-y-1.5 mb-5">
            {service.subServices.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0`} />
                <span>{item}</span>
              </div>
            ))}
            {service.subServices.length > 3 && (
              <div className="text-xs text-gray-400 pl-6">
                +{service.subServices.length - 3} more services
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => onView(service)}
              className={`
                flex-1 py-2.5 px-4 rounded 
                bg-gradient-to-r ${service.gradient} 
                text-white text-sm font-medium
                hover:shadow-lg hover:shadow-${service.color}-500/25
                transition-all duration-300 
                hover:scale-[1.02]
                flex items-center justify-center gap-2
              `}
            >
              View Details
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            
            <button className={`
              px-4 py-2.5 rounded
              border-2 border-gray-200
              text-orange-700 text-sm font-medium
              hover:border-${service.color}-300
              hover:bg-${service.color}-50
              transition-all duration-300
              flex items-center gap-1
            `}>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className={`absolute -top-10 -right-10 w-20 h-20 rotate-45 bg-gradient-to-r ${service.gradient} opacity-5`} />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   MODAL COMPONENT
========================= */
function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen || !service) return null;

  const colors = colorMap[service.color];
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header Image */}
        <div className="relative h-48">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-3">
            <div className={`p-3 rounded-2xl bg-white/20 backdrop-blur-sm ${colors.text}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              What We Offer
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {service.subServices.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700 p-2 rounded-xl bg-gray-50"
                >
                  <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className={`
              w-full py-3.5 rounded-xl 
              bg-gradient-to-r ${service.gradient} 
              text-white font-medium
              hover:shadow-lg transition-all duration-300
            `}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });

  const handleViewDetails = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Our Services
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Empowering Education{" "}
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              & Global Opportunities
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full my-4" />

          <p className="text-lg text-gray-600">
            Josro Bridge International provides trusted guidance in university
            placement, IELTS preparation, professional development, labor mobility,
            and international career opportunities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onView={handleViewDetails}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-700">
                Trusted by <span className="font-bold">500+</span> students
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <button className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Explore All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}