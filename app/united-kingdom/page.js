import StudyInUKHero from "@/components/UKHero";
import UnitedKingdomUnis from "@/components/UKUnis";

export default function UKPage() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="relative">
      <StudyInUKHero />
      <UnitedKingdomUnis />
        {/* Hero content goes here */}
      </div>
    </section>
  );
}