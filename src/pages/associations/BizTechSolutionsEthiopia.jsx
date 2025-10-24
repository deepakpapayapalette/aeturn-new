import React from 'react'
import Banner from '../../components/common/Banner'
import bannerImage from '../../assets/images/banner2.gif'
import icon1 from '../../assets/images/associations/icon1.png'
import { Cpu, Stethoscope, Car, Leaf, Brain, Activity, Truck, Recycle } from 'lucide-react';
import { FaHospitalSymbol } from "react-icons/fa";
import cardImg from "../../assets/images/innovations.png"
import ThemeCard from '../../components/UI/ThemeCard';
import AssociationHead from '../../components/reusable/AssociationHead';
const bannerContent = {
  // image: bannerImage,
  title: "BizTech Solutions, Ethiopia",
  description: "Partnering with Ethiopia’s Ministry of Health, AETURN delivers innovative tech solutions to strengthen healthcare and efficiency."
}
const technologyCards = [
  {
    _id: 1,
    title: "AI & Machine Learning",
    description: "Smart systems for decision-making and automation.",

    icon: Brain,
    iconColor: "#333"
  },
  {
    _id: 2,
    title: "Healthcare Tech",
    description: "Advanced tools for diagnostics, telemedicine, and patient care.",

    icon: Activity,
    iconColor: "#333"
  },
  {
    _id: 3,
    title: "Mobility & Transportation",
    description: "Smart Vehicle, road safety, and IoT-enabled solutions.",

    icon: Truck,
    iconColor: "#333"
  },
  {
    _id: 4,
    title: "Sustainability & Public Health",
    description: "Green technologies, energy-efficient solutions, and community impact",

    icon: Recycle,
    iconColor: "#333"
  }
];
const cardContent = {
  img: cardImg,
  // title: "Smart traffic, collision prevention, driver awareness, emergency response, and data-driven insights — all powered by technology to make roads safer.",
  // subTitle: 'Smart traffic, collision prevention, driver awareness, emergency response, and data-driven insights — all powered by technology to make roads safer.',
  btnText: 'Explore Innovations ',
  btnLink: '#',
  icon: ''
}
const associationHeadData = {
  img: icon1,
  title: "BizTech Solutions, Ethiopia",
  subtitle: "Smart solutions, stronger health systems.",
  subheading: "How and why the partnership started",
  description: "AETURN partnered with the BizTech Solutions, EthiopiaBizTech Solutions, Ethiopia to leverage technology in addressing healthcare challenges. The collaboration was initiated to improve efficiency, strengthen health systems, and deliver innovative solutions that enhance access and quality of care for communities across the country."
}
const BizTechSolutionsEthiopia = () => {
  return (
    <>
      <Banner data={bannerContent} />
      <AssociationHead data={associationHeadData} />

      <section className="space-top ">
        <div className="container">
          <h2 className='text-webprimary text-2xl md:text-4xl mb-6'>Focus areas where We Collaborated</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {technologyCards.map((card) => (
              <div
                key={card?._id || index}
                className="domain-card bg-white text-gray-800 rounded-xl p-3 gap-2 shadow-md space-y-2 border border-gray-300 hover:shadow-lg transition-shadow duration-300 "
              >
                <div className=" rounded-full border border-gray-300 w-14 h-14 flex items-center justify-center ">
                  <span className="" style={{ display: 'inline-block' }}>
                    <card.icon className="w-9 h-9  " style={{ color: card.iconColor }} />
                  </span></div>
                <h3 className="sm:text-xl font-semibold text-webprimary">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='space-top container'>
        <ThemeCard data={cardContent} />
      </div>
    </>
  )
}

export default BizTechSolutionsEthiopia;




