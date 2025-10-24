import React from 'react'
import Banner from '../../components/common/Banner'
import about1 from '../../assets/images/about/about1.png'
import mission from '../../assets/images/about/mission.png'
import vision from '../../assets/images/about/vision.png'
import { Rocket, FileText, TrendingUp, Heart } from 'lucide-react';
import RegularOdd from '../../components/reusable/RegularOdd';
import RegularEven from '../../components/reusable/RegularEven'

import { FaLightbulb, FaRobot, FaRocket, FaUsers, FaBullseye, FaHandshake } from 'react-icons/fa';
import { Clock, Calendar, Eye, ArrowRight } from 'lucide-react';
import { FaRegClock, FaRegCalendarAlt, FaRegEye } from "react-icons/fa";
import { articlesData } from '../../data/LocalData'
import NewsCard from '../../components/reusable/NewsArticles'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

const bannerContent = {
  // image: bannerImage,
  title: "About Us",
  description: "Discover who we are, what drives us, and how we’re shaping the future with purpose."
}

const statisticsCards = [
  {
    id: 1,
    value: "120K+",
    label: "Happy User",


  },
  {
    id: 2,
    value: "5+",
    label: "Years of Experience",


  },
  {
    id: 3,
    value: "50+",
    label: "Global Partners",


  },
  {
    id: 4,
    value: "24/7",
    label: "Customer Support",

  }
];


const regularOddData = {
  // title: "Our Mission",
  subTitle: "Our Mission",
  img: mission,
  // btnText: "Know More",
  // btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "To design and deliver AI-powered, tech-enabled solutions that transform healthcare, road safety, medical tourism, and skill development. Our mission is to create future-ready systems that not only save lives and improve accessibility but also empower communities, drive sustainable innovation, support decision-makers with actionable intelligence, and foster global collaboration for measurable, real-world impact.",
    },
  ]
};

const regularEvenData = {
  title: "Our Vision",
  img: vision,
  // btnText: "Know More",
  // btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "To be recognized globally as a pioneer in healthtech, safety, and innovation by building scalable, sustainable, and impactful solutions. We envision a world where technology enhances human potential, ensures safer roads, improves public health, strengthens skill development, and creates smarter, healthier, and more connected communities worldwide.",
    },
  ]
}


const innovativeSolutions = [
  {
    _id: 1,
    title: "Innovative Solutions",
    description: "We create AI-driven, tech-enabled systems across healthcare, road safety, medical tourism, and skill development.",
    icon: FaLightbulb,
    iconColor: "#F59E0B",
    isMainHeading: true
  },

  {
    _id: 2,
    title: "Future-Ready Technology",
    description: "Our solutions are scalable, sustainable, and designed for global relevance.",
    icon: FaRocket,
    iconColor: "#8B5CF6",
    isMainHeading: false
  },
  {
    _id: 3,
    title: "Expert Team",
    description: "Led by experienced founders, we combine domain expertise with cutting-edge technology.",
    icon: FaUsers,
    iconColor: "#10B981",
    isMainHeading: false
  },
  {
    _id: 4,
    title: "Actionable Intelligence",
    description: "We turn data into insights and recommendations that enable smarter, safer, and healthier decisions.",
    icon: FaRobot,
    iconColor: "#3B82F6",
    isMainHeading: false
  },
  {
    _id: 5,
    title: "Commitment to Impact",
    description: "Focused on solving real-world problems, improving lives, and driving sustainable innovation.",
    icon: FaBullseye,
    iconColor: "#EF4444",
    isMainHeading: false
  },
  {
    _id: 6,
    title: "Collaborative Approach",
    description: "We work closely with partners, organizations, and communities to co-create meaningful solutions.",
    icon: FaHandshake,
    iconColor: "#6366F1",
    isMainHeading: false
  }
];


const AboutUs = () => {
  return (
    <>
      <Banner data={bannerContent} />
      <div className="space-top container">
        <div>
          <div className="rounded-xl overflow-hidden pb-4">
            <img src={about1 || null} alt="image" className='w-full' />
          </div>
          <p className='text-para sm:text-lg'>
            ATRN Solutions LLP (“AETURN”) is a DPITT-recognized Indian startup under the Startup India Scheme, operating under ZENIVERSE Ventures — India’s most unique Venture Studio Model. We specialize in building AI-driven, tech-enabled solutions across Public Health, Medical Tourism, Road Safety, Skill Development, and Innovations, with a focus on creating future-ready systems that deliver measurable impact, enhance healthcare accessibility, improve road and community safety, promote skill development, drive sustainable innovation, foster global collaborations, and empower organizations and individuals with actionable intelligence for a smarter, safer, and healthier world.
          </p>
        </div>
      </div>
      <div className='md:pt-10 pt-6 container'>
        <div className='rounded-lg md:shadow-card p-3'>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {statisticsCards.map((card) => (
              <div key={card.id} className="text-center p-4">
                {/* <card.icon className="w-8 h-8 mx-auto mb-2" style={{ color: card.iconColor }} /> */}
                <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{card.value}</div>
                <div className="text-md  text-webPara">{card.label}</div>
                {/* <div className="text-md  text-webPara">{card.description}</div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <RegularOdd data={regularOddData} />
      <RegularEven data={regularEvenData} />

      <div className="container space-top">
        <h2 className='md:text-3xl text-2xl mb-4 text-webprimary'>Why Always AETURN?</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-6'>
          {innovativeSolutions.map((item, index) => (
            <div
              key={item?.id || index}
              className="domain-card bg-white text-gray-800 rounded-xl p-6 shadow-md flex flex-col justify-between border border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
              <div className='text-center flex flex-col items-center justify-center gap-2'>
                <div className='rounded-full border border-webpirimary w-14 h-14 pt-2 flex items-center justify-center '>

                  <item.icon className="w-8 h-8 mx-auto mb-2 text-webprimary" key={item?.icon || null} />
                </div>
                <h3 className="md:text-2xl font-semibold text-webprimary mb-2">
                  {item?.title}
                </h3>
                <p className="text-md mb-4">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='space-top container'>
        <div>
          <h2 className='md:text-3xl text-2xl mb-4 text-webprimary'>Our Daily Updates</h2>
          <NewsCard data={articlesData} link={"news"} />


        </div>

      </div>

    </>
  )
}

export default AboutUs
