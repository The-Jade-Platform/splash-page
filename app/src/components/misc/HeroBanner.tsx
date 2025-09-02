import React from "react";

const HeroBanner = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Background Section */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/jorge-vasconez-LCaKuYefLQk-unsplash.jpg')",
          zIndex: -1,
        }}
      />

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen">
        {/* Main Content Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left Side - Image with Subtext */}
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <div className="p-6">
                <img
                  src="/images/logo.png"
                  alt="Profile"
                  className="w-full h-96 object-contain rounded-lg mb-6"
                />
                <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  The Platform
                </h3>
                <p className="text-xl text-white mb-4 drop-shadow-md font-semibold">
                  Options, Simplified for Advisors
                </p>
                <p className="text-lg text-white leading-relaxed drop-shadow-md">
                  Jade helps wealth advisors manage options strategies at scale
                  — with intelligent opportunity scanning, client reporting, and
                  compliance oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
