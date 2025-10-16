import React from 'react';
import aiImage from '../../assets/images/home/ai-power.png'; // update path to your image

const AIActionableIntelligence = () => {
  return (
    <section className='space-top'>
      <div className="container">
        <div className="flex md:flex-row flex-col-reverse gap-8 ">
          {/* Left Text Section */}
          <div className="md:w-[50%]">
            <h3 className="text-4xl font-semibold text-webprimary mb-3">
              AI That Powers <br className="hidden md:block" /> Actionable Intelligence
            </h3>

            <p className="text-para text-lg lg:pe-8 pb-5">
              At ATRN Solutions LLP (“AETURN”), we envision a future powered by AI-enabled innovations under our ZENERIC AI framework — a foundation designed to make artificial intelligence accessible, adaptive, and transformative. Our mission is to revolutionize healthcare, safety, and commerce by developing technologies that are not only intelligent, but also practical, predictive, and impactful in solving real-world challenges.
            </p>
            <p className="text-para text-lg lg:pe-8 ">
              Through ZENERIC AI, we are building a connected ecosystem where data-driven insights enhance human decision-making, automate complex processes, and create opportunities for sustainable growth. From predictive healthcare systems that improve patient outcomes, to intelligent safety solutions that prevent risks before they occur, and AI-driven commerce platforms that redefine customer engagement — AETURN is dedicated to bridging innovation with everyday utility.
            </p>

            <button className="theme-btn-fill mt-4">
              Know More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="right-img md:w-[50%] flex justify-center">
            <img
              src={aiImage}
              alt="AI That Powers Actionable Intelligence"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIActionableIntelligence;
