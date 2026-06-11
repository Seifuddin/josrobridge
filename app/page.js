import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FindYourPathQuiz from "@/components/FindYourPathQuiz";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FindYourPathQuiz />
      <Services />
    </>
  );
}