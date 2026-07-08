import StudyInNewZealandHero from "@/components/NewZealandHero";
import NewZealandUnis from "@/components/NZealandUnis";

export default function NewZealandPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="mx-auto min-h-screen max-w-7xl items-center px-6 lg:px-8">
      <StudyInNewZealandHero />
      <NewZealandUnis />
        {/* Hero content goes here */}
      </div>
    </section>
  );
}