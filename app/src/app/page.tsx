import TeamSection from "@/components/team/TeamSection";
import HeroBanner from "@/components/misc/HeroBanner";
import AboutSection from "@/components/misc/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <TeamSection />
    </main>
  );
}
