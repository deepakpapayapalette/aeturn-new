import React from 'react'
import bannerImage2 from "../../assets/images/tourism/tourism-image.png";
import bannerImage from '../../assets/images/banner2.gif'
import regularImage from '../../assets/images/tourism/regular1.png'
import Banner from '../../components/common/Banner';
import Banner2 from '../../components/common/Banner2';
import Regular from '../../components/reusable/Regular';
import RegularEven from '../../components/reusable/RegularEven';
import zatraImage from '../../assets/images/tourism/zatra.png'
import ScrollTopAtuo from '../../components/common/ScrollTopAtuo';

const bannerContent = {
  image: bannerImage,
  title: "Tourism",
  description: "Technology-driven solutions to transform the tourism journey."
}
const banner2Content = {
  image: bannerImage2,
  title: " Transforming Tourism with Intelligent Technology",
  description: "Harnessing AI, IoT, and data analytics to enhance travel experiences, optimize tourism services, and create seamless, memorable journeys for every traveler.",
  button: "Partner With Us",
  link: "#"
}
const regular1Data = {
  title: "Why We Focus on Tourism ?",
  img: regularImage,
  paraContent: [
    {
      id: 1,
      para: "Our solutions connect travelers, authorities, and tourism providers with real-time insights and analytics to enhance experiences, streamline services, and enable data-driven decisions, creating safer, smoother, and more enjoyable journeys for everyone.",
    },

  ]
}

const regularEvenData = {
  HeadTitle: "Our Solutions in Road Saftey",
  title: "Zatra",
  img: zatraImage,
  btnText: "Know More",
  btnLink: "#",
  paraContent: [
    {
      id: 1,
      para: " Travel and commerce platform integrating tourism, trade, and local business services.",
    },
  ]
}

const TourismInner = () => {
  return (
    <div>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <Banner2 data={banner2Content} />
      <Regular data={regular1Data} />
      <RegularEven data={regularEvenData} />
    </div>
  )
}

export default TourismInner

