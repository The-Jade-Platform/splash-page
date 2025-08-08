import Image from "next/image";
import JoinWaitList from "./Components/joinwaitlist";

export default function Home() {
  return (
    // annabel -- setting new colors
    <div className =" min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#335E95] text-gray-800 font-sans text-center">
          {/* <JoinWaitList/> */}
          {/* <form className = "mt-6 flex flex-col  gap-2 max-w-md mx-auto">
            <div>
              <input
              type='text'
              placeholder='Enter your name'
              className="px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 "
              />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <button
                type="submit"
                className = "bg-[#4A3AFF] text-white px-5 py-2 rounded-md hover:bg-indigo-800 "
              >
                Join the Waitlist
              </button>
          </form> */}
      

      {/* Starting Center Logo/phrase here */}

        <section className="relative h-screen pl-10 w-full max-w-6xl px-6 py-12">

          <header className="w-full max-w-6xl px-6 mt-10" >
              {/* <h1 className =" text-4xl md:text-5xl font-bold text-[#0a0101] mb-4 ">
              Options, Simplified for Advisors
              </h1> */}
              <p className = "text-lg text-gray-700 max-w-2xl mx-auto">
              Jade helps wealth advisors manage covered call strategies at scale —
              with intelligent opportunity scanning, client reporting, and
              compliance oversight.
              </p>
            </header>
          <img
            src="/Assets/logo.png"
            alt="Jade Dashboard Preview"
            className = "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            // className = "container max-w-2xl mx-auto"
            // className = "flex items-center justify-center"
          />
          {/* <h1 className ="text-4xl md:text-3xl font-bold text-[#0a0101] ms-55 -mt-9 mb-4 "> */}
          <h1 className = "relative top-1/2 -translate-y-1/2 ms-60 text-4xl md:text-3xl font-bold text-[#424952]">
            Options, Simplified for Advisors
            </h1>

        </section>

      {/* Sencond half of the page */}

      <section className="w-full max-w-4xl px-6 py-12 mb-20">
        <h1 className = "mt-16 text-4xl font-semibold mb-4">
            About Jade
          </h1>
        <h2 className = "mt-16 text-2xl font-semibold mb-4">
        Built by advisors, for advisors.
        </h2>
        <p className="text-gray-700 text-md">
          Jade was created by experienced fintech founders and advisors who
          understand how hard it is to balance income, risk, and compliance.
          We're building tools that help advisors deliver smarter strategies
          with less friction.

        </p>
      </section>
      <section className="w-full max-w-6xl mb-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Meet the Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">
              Jared Lucas
            </h3>
            <p className="text-gray-700">Co-Founder & Chief Executive Officer</p>
            <p className="text-sm text-gray-500 mt-2">
              Jared brings a proven track record of strategic vision, entrepreneurial execution, and operational excellence to financial technology leadership.              
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Jared's career began in corporate strategy at Areva (now Orano), where he focused on mergers and acquisitions and climate change strategy for the nuclear energy giant. This experience in complex, highly regulated industries built his expertise in strategic risk assessment and long-term value creation.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              As an entrepreneur, Jared founded and successfully scaled a sustainable infrastructure company across Philadelphia, New York City, and Baltimore, ultimately achieving a profitable exit. He secured the first public-private partnership grant from the Department of Energy's $2 billion fund and executed a low seven-figure installation of a full-acre green roof, demonstrating mastery of innovative financing and large-scale project delivery
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Transitioning to private equity, Jared served as an operating executive for portfolio companies, leading cross-functional teams to develop financial cases for technology implementations. His initiatives delivered measurable impact, including a documented 20% revenue uplift for a $2 billion revenue consolidation.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              For the past five years, Jared has operated in venture capital, advising startups and multinational corporations on scaling and investment strategies. His due diligence work includes saving a German Fortune 50 company $75 million by recommending against a problematic Series C investment. As a judge, mentor, and advisor for deep tech startups through MassChallenge, he continues to identify and nurture breakthrough technologies.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Jared's experience spans the complete business lifecycle—from startup founding through institutional-scale operations—combining strategic thinking with hands-on execution and quantifiable results.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Jared holds graduate degrees from University of Pennsylvania, École des Mines de Paris, and Tsinghua University.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <img src={'/Assets/Steve.jpg'} className='rounded-xl'/>
            <h3 className="text-xl font-bold text-gray-900">Steve Dorval</h3>
            <p className="text-gray-700">
              Co-Founder & Chief Product and Operating Officer
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Steve Dorval is a fintech executive and advisor technology pioneer with over 25 years of
              experience building platforms that serve both financial advisors and consumers. As
              Head of Advice and Innovation at John Hancock, he oversaw Signator Investors, a
              2,000-advisor independent broker-dealer with $400B in AUA.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              He also led the launch of three internal fintech startups – Twine (named Apple’s App of
              the Day), COIN and MyPortfolio — creating intuitive, goal-based investing tools that
              blended robo and human advice.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Before John Hancock, Steve was Head of Retirement &amp; Investment Strategy at New
              York Life, where he scaled stable value and defined-contribution investment solutions to
              over $12B in AUM. He later led advisor-sold defined contribution product distribution at
              MainStay Investments.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              A frequent speaker at advisor and fintech industry events, Steve has been quoted in
              TIME, Forbes, Business Insider, and InvestmentNews for his insights on hybrid advice,
              retirement innovation, and consumer behavior. He now mentors startups through
              MassChallenge and serves on fintech advisory boards, bringing institutional scale and
              startup agility to Jade.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Steve graduated with a B.A. in English from Providence College and is a CFA charter
              holder. He is a member of the CFA Institute and the Boston Security Analysts Society,
              Inc. He has held a number of Securities Licenses over the tenure of his career (6, 7,
              65, 26).
            </p>
          </div>
       
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8"> 

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">
              Annabel Huber
            </h3>
            <p className="text-gray-700">Operations Analyst</p>
            <p className="text-sm text-gray-500 mt-2">
              Annabel is a Colby College graduate, holding her Bachelor’s degree in Astrophysics and Computer Science. At Jade, she works with programming, market research, and strategic analysis. 
              </p>
            <p className="text-sm text-gray-500 mt-2">
            While her educational background gives her an analytical mindset and logic-based approach to finding solutions, Annabel has also worked in many customer-facing roles in the past, which drive her passion for a client-based product made for the needs of real people. 
            </p>
            <p className="text-sm text-gray-500 mt-2">
            The combination of strong product development with advanced mathematical and problem solving skills allows Annabel to tackle problems with Jade through a lens of curiosity, innovation, and excitement.
            </p>
            
          </div>

        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        © 2025 Jade Platform. All rights reserved.
      </footer>
    </div>
  );
}
