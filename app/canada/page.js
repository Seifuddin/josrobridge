import CanadanHero from "@/components/Canda";
import StudyInCanadaHero from "@/components/HeroCanada";
import CanadaUniversities from "@/components/UniCanada";

export default function CanadaPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="relative">
      <StudyInCanadaHero />
      <CanadaUniversities />
        {/* Hero content goes here */}
      </div>
    </section>
  );
}