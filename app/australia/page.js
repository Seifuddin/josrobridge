import CanadanHero from "@/components/Canda";
import StudyInAustraliaHero from "@/components/HeroAusralia";
import StudyInCanadaHero from "@/components/HeroCanada";
import AustralianUnis from "@/components/UniAustralia";
import CanadaUniversities from "@/components/UniCanada";

export default function AustralianPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="relative">
      <StudyInAustraliaHero />
      <AustralianUnis />
        {/* Hero content goes here */}
      </div>
    </section>
  );
}