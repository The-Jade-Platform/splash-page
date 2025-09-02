import TeamCardsContainer from "./TeamCardContainer";
import {  jaredData, steveData, annabelData, hopeData, deepData } from "./teamData";

export default function TeamSection () {
  const teamData = [jaredData, steveData, annabelData, hopeData, deepData];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Meet the Team</h2>
      
      </div>
      <div>
      <TeamCardsContainer teamData={teamData} />
      </div>
    </section>
  );
}