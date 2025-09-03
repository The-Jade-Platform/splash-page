"use client";
import React from "react";
import TeamCard from "./TeamCard";

export default function TeamCardsContainer({ teamData }) {
    return (
      <div className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Stack vertically with spacing */}
          <div className="flex flex-col items-center gap-8 md:hidden">
            {teamData.map((member, index) => (
              <TeamCard key={index} data={member} />
            ))}
          </div>
  
          {/* Desktop: Grid layout with spacing */}
          <div className="hidden md:flex md:flex-wrap md:justify-center gap-8">
            {teamData.map((member, index) => (
              <TeamCard key={index} data={member} />
            ))}
          </div>
        </div>
      </div>
    );
  }