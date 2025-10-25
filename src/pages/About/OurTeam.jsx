import React from 'react'
import img from "../../assets/images/home/meet-founder.png"
import { ArrowRight } from 'lucide-react';
import Banner from '../../components/common/Banner'
import RegularOdd from '../../components/reusable/RegularOdd'
import TeamCard from '../../components/reusable/TeamCard'

import { FaLinkedinIn } from "react-icons/fa";


import banner from "../../assets/images/about/min-banner.png"
import ScrollTopAtuo from '../../components/common/ScrollTopAtuo';


const bannerContent = {
  // image: image,
  title: "Our Teams",
  description: "Meet the passionate professionals powering our vision and making innovation happen every day."
}
const teamMembersData = [
  {
    id: 1,
    name: "Gaurav Pande",
    subtitle: "Founder & CEO",
    img: img,
    link: "#"


  },
  {
    id: 2,
    name: "Anil Sudan",
    subtitle: "Co-Founder & CTO",
    img,
    link: "#"
  },
  {
    id: 3,
    name: "Shalini Pande",
    subtitle: "Co-Founder & COO",
    img,
    link: "#"

  }
];

const OurTeam = () => {
  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      {/* <RegularOdd data={regularOddData} /> */}
      <div className="container space-top">
        <div className='flex md:flex-row flex-col lg:gap-8 gap-6'>
          <div className='w-full md:w-2/5'>
            <img src={img || null} alt="founder image" className='w-full' />
          </div>

          <div className='flex  md:w-3/5'>
            <div>

              <h2 className='text-2xl md:text-3xl text-webprimary mb-3'>Founder Message</h2>
              <p className='text-para mb-4'>
                At AETURN, our mission is to harness technology and AI to create solutions that truly make a difference. From healthcare and road safety to skill development and medical tourism, we aim to build future-ready systems that empower communities, improve lives, and drive meaningful impact. We believe that collaboration, innovation, and actionable intelligence are the keys to a smarter, safer, and healthier world, and we invite you to join us on this journey.
              </p>
              <h2 className='text-xl md:text-3xl text-webprimary md:mb-3'>~  Ravi Rai</h2>
              <p className='text-para'>Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container space-top'>
        <h2 className='text-2xl md:text-3xl text-webprimary md:mb-4 mb-2'>Our Expert Team</h2>
        <div className='grid lg:grid-cols-3  gap-6 md:grid-cols-2 '>
          {teamMembersData.map((item) => (
            <TeamCard key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className='container space-top'>
        <div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg h-auto">
            <img
              src={banner || null}
              alt={'image'}
              className="w-full  lg:h-[300px] h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute  top-1/2 transform -translate-y-1/2 left-0 right-0 p-6 sm:p-8 text-white">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-4 leading-tight">
                Join Our Team & Shape the Future with AETURN
              </h2>
              <p className='text-white pb-4 md:text-lg'>
                We’re looking for passionate innovators, problem-solvers, and tech enthusiasts to build future-ready solutions in healthcare, road safety, and skill development.
              </p>
              <button className="flex items-center gap-2 theme-btn-fill ">
                Explore Careers

              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default OurTeam
