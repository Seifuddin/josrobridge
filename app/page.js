import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyJosroWins from "@/components/Why";
import GlobalOpportunitiesCounter from "@/components/Counters";
import StudentSuccessWall from "@/components/Successwall";
import GlobalCTASection from "@/components/Action";
import FAQSection from "@/components/FAQ";
import GlobalAcademicJourney from "@/components/Journey";
import ContactSection from "@/components/Contacts";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Homepage Structured Data */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "EducationalOrganization",

            name: "Josro Bridge",

            alternateName: "Josro Bridge International Limited",

            url: "https://www.josrobridge.com",

            logo: "https://www.josrobridge.com/favicon.ico",

            image: "https://www.josrobridge.com/og-image.jpg",

            description:
              "Study abroad consultancy in Kenya offering university placement, IELTS training, visa assistance, international labor mobility, business consultancy and professional training.",

            email: "info@josrobridge.com",

            areaServed: {
              "@type": "Country",
              name: "Kenya",
            },

            knowsAbout: [
              "Study Abroad",
              "University Placement",
              "IELTS Training",
              "Visa Assistance",
              "International Education",
              "Business Consultancy",
              "International Labor Mobility",
            ],

            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              availableLanguage: ["English"],
            },

            sameAs: [
              // Replace these with your real profiles
              // "https://facebook.com/yourpage",
              // "https://instagram.com/yourpage",
              // "https://linkedin.com/company/yourcompany"
            ],
          }),
        }}
      />

      <Hero />
      <About />
      <GlobalAcademicJourney />
      <Services />
      <GlobalOpportunitiesCounter />
      <WhyJosroWins />
      <StudentSuccessWall />
      <GlobalCTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
}