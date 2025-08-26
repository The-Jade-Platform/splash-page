import Image from "next/image";
import JoinWaitList from "./Components/joinwaitlist";
import TeamMemberCard from "./Components/TeamMemberCard";
import {
  jaredData,
  steveData,
  annabelData,
  hopeData,
} from "./Components/bios/teamData";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#3A6178] from-[40%] to-white text-gray-800 font-sans text-center">
      {/* Starting Center Logo/phrase here */}
      <div className="w-full bg-cover bg-no-repeat bg-center mask-b-from-70% bg-[url(/Assets/Water.jpg)]">
        <section className="absolute top-0 w-screen h-1/5 bg-[#DCE1E6]">
          {/* absolute inset-x-0 -translate-y-1/2*/}
          <div className="flex flex-col top-0 mx-auto w-full max-w-6xl px-6 mt-5 ">
            {/* <h1 className =" text-4xl md:text-5xl font-bold text-[#0a0101] mb-4 ">
              Options, Simplified for Advisors
              </h1> */}
            <img
              src="/Assets/logo.png"
              alt="Jade Dashboard Preview"
              className="mx-auto w-[clamp(120px,55vw,350px)]"
            />
            <h1 className="relative left-7 bottom-5 text-[clamp(1rem,1vw,1.5rem)] font-bold text-[#424952]">
              Options, Simplified for Advisors
            </h1>
          </div>
        </section>

        <section className="relative h-screen mx-auto pl-10 w-full max-w-6xl px-6 py-12">
          {/* <h1 className ="text-4xl md:text-3xl font-bold text-[#0a0101] ms-55 -mt-9 mb-4 "> */}
          <div className="flex items-center justify-center h-screen">
            <p className="mx-auto text-4xl text-gray-300 max-w-3xl">
              Jade helps wealth advisors manage options strategies at scale —
              with intelligent opportunity scanning, client reporting, and
              compliance oversight.
            </p>
          </div>
        </section>
      </div>

      {/* Sencond half of the page */}

      <section className="w-full max-w-4xl px-6 py-12 mb-20">
        <h1 className="text-4xl font-semibold mb-8 text-gray-200 ">
          About Jade
        </h1>
        <h2 className="mt-20 text-2xl font-semibold mb-4 text-gray-200">
          Built by advisors, for advisors.
        </h2>
        <p className="text-gray-300 text-md">
          Jade was created by experienced fintech founders and advisors who
          understand how hard it is to balance income, risk, and compliance.
          We&apos;re building tools that help advisors deliver smarter
          strategies with less friction.
        </p>
      </section>

      {/* meet the team container */}
      <section className="w-full max-w-6xl mb-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <TeamMemberCard {...jaredData} />
          <TeamMemberCard {...steveData} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TeamMemberCard {...annabelData} />
          <TeamMemberCard {...hopeData} />
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        © 2025 Jade Platform. All rights reserved.
      </footer>
    </div>
  );
}
