import React from 'react'
import Banner from '../../components/common/Banner'
import RegularOdd from '../../components/reusable/RegularOdd'
import emr from '../../assets/images/about/emr.png'
import zatra from '../../assets/images/about/zatra.png'
import solutionCare from '../../assets/images/public-health/our-solution.png'
import bizaario from '../../assets/images/public-health/bizario.png'
import siseaseSurveillanceImage from '../../assets/images/public-health/disease.png'
import zendriveImage from '../../assets/images/road-safety/zen-drive-safe.png';
import RegularEven from '../../components/reusable/RegularEven'
import ScrollTopAtuo from '../../components/common/ScrollTopAtuo'
const bannerContent = {
  // image: bannerImage,
  title: "Solution Portfolio",
  description: "Explore our comprehensive range of solutions designed to empower growth and deliver real-world results."
}
const regularOddData = {
  // title: "AETURN EMR",
  subTitle: "AETURN EMR",
  img: emr,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "Multi-tenant Electronic Medical Record system integrated with existing EMR/HMIS. Provides smart analytics and a bird’s eye view for government authorities and decision-makers.",
    },
  ]
};
const regularOddData2 = {
  // title: "AETURN EMR",
  subTitle: "Care Extension",
  img: solutionCare,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "Telemedicine program with a hub-and-spoke model for mother and child health, focusing on emergency response for NICU/PICU admissions.",
    },
  ]
};
const regularOddData3 = {
  // title: "AETURN EMR",
  subTitle: "Zen Drive Safe",
  img: zendriveImage,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "Innovative road safety solution (web & mobile app with dashcam) for driver fitness tracking, vehicle monitoring, and driving behaviour analysis.",
    },
  ]
};
const regularEvenData = {
  title: "Zatra",
  img: zatra,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "Travel and commerce platform integrating tourism, trade, and local business services.",
    },
  ]
}
const regularEvenData2 = {
  title: "Bizaario Care",
  img: bizaario,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "Telemedicine solution connecting doctors globally for medical tourism case referrals.",
    },
  ]
}
const regularEvenData3 = {
  title: "Disease Surveillance Systems",
  img: siseaseSurveillanceImage,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: "AI-powered monitoring and prediction platform for disease outbreaks and public health management.",
    },
  ]
}
const SolutionPortfolio = () => {
  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <RegularOdd data={regularOddData} />
      <RegularEven data={regularEvenData} />
      <RegularOdd data={regularOddData2} />
      <RegularEven data={regularEvenData2} />
      <RegularOdd data={regularOddData3} />
      <RegularEven data={regularEvenData3} />
    </>
  )
}
export default SolutionPortfolio
