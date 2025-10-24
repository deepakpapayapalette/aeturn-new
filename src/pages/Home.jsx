import React, { lazy, Suspense } from 'react'
import Loader from '../layouts/Loader'
import newsImg from "../assets/images/home/news-article.png"
import img from "../assets/images/home/meet-founder.png"
import { FaLinkedin } from "react-icons/fa";
import { articlesData } from '../data/LocalData';


const Hero = lazy(() => import('../components/home/Hero'))
const CoreBusinessDomains = lazy(() => import('../components/home/CoreBusinessDomains'))
const OurInnovativeSolutions = lazy(() => import('../components/home/OurInnovativeSolutions'))
const AIActionableIntelligence = lazy(() => import('../components/home/AIActionableIntelligence'))
const OurFounders = lazy(() => import('../components/home/OurFounders'))
const Article = lazy(() => import('../components/home/Article'))

const PartneringForGlobalImpact = lazy(() => import('../components/home/PartneringForGlobalImpact'));

const newsData = [
  {
    id: 1,
    readTime: "12Min",
    date: "12/01/2025",
    views: "2.5k",
    title: "AETURN Launches Zen Drive Safe App",
    description: "Innovative road safety solution to monitor driver fitness, vehicle health, and driving behaviour.",
    paraContent: [
      {
        id: 1,
        paraTitle: "A Smarter Way to Drive Safe",
        para: "ATRN Solutions LLP (“AETURN”), under the Startup India scheme and ZENIVERSE Ventures, has officially launched its groundbreaking Zen Drive Safe App — a next-generation road safety solution designed to reduce accidents and promote safer driving habits.",
      },
      {
        id: 2,
        paraTitle: "About Zen Drive Safe",
        para: "Zen Drive Safe is a web and mobile application powered with AI and advanced analytics. The solution integrates seamlessly with vehicles and driver systems to provide:",
      },
    ],
    paraListing: [
      {
        id: 1,
        paraTitle: "Driver Fitness Tracking",
        para: " – Monitors driver alertness, fatigue, and health.",
      },
      {
        id: 2,
        paraTitle: "Vehicle Fitness Tracking",
        para: " – Ensures timely maintenance, inspections, and compliance.",
      },
      {
        id: 3,
        paraTitle: "Driving Behaviour Analysis",
        para: " – – Uses dashcam and sensors to monitor over speeding, harsh braking, cornering, and distractions.",

      }

    ],

    link: "/news/:id",
    img: newsImg,
  },
  {
    id: 2,
    readTime: "12Min",
    date: "12/01/2025",
    views: "2.5k",
    title: "AETURN Launches Zen Drive Safe App",
    description: "Innovative road safety solution to monitor driver fitness, vehicle health, and driving behaviour.",
    paraContent: [
      {
        id: 1,
        paraTitle: "A Smarter Way to Drive Safe",
        para: "ATRN Solutions LLP (“AETURN”), under the Startup India scheme and ZENIVERSE Ventures, has officially launched its groundbreaking Zen Drive Safe App — a next-generation road safety solution designed to reduce accidents and promote safer driving habits.",
      },
      {
        id: 2,
        paraTitle: "About Zen Drive Safe",
        para: "Zen Drive Safe is a web and mobile application powered with AI and advanced analytics. The solution integrates seamlessly with vehicles and driver systems to provide:",
      },
    ],
    paraListing: [
      {
        id: 1,
        paraTitle: "Driver Fitness Tracking",
        para: " – Monitors driver alertness, fatigue, and health.",
      },
      {
        id: 2,
        paraTitle: "Vehicle Fitness Tracking",
        para: " – Ensures timely maintenance, inspections, and compliance.",
      },
      {
        id: 3,
        paraTitle: "Driving Behaviour Analysis",
        para: " – – Uses dashcam and sensors to monitor over speeding, harsh braking, cornering, and distractions.",

      }

    ],


    link: "/news/:id",
    img: newsImg,
  },
  {
    id: 3,
    readTime: "12Min",
    date: "12/01/2025",
    views: "2.5k",
    title: "AETURN Launches Zen Drive Safe App",
    description: "Innovative road safety solution to monitor driver fitness, vehicle health, and driving behaviour.",
    paraContent: [
      {
        id: 1,
        paraTitle: "A Smarter Way to Drive Safe",
        para: "ATRN Solutions LLP (“AETURN”), under the Startup India scheme and ZENIVERSE Ventures, has officially launched its groundbreaking Zen Drive Safe App — a next-generation road safety solution designed to reduce accidents and promote safer driving habits.",
      },
      {
        id: 2,
        paraTitle: "About Zen Drive Safe",
        para: "Zen Drive Safe is a web and mobile application powered with AI and advanced analytics. The solution integrates seamlessly with vehicles and driver systems to provide:",
      },
    ],
    paraListing: [
      {
        id: 1,
        paraTitle: "Driver Fitness Tracking",
        para: " – Monitors driver alertness, fatigue, and health.",
      },
      {
        id: 2,
        paraTitle: "Vehicle Fitness Tracking",
        para: " – Ensures timely maintenance, inspections, and compliance.",
      },
      {
        id: 3,
        paraTitle: "Driving Behaviour Analysis",
        para: " – – Uses dashcam and sensors to monitor over speeding, harsh braking, cornering, and distractions.",

      }

    ],
    link: "/news/:id",
    img: newsImg,
  },

];
const ourFoundersData = [
  {
    id: 1,
    name: "Gaurav Pande",
    subtitle: "Founder & CEO",
    img: img,
    icon: <FaLinkedin size={24} className='text-webprimary' />


  },
  {
    id: 2,
    name: "Anil Sudan",
    subtitle: "Co-Founder & CTO",
    img,
    icon: <FaLinkedin size={24} className='text-webprimary' />
  },
  {
    id: 3,
    name: "Shalini Pande",
    subtitle: "Co-Founder & COO",
    img,
    icon: <FaLinkedin size={24} className='text-webprimary' />

  }
];

const HomePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <CoreBusinessDomains />
      <OurInnovativeSolutions />
      <AIActionableIntelligence />
      <OurFounders data={ourFoundersData } />
      <Article data={articlesData}  />
      <PartneringForGlobalImpact />
    </Suspense>
  )
}

export default HomePage
