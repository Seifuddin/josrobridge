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

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <GlobalOpportunitiesCounter />
      <Services />
      <GlobalCTASection />
      <FloatingCTA />
      <WhyJosroWins />
      <StudentSuccessWall />
      <FAQSection />
    </>
  );
}