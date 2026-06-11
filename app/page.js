import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FindYourPathQuiz from "@/components/FindYourPathQuiz";
import CountryOpportunityMap from "@/components/CountryOpportunityMap";
import WhyJosroWins from "@/components/Why";
import GlobalOpportunitiesCounter from "@/components/Counters";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <GlobalOpportunitiesCounter />
      <Services />
      <WhyJosroWins />
    </>
  );
}