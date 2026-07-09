import StudyInNewZealandHero from "@/components/NewZealandHero";
import NewZealandUnis from "@/components/NZealandUnis";

export default function NewZealandPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="relative">
      <StudyInNewZealandHero />
      <NewZealandUnis />
        {/* Hero content goes here */}
      </div>
    </section>
  );
}