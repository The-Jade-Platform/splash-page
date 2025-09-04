import React from "react";

const JadeBlocks = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Block 1: Market-Focused Description - Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/newspaper.jpg"
              alt="Market Analytics and Growth"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h2
              className="text-3xl font-bold mb-6 font-serif"
              style={{ color: "#5e0b0b" }}
            >
              Revolutionizing Wealth Management
            </h2>

            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Jade is revolutionizing wealth management by bridging the
                critical gap between growing client demand for sophisticated
                income strategies and the tools available to independent
                Registered Investment Advisors (RIAs).
              </p>
              <p>
                With over $100 billion in global assets under management in
                covered call strategies and 97% year-over-year growth in options
                usage, the market is clearly demanding more than traditional
                60/40 portfolios can deliver.
              </p>
              <p>
                Jade&apos;s automation-supported options platform transforms the
                complex world of derivatives trading into an accessible,
                scalable solution that enables RIAs to unlock new value for
                their clients.
              </p>
              <p>
                By removing the &quot;complexity barrier&quot; that has historically
                limited options adoption, Jade empowers advisors to confidently
                implement yield-generating strategies, manage concentrated stock
                positions, and create customized income solutions—all while
                maintaining full compliance and oversight.
              </p>
            </div>
          </div>
        </div>

        {/* Block 2: Solution-Focused Description - Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2
              className="text-3xl font-bold mb-6 font-serif"
              style={{ color: "#5e0b0b" }}
            >
              Integrated Options Platform
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Founded by experienced financial services executives Jared Lucas
                (CEO) and Steven Dorval (COO), Jade is an early-stage fintech
                startup building an integrated options platform for independent
                wealth advisors.
              </p>
              <p>
                The company&apos;s platform simplifies options trading through
                automation, customizable strategies, and built-in compliance
                monitoring.
              </p>
              <p>
                Unlike packaged ETF products, generic wealth tech platforms, or
                third-party overlay services, Jade combines scalability with
                advisor control, client-level customization with integrated
                compliance, and cost-effectiveness with specialized focus on
                options overlays.
              </p>
              <p>
                The platform allows RIAs to create, monitor, and execute
                strategies even on unbillable concentrated positions —from
                covered calls to protective puts and collars—while providing
                real-time dashboards, automated risk management, and integration
                with major custodians like Schwab, Fidelity, and Pershing.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <img
              src="/images/meeting.jpg"
              alt="Technology Platform and Integration"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadeBlocks;
