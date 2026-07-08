import StudyInCanadaHero from "@/components/HeroCanada";
import CanadaUniversities from "@/components/UniCanada";

export default function CanadaPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="mx-auto min-h-screen max-w-7xl items-center px-6 lg:px-8">
      <StudyInCanadaHero />
      <CanadaUniversities />
        {/* Hero content goes here */}
      </div>
    </section>
  );
}