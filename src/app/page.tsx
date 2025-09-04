import TeamSection from "@/components/team/TeamSection";
import HeroBanner from "@/components/misc/HeroBanner";
// import AboutSection from "@/components/misc/AboutSection";
// import BlockOne from "@/components/misc/BlockTwo";
import JadeBlocks from "@/components/misc/JadeBlocks";
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <JadeBlocks />
      {/* <AboutSection /> */}
      <TeamSection />
    </main>
  );
}
