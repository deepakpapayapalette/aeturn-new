import React from 'react'
import Banner from '../../components/common/Banner'
import Banner2 from '../../components/common/Banner2'
import bannerImage2 from "../../assets/images/road-safety/banner-image2.png";
import Regular from '../../components/reusable/Regular'
import RegularOdd from '../../components/reusable/RegularOdd'
import img1 from '../../assets/images/road-safety/why-road-safety.png'
import diseaseSurveillanceImage from '../../assets/images/public-health/disease.png'
import imgOdd from '../../assets/images/road-safety/zen-drive-safe.png';
import RegularEven from '../../components/reusable/RegularEven';
import ScrollTopAtuo from '../../components/common/ScrollTopAtuo';

const bannerContent = {
  // image: bannerImage,
  title: "Road Safety",
  description: "AETURN goes beyond mobility management to champion safer roads and responsible driving initiatives"
}
const banner2Content = {
  image: bannerImage2,
  title: " Transforming Road Safety with Intelligent Technology",
  description: "Harnessing AI, IoT, and data analytics to prevent collisions, optimize traffic flow, and create a safer future for every road user.",
  button: "Partner With Us",
  link: "#"
}
const regular1Data = {
  title: "Why We Focus on Road Safety ?",
  img: img1,
  paraContent: [
    {
      id: 1,
      para: "Our solutions connect drivers, authorities, and communities with real-time insights, predictive analytics, and safety tools to reduce accidents and improve traffic management. By enhancing awareness, streamlining enforcement, and enabling data-driven decisions, we empower governments, organizations, and citizens to ensure safer, more efficient, and responsible mobility for everyone.",
    },
    // {
    //   id: 2,
    //   para: "  By integrating advanced analytics, artificial intelligence, and real-time data sharing, AETURN transforms how public health challenges are understood and addressed. From predictive outbreak monitoring to streamlined healthcare coordination, we enable proactive rather than reactive intervention. We believe innovation should not only advance medical outcomes but also bridge the gap between healthcare providers and the people they serve—ensuring equitable access and long-term resilience.",
    // },
    // {
    //   id: 3,
    //   para: "Through collaboration, continuous learning, and a commitment to measurable impact, AETURN is redefining what’s possible in public health technology—creating healthier futures for everyone.",
    // },
  ]
}
const regularOddData = {
  title: "Our Solutions in Road Saftey",
  subTitle: 'Zen Drive Safe',
  img: imgOdd,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "Innovative road safety solution (web & mobile app with dashcam) for driver fitness tracking, vehicle monitoring, and driving behaviour analysis.",
    },
  ]
};



const RoadSafety = () => {
  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <Banner2 data={banner2Content} />
      <Regular data={regular1Data} />
      <RegularOdd data={regularOddData} />
    </>
  )
}

export default RoadSafety
