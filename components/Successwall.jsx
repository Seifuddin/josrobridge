"use client";
import Link from "next/link";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Quote, 
  GraduationCap, 
  MapPin, 
  BadgeCheck, 
  Sparkles, 
  Star,
  X,
  Calendar,
  Award,
  Globe,
  Heart
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const students = [
  {
    id: 1,
    name: "Grace W.",
    from: "Kisumu, Kenya",
    country: "Canada 🇨🇦",
    achievement: "Studying Nursing in Toronto",
    before: "Uncertain career path",
    after: "Fully funded nursing placement",
    story: "Josro Bridge guided me through admissions and scholarship opportunities, helping me secure a life-changing nursing placement in Canada.",
    fullStory: "When I first started my journey, I had no idea how to navigate the complex world of international education. I was working as a nurse assistant in Kisumu, struggling to make ends meet and feeling stuck in my career. Josro Bridge changed everything. They took the time to understand my goals, my financial situation, and my dreams of becoming a registered nurse in Canada. Their team helped me research universities, prepare my applications, and most importantly, find scholarships that covered my entire tuition. Within 6 months, I had an acceptance letter from a top nursing school in Toronto with full funding. Now I'm living my dream, studying in one of the world's best healthcare systems, and I'm already getting job offers before graduation. Josro Bridge didn't just help me get into school - they helped me build a future.",
    image: "/images/nurse-scaled.webp",
    rating: 5,
    date: "2024",
    category: "Healthcare",
  },
  {
    id: 2,
    name: "Muriithi Nguru",
    from: "Nairobi, Kenya",
    country: "United Kingdom 🇬🇧",
    achievement: "Computer Science Student",
    before: "Limited academic opportunities",
    after: "Accepted into a UK university",
    story: "The entire application process felt simple and organized. Today I'm pursuing Computer Science in the UK.",
    fullStory: "Growing up in Nairobi, I always dreamed of studying abroad but thought it was impossible for someone like me from a middle-class family. I had good grades but no connections, no knowledge of how the international education system worked, and no idea how to fund it. Josro Bridge was my guiding light. They helped me understand which UK universities were the best fit for my Computer Science goals, guided me through every step of the UCAS application, and connected me with scholarship opportunities I never knew existed. They also helped me with my visa application and even prepared me for my interview. Today, I'm at a top UK university, learning from world-class professors, and building connections that will last a lifetime. My family is so proud, and I couldn't have done it without Josro Bridge.",
    image: "/images/IMG_20240804_185749_718~2.jpg",
    rating: 5,
    date: "2023",
    category: "Technology",
  },
  {
    id: 3,
    name: "Amina S.",
    from: "Mombasa, Kenya",
    country: "Germany 🇩🇪",
    achievement: "Engineering Training Program",
    before: "Unsure about career direction",
    after: "Vocational placement in Germany",
    story: "I discovered a clear pathway into engineering and secured an international vocational opportunity in Germany.",
    fullStory: "After finishing high school in Mombasa, I was completely lost. I knew I wanted to do something in engineering, but I didn't know where to start or what options were available to me. My family couldn't afford university fees, and I felt like giving up on my dreams. Then I found Josro Bridge. They introduced me to vocational training programs in Germany that I never knew existed - programs that pay you while you learn! They helped me apply, prepared me for the German language requirements, and guided me through every step. Now I'm in Germany, learning from some of the best engineers in the world, getting paid for it, and building a career that will support my family for generations. This opportunity changed my entire life trajectory.",
    image: "/images/muslim-portrait-college-student-commute-class-learning-future-studying-university-travel-start-happy-black-woman-with-book-confidence-school-education-scholarship_590464-516135.avif",
    rating: 5,
    date: "2024",
    category: "Engineering",
  },
  {
    id: 4,
    name: "Sharon N.",
    from: "Eldoret, Kenya",
    country: "New Zealand 🇳🇿",
    achievement: "Bachelor of Hospitality Management",
    before: "Unsure which country matched her career goals",
    after: "Accepted into a leading New Zealand institution",
    story: "The guidance I received helped me choose the right course and successfully begin my international education journey.",
    fullStory: "I was a bright student with good grades, but I was overwhelmed by all the choices. Which country should I study in? Which university was the best fit? What course would lead to a successful career? Josro Bridge helped me sort through all the noise. They assessed my interests and skills and recommended New Zealand - a country I had never even considered! They explained why it was perfect for Hospitality Management and connected me with universities I could afford. Their team helped me with every single application, interviewed me to prepare for admissions, and even helped my family understand the process. Now I'm studying in New Zealand, working part-time in the hospitality industry, and already building the career I've always dreamed of. I'm so grateful for the clarity and support Josro Bridge provided.",
    image: "/images/DSC_0244-1-scaled.jpg",
    rating: 5,
    date: "2023",
    category: "Hospitality",
  },
  {
    id: 5,
    name: "Kevin O.",
    from: "Kisii, Kenya",
    country: "Australia 🇦🇺",
    achievement: "Information Technology Student",
    before: "Limited access to global opportunities",
    after: "Started an IT degree in Australia",
    story: "From university selection to visa processing, every step was handled professionally and efficiently.",
    fullStory: "I always wanted to study IT abroad, but the process seemed impossible. There were so many steps - researching universities, checking requirements, preparing applications, finding funding, applying for visas... I was completely overwhelmed and nearly gave up. Then a friend recommended Josro Bridge. From our first meeting, they made everything feel manageable. They created a step-by-step plan, helped me choose the best universities in Australia for my goals, guided me through the application process, found scholarship opportunities, and even helped me with my visa interview preparation. Their team was with me every step of the way. Now I'm in Australia, studying IT at a top university, and I already have internships lined up with major tech companies. Josro Bridge turned my impossible dream into a reality.",
    image: "/images/11062b_def775dbcc4b42d2950e4764e6bed5b8~mv2.jpg",
    rating: 5,
    date: "2024",
    category: "Technology",
  },
  {
    id: 6,
    name: "Brian K.",
    from: "Nakuru, Kenya",
    country: "Australia 🇦🇺",
    achievement: "Business Management Student",
    before: "Unsure where to study",
    after: "Accepted into a leading Australian institution",
    story: "With expert guidance, I found the right university and course to match my long-term career goals.",
    fullStory: "Coming from a small town in Nakuru, studying abroad felt like a distant dream. I had good grades but no guidance - my family didn't know how to help me navigate international education, and I felt lost. Josro Bridge changed everything. They helped me identify my strengths and interests, matched me with the right business management programs in Australia, and guided me through the entire application process. They even helped me with my scholarship applications, and I received partial funding! Now I'm studying at one of Australia's leading business schools, learning from industry experts, and building a network that will help me achieve my goal of becoming a business leader in Kenya. Josro Bridge gave me the roadmap to success.",
    image: "/images/business-management-vs-business-administration.jpg",
    rating: 5,
    date: "2023",
    category: "Business",
  },
];

