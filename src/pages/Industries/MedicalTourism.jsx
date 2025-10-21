import React from 'react'
import Banner from '../../components/common/Banner'
import Banner2 from '../../components/common/Banner2'
import bannerImage2 from "../../assets/images/medical-tourism/medical-banner.png";
import bannerImage from '../../assets/images/banner2.gif'
import Regular from '../../components/reusable/Regular'
import RegularOdd from '../../components/reusable/RegularOdd'
import img1 from '../../assets/images/medical-tourism/medical1.png'
import diseaseSurveillanceImage from '../../assets/images/public-health/disease.png'
import bizaarioCareImage from '../../assets/images/public-health/bizario.png';
import RegularEven from '../../components/reusable/RegularEven';

const bannerContent = {
  image: bannerImage,
  title: "Public Health",
  description: "AETURN  goes beyond individual patient care to support public health initiatives."
}
const banner2Content = {
  image: bannerImage2,
  title: " Transforming Public Health with Technology",
  description: "AI-driven, tech-enabled solutions improving healthcare access,  disease management, and community well- being at scale.",
  button: "Partner With Us",
  link: "#"
}
const regular1Data = {
  title: "Why We Focus on Public Health ?",
  img: img1,
  paraContent: [
    {
      id: 1,
      para: "At AETURN, we focus on leveraging technology to connect patients with trusted hospitals, expert doctors, and seamless treatment experiences across borders. Our solutions simplify accessibility, enhance patient journeys, and provide reliable insights for better decision-making. We empower hospitals, governments, and communities to deliver safe, affordable, and timely healthcare while ensuring that patients receive the right care at the right place.",
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
  title: "Bizaario Care",
  img: bizaarioCareImage,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "Telemedicine program with a hub-and-spoke model for mother and child health, focusing on emergency response for NICU/PICU admissions.",
    },
  ]
};

const regularEvenData = {
  title: "Disease Surveillance Systems",
  img: diseaseSurveillanceImage,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "AI-powered monitoring and prediction platform for disease outbreaks and public health management. Our platform leverages advanced analytics to detect early warning signals, providing actionable insights for timely interventions and resource allocation.",
    },
  ]
}


const MedicalTourism = () => {
  return (
    <>
      <Banner data={bannerContent} />
      <Banner2 data={banner2Content} />
      <Regular data={regular1Data} />
      <RegularOdd data={regularOddData} />
      <RegularEven data={regularEvenData} />
      {/* <RegularOdd data={regularOddData2} /> */}
    </>
  )
}

export default MedicalTourism
