"use client";
import TeamCardsContainer from "./TeamCardContainer";
import { jaredData, steveData, annabelData, hopeData, deepData } from "./teamData";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function TeamSection() {
  const teamData = [jaredData, steveData, annabelData, hopeData, deepData];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${ptSerif.className} text-3xl font-extrabold text-center text-gray-900 mb-8`}>
          Meet the Team
        </h2>
      </div>
      <div>
        <TeamCardsContainer teamData={teamData} />
      </div>
    </section>
  );
}
