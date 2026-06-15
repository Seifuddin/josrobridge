import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FindYourPathQuiz from "@/components/FindYourPathQuiz";
import CountryOpportunityMap from "@/components/CountryOpportunityMap";
import WhyJosroWins from "@/components/Why";
import GlobalOpportunitiesCounter from "@/components/Counters";
import StudentSuccessWall from "@/components/Successwall";
import FloatingCTA from "@/components/CTA";
import GlobalCTASection from "@/components/Action";
import FAQSection from "@/components/FAQ";
import GlobalAcademicJourney from "@/components/Journey";
import Script from "next/script";

export const metadata = {
  title: "Study Abroad, IELTS & University Placement in Kenya | Josro Bridge",
  description:
    "Josro Bridge International Limited helps Kenyan students study abroad through university placement, IELTS training, visa support, and international education consultancy services.",
  keywords: [
    "study abroad Kenya",
    "university placement Kenya",
    "IELTS training Kenya",
    "visa assistance Kenya",
    "work abroad programs Kenya",
    "international education consultants Kenya",
  ],
};

export default function Home() {
  return (
    <>
      {/* HOMEPAGE SCHEMA (EDUCATIONAL LANDING PAGE SIGNAL) */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Josro Bridge International Limited",
            url: "https://josrobridge.com",
            description:
              "Study abroad consultancy in Kenya offering university placement, IELTS training, visa assistance, and international education services.",
            areaServed: "Kenya",
            knowsAbout: [
              "Study Abroad",
              "University Placement",
              "IELTS Training",
              "Visa Assistance",
              "International Education"
            ]
          }),
        }}
      />

      <Hero />

      <GlobalAcademicJourney />

      <GlobalCTASection />

      <About />

      <GlobalOpportunitiesCounter />

      <Services />

      <WhyJosroWins />

      <StudentSuccessWall />

      <FAQSection />
    </>
  );
}