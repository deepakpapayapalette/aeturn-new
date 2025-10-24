import React from "react";
import "../../assets/styles/home.css";
import medicalTourism from '../../assets/images/home/Medical-Tourism.png'
import roadSafety from '../../assets/images/home/Road-Safety.png'
import publicHealth from '../../assets/images/home/Public-Health.png'
import innovations from '../../assets/images/home/Innovations.png'
import skillDevelopment from '../../assets/images/home/Skill-Development.png'
import tourism from '../../assets/images/home/Tourism.png'

const CoreBusinessDomains = () => {
  const businessDomains = [
    {
      title: "Medical Tourism",
      description: "Platforms connecting patients with global medical expertise and telemedicine services.",
      image: medicalTourism,
    },
    {
      title: "Road Safety",
      description: "Apps and solutions for driver fitness, vehicle tracking, and accident prevention.",
      image: roadSafety
    },
    {
      title: "Public Health",
      description: "Technology solutions to improve healthcare systems and government health monitoring.",
      image: publicHealth
    },
    {
      title: "Innovations",
      description: "AI-enabled solutions and futuristic technology for actionable intelligence.",
      image: innovations
    },
    {
      title: "Skill Development",
      description: "Programs to enhance workforce skills, especially in healthcare and technology.",
      image: skillDevelopment
    },
    {
      title: "Tourism",
      description: "Platforms connecting travellers, local services, commerce, trade, taste and treatment.",
      image: tourism
    },
  ];

  return (
    <section className="space-top bg-webprimary py-12">
      <div className="container  text-white ">
        <h2 className=" text-2xl md:text-4xl font-semibold mb-4">Our Core Business Domains</h2>
        <p className="text-lg mb-10">
          Delivering innovative, tech-enabled solutions across Public Health,
          Medical Tourism, Road Safety, Skill Development, and cutting-edge AI
          Innovations.
        </p>
        <div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessDomains.map((domain, index) => (
            <div
              key={index}
              className="domain-card bg-white text-gray-800 rounded-xl p-6 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="md:text-2xl font-semibold text-webprimary mb-2">
                  {domain.title}
                </h3>
                <p className="sm:text-lg mb-3">{domain.description}</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a
                  href="#"
                  className="text-[#0B63CE] font-semibold text-lg hover:translate-x-4  transition-transform ease-in-out duration-200"
                >
                  Know More →
                </a>
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBusinessDomains;
