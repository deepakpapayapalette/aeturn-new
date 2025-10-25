import React from 'react'
import bannerimg from "../../assets/images/about/min-banner.png"
import Banner2 from '../../components/common/Banner2'
import Banner from '../../components/common/Banner'
import InnovationCard from '../../components/reusable/InnovationCard'
import { Lightbulb, TrendingUp, Globe, Users } from 'lucide-react';
import culture1 from "../../assets/images/about/gallery/culture1.png";
import culture2 from "../../assets/images/about/gallery/culture2.png";
import culture3 from "../../assets/images/about/gallery/culture3.png";
import culture4 from "../../assets/images/about/gallery/culture4.png";
import culture5 from "../../assets/images/about/gallery/culture5.png";
import culture6 from "../../assets/images/about/gallery/culture6.png";
import culture7 from "../../assets/images/about/gallery/culture7.png";
import culture8 from "../../assets/images/about/gallery/culture8.png";
import culture9 from "../../assets/images/about/gallery/culture9.png";
import culture10 from "../../assets/images/about/gallery/culture10.png";
import culture11 from "../../assets/images/about/gallery/culture11.png";
import culture12 from "../../assets/images/about/gallery/culture12.png";
import { useEffect } from 'react'



const bannerContent = {
  // image: bannerImage,
  title: "Careers",
  description: "Join our growing family — explore opportunities to build, learn, and make an impact with us."
}

const banner2Content = {
  image: bannerimg,
  title: " Transforming Public Health with Technology",
  description: "AI-driven, tech-enabled solutions improving healthcare access,  disease management, and community well- being at scale.",
  // button: "Partner With Us",
  // link: "#"
}

const careerBenefits = [
  {
    id: 1,
    title: "Innovative Projects",
    description: "Work on AI-powered, future-ready solutions",
    lookup_value: "innovative-projects",
    icon: Lightbulb,
    iconColor: "#1268b3"
  },
  {
    id: 2,
    title: "Growth Opportunities",
    description: "Learn, lead, and shape your career",

    icon: TrendingUp,
    iconColor: "#1268b3"
  },
  {
    id: 3,
    title: "Global Impact",
    description: "Your work improves healthcare, safety, and communities",

    icon: Globe,
    iconColor: "#1268b3"
  },
  {
    id: 4,
    title: "Collaborative Culture",
    description: "Work on AI-powered, future-ready solutions",

    icon: Users,
    iconColor: "#1268b3"
  }
];

const images = [
  culture1,
  culture2,
  culture3,
  culture4,
  culture5,
  culture6,
  culture7,
  culture8,
  culture9,
  culture10,
  culture11,
  culture12

];
const Careers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Banner data={bannerContent} />
      <Banner2 data={banner2Content} />
      <div className='space-top container'>
        <h2 className='lg:text-4xl text-2xl text-webprimary lg:mb-8 mb-6'>Why Work With AETURN?</h2>
        <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-6">
          {careerBenefits.map((card, index) => (
            <InnovationCard card={card} key={card.id || index} />
          ))}
        </div>
      </div>
      {/* =============Our Culture============ */}
      <div className="space-top container">
        <div className="">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-webprimary mb-8">
            Our Culture
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={src}
                  alt={`Culture ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers

