"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function TeamCard({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-96 h-[450px] perspective-1000">
      {/* Flipable card container */}
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-full">
            {/* LinkedIn Logo - Top Right */}
            <div
              className={`absolute top-4 right-4 z-10 transition-opacity duration-300 ${
                isFlipped ? "opacity-0" : "opacity-100"
              }`}
            >
              <a
                href={data.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-200"
              >
                <img
                  src="/images/linkedinlogo.webp"
                  alt="LinkedIn Profile"
                  className="w-8 h-8"
                />
              </a>
            </div>

            {/* Image */}
            <div className="h-80 overflow-hidden">
              <img
                src={data.imageUrl}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 h-[70px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold" style={{ color: "#5e0b0b" }}>
                  {data.name}
                </h3>
                <p className="text-sm text-gray-600">{data.jobTitle}</p>
              </div>

              {/* Flip arrow */}
              <button
                onClick={handleFlip}
                className="absolute bottom-4 right-4 p-2 rounded-full text-white hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: "#215f9a" }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg flex flex-col p-6">
          {/* Name / title */}
          <div className="mb-4 pr-12">
            <h3 className="text-xl font-bold" style={{ color: "#5e0b0b" }}>
              {data.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{data.jobTitle}</p>
          </div>

          {/* Scrollable description */}
          <div className="flex-1 relative overflow-hidden">
            <div className="h-full overflow-y-auto scrollbar-hide pr-2 pb-20">
              {data.description?.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-700 mb-3 text-sm leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
            {/* Fade gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
          </div>

          {/* Flip arrow */}
          <button
            onClick={handleFlip}
            className="absolute bottom-4 right-4 p-2 rounded-full text-white hover:opacity-90 transition-all duration-200"
            style={{ backgroundColor: "#215f9a" }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
