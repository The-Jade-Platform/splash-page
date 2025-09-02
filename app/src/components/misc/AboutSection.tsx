"use client";
import React from "react";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // regular and bold
});

export default function AboutSection() {
  return (
    <section className="min-h-[75vh] max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-16">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src="/images/temp.avif"
          alt="About Image"
          className="w-full h-auto rounded-sm shadow-md object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <h2
          className={`${ptSerif.className} text-3xl font-bold mb-6 text-gray-900`}
        >
          An Options Management Solution.
        </h2>

        <p className="text-gray-800 leading-relaxed">
          Jade is a platform built by advisors, for advisors with the goal to
          help advisors deliver smarter strategies with less friction.
          <br />
          Created by experienced fintech founders and advisors who understand
          how hard it is to balance income, risk and compliance.
        </p>
      </div>
    </section>
  );
}
