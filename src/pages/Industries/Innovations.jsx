import React from 'react'
import Banner from '../../components/common/Banner'
import cardImg from "../../assets/images/innovations.png"
const bannerContent = {
  // image: bannerImage,
  title: "Innovations",
  description: "AETURN champions innovation to create technology-driven solutions for a smarter, more efficient future."
}
import { Cpu, Stethoscope, Car, Leaf, Brain, Activity, Truck, Recycle } from 'lucide-react';

const technologyCards = [
  {
    _id: 1,
    title: "AI & Machine Learning",
    description: "Smart systems for decision-making and automation.",
    lookup_value: "ai-machine-learning",
    icon: Brain,
    iconColor: "#333"
  },
  {
    _id: 2,
    title: "Healthcare Tech",
    description: "Advanced tools for diagnostics, telemedicine, and patient care.",
    lookup_value: "healthcare-tech",
    icon: Activity,
    iconColor: "#333"
  },
  {
    _id: 3,
    title: "Mobility & Transportation",
    description: "Smart Vehicle, road safety, and IoT-enabled solutions.",
    lookup_value: "mobility-transportation",
    icon: Truck,
    iconColor: "#333"
  },
  {
    _id: 4,
    title: "Sustainability & Public Health",
    description: "Green technologies, energy-efficient solutions, and community impact",
    lookup_value: "sustainability-public-health",
    icon: Recycle,
    iconColor: "#333"
  }
];

import { Rocket, FileText, TrendingUp, Heart } from 'lucide-react';
import ThemeCard from '../../components/reusable/ThemeCard';
import InnovationCard from '../../components/reusable/InnovationCard';
import ScrollTopAtuo from '../../components/common/ScrollTopAtuo';



const statisticsCards = [
  {
    _id: 1,
    value: "120K+",
    label: "Innovative projects",
    description: "delivered",
    lookup_value: "projects-delivered",
    icon: Rocket,
    iconColor: "#3B82F6"
  },
  {
    _id: 2,
    value: "5+",
    label: "Patents/technologies",
    description: "developed",
    lookup_value: "patents-developed",
    icon: FileText,
    iconColor: "#10B981"
  },
  {
    _id: 3,
    value: "50+",
    label: "Efficiency improvements",
    description: "Industries impacted",
    lookup_value: "industries-impacted",
    icon: TrendingUp,
    iconColor: "#F59E0B"
  },
  {
    _id: 4,
    value: "24/7",
    label: "/lives benefited",
    description: "lives benefited",
    lookup_value: "lives-benefited",
    icon: Heart,
    iconColor: "#EF4444"
  }
];


const cardContent = {
  img: cardImg,
  title: "Smart traffic, collision prevention, driver awareness, emergency response, and data-driven insights — all powered by technology to make roads safer.",
  btnText: 'Explore Innovations ',
  btnLink: '#',
  icon: ''
}
const Innovations = () => {
  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <div className='space-top container'>
        <h2 className='lg:text-4xl text-2xl text-webprimary lg:mb-8 mb-6'>Our Key Areas of Innovation</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {technologyCards.map((card, index) => (
            <InnovationCard card={card} key={card._id || index} />
          ))}
        </div>
      </div>
      <div className='space-top container'>
        <div className='rounded-lg md:shadow-card p-3'>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {statisticsCards.map((card) => (
              <div key={card._id} className="text-center p-4">
                {/* <card.icon className="w-8 h-8 mx-auto mb-2" style={{ color: card.iconColor }} /> */}
                <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{card.value}</div>
                <div className="text-md  text-webPara">{card.label}</div>
                <div className="text-md  text-webPara">{card.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div> 
      <div className='space-top container'>
        <ThemeCard data={cardContent} />
      </div>
    </>
  )
}

export default Innovations

