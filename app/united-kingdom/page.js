import StudyInUKHero from "@/components/UKHero";
import UnitedKingdomUnis from "@/components/UKUnis";

export default function UKPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="mx-auto min-h-screen max-w-7xl items-center px-6 lg:px-8">
      <StudyInUKHero />
      <UnitedKingdomUnis />
        {/* Hero content goes here */}
      </div>
    </section>
  );
}