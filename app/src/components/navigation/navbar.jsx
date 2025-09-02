"use client";
import React from "react";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // regular and bold
  variable: "--font-pt-serif",
});

export default function Navbar() {
  return (
    <nav
      className={`${ptSerif.className} w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black/5 via-black/0 to-transparent backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-white text-lg hover:text-gray-300 transition"
        >
          home
        </a>
        <a
          href="/contact"
          className="text-white text-lg hover:text-gray-300 transition"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
