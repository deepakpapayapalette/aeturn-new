
import React from 'react'

import bannerImage from '../../assets/images/banner2.gif'
import Banner from '../../components/common/Banner'
import Banner2 from '../../components/common/Banner2'
import heroImage from "../../assets/images/public-health/banner.jpg";
import Regular from '../../components/reusable/Regular'
import RegularOdd from '../../components/reusable/RegularOdd'
import RegularEven from '../../components/reusable/RegularEven'
import img1 from '../../assets/images/public-health/Focus-on-Public-Health.png'
import ourSolutions from '../../assets/images/public-health/our-solution.png'
import diseaseSurveillanceImage from '../../assets/images/public-health/disease.png'
import bizaarioCareImage from '../../assets/images/public-health/bizario.png';
import ScrollTopAtuo from '../../components/common/ScrollTopAtuo';

const PublicHealth = () => {
  const bannerContent = {
    image: bannerImage,
    title: "Public Health",
    description: "AETURN  goes beyond individual patient care to support public health initiatives."
  }
  const banner2Content = {
    image: heroImage,
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
        para: "Public health is the backbone of a thriving society. At AETURN, we focus on leveraging technology to improve accessibility, enhance patient care, and provide actionable intelligence for better decision-making. Our solutions empower hospitals, governments, and communities to respond faster, prevent disease, and save lives.",
      },
      {
        id: 2,
        para: "  By integrating advanced analytics, artificial intelligence, and real-time data sharing, AETURN transforms how public health challenges are understood and addressed. From predictive outbreak monitoring to streamlined healthcare coordination, we enable proactive rather than reactive intervention. We believe innovation should not only advance medical outcomes but also bridge the gap between healthcare providers and the people they serve—ensuring equitable access and long-term resilience.",
      },
      // {
      //   id: 3,
      //   para: "Through collaboration, continuous learning, and a commitment to measurable impact, AETURN is redefining what’s possible in public health technology—creating healthier futures for everyone.",
      // },
    ]
  }
  const regularOddData = {
    title: "Our Solutions in Public Health",
    subTitle: "Care Extension",
    img: ourSolutions,
    btnText: "Know More",
    btnLink: "#",
    paraContent: [
      {
        id: 1,
        para: "Telemedicine program with a hub-and-spoke model for mother and child health, focusing on emergency response for NICU/PICU admissions.",
      },
    ]
  };
  const regularOddData2 = {
    // title: "Disease Surveillance Systems",
    subTitle: "Disease Surveillance Systems",
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
  const regularEvenData = {
    title: "Bizaario Care",
    img: bizaarioCareImage,
    btnText: "Know More",
    btnLink: "#",
    paraContent: [
      {
        id: 1,
        para: " Telemedicine solution connecting doctors globally for medical tourism case referrals.",
      },
    ]
  }

  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <Banner2 data={banner2Content} />
      {/* ==========Why We Focus on Public Health======== */}
      <Regular data={regular1Data} />

      {/* ============Our Solutions in Public Health================ */}
      <RegularOdd data={regularOddData} />

      {/* ============Bizaario Care================ */}
      <RegularEven data={regularEvenData} />

      {/* ============Disease Surveillance Systems================ */}
      <RegularOdd data={regularOddData2} />
    </>
  )
}

export default PublicHealth;