export default function StudentSuccessWall() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openStory = (student) => {
    setSelectedStudent(student);
    document.body.style.overflow = 'hidden';
  };

  const closeStory = () => {
    setSelectedStudent(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GraduationCap className="w-10 h-10 mx-auto mb-4 text-orange-500" />
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Student Success Stories
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-900">
              Real Students.{" "}
              <span className="text-orange-500">Real Transformations.</span>
            </h3>
            <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full my-3"></div>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              See how students from Kenya have successfully achieved their academic and career ambitions through international opportunities.
            </p>
          </motion.div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {students.map((student, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-shadow h-full group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-semibold text-slate-700 shadow-lg">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {student.rating}.0
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <div className="px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-semibold text-slate-700 shadow-lg">
                        {student.country}
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="text-lg font-bold leading-tight group-hover:text-orange-200 transition-colors">
                        {student.name}
                      </h4>
                      <p className="text-xs text-white/90 font-medium">
                        {student.achievement}
                      </p>
                      <div className="flex items-center gap-1 text-white/70 text-[10px] mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{student.from}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Verified Badge */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wide">
                        Verified Success
                      </span>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="w-4 h-4 text-orange-200 absolute -top-0.5 -left-0.5" />
                      <p className="text-slate-600 text-xs leading-relaxed pl-4 line-clamp-2">
                        "{student.story}"
                      </p>
                    </div>

                    {/* Before/After */}
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5">
                        <p className="text-[8px] uppercase font-bold text-slate-400 tracking-wider">
                          Before
                        </p>
                        <p className="text-xs text-slate-700 font-medium mt-0.5">
                          {student.before}
                        </p>
                      </div>
                      <div className="bg-orange-50 border border-orange-100 rounded-xl p-2.5">
                        <p className="text-[8px] uppercase font-bold text-orange-500 tracking-wider">
                          After
                        </p>
                        <p className="text-xs text-slate-800 font-semibold mt-0.5">
                          {student.after}
                        </p>
                      </div>
                    </div>

                    {/* Read Full Story Button */}
                    <button
                      onClick={() => openStory(student)}
                      className="mt-3 w-full py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                    >
                      Read Full Story →
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Full Story Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeStory}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={closeStory}
                className="sticky top-0 float-right m-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-orange-50 transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Modal Content */}
              <div className="p-6 pt-0">
                {/* Header Image */}
                <div className="relative w-full h-64 rounded 2xl overflow-hidden -mt-6">
                  <Image
                    src={selectedStudent.image}
                    alt={selectedStudent.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-orange-500/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                        {selectedStudent.category}
                      </span>
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-xs font-semibold">
                        {selectedStudent.country}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold">{selectedStudent.name}</h2>
                    <p className="text-white/90 text-sm mt-1">{selectedStudent.achievement}</p>
                  </div>
                </div>

                {/* Story Details */}
                <div className="mt-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-orange-50 rounded-xl p-3 text-center">
                      <Award className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                      <p className="text-xs text-slate-500">Status</p>
                      <p className="text-sm font-semibold text-slate-800">Success</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-3 text-center">
                      <Calendar className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                      <p className="text-xs text-slate-500">Year</p>
                      <p className="text-sm font-semibold text-slate-800">{selectedStudent.date}</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-3 text-center">
                      <Heart className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                      <p className="text-xs text-slate-500">Journey</p>
                      <p className="text-sm font-semibold text-slate-800">Transformative</p>
                    </div>
                  </div>

                  {/* Full Story */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Quote className="w-5 h-5 text-orange-500" />
                      The Full Story
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm">
                      {selectedStudent.fullStory}
                    </p>
                  </div>

                  {/* Journey Summary */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                        Before Josro Bridge
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        {selectedStudent.before}
                      </p>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                      <p className="text-[10px] uppercase font-bold text-orange-500 tracking-wider mb-1">
                        After Josro Bridge
                      </p>
                      <p className="text-sm text-slate-800 font-semibold">
                        {selectedStudent.after}
                      </p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-center text-white">
                    <h4 className="text-lg font-bold mb-2">Ready to Start Your Journey?</h4>
                    <p className="text-white/90 text-sm mb-4">
                      Join hundreds of successful students who transformed their lives with Josro Bridge
                    </p>
                    <button className="hidden px-6 py-2.5 bg-white text-orange-600 font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105">
                      Apply Now →
                    </button>
                    <a
                    href="/contacts"
                    className="px-6 py-2.5 bg-white text-orange-600 font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105"
                  >
                    Apply Now →
                  </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}