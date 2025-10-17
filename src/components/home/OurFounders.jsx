import React from 'react'
import SingleCard from '../common/SingleCard'
import img from "../../assets/images/home/meet-founder.png"
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
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

const OurFounders = () => {
  return (
    <section className='space-top'>
      <div className="container">
        <h2 className='mb-2 text-4xl text-webprimary'>Meet Our Founders & Promoters</h2>
        <p className='text-para text-lg mb-8'>

          Visionaries driving AETURN’s journey, bringing together expertise in healthcare, technology, and innovation to build future-ready solutions.
        </p>

        <div className='grid lg:grid-cols-3 lg:gap-10 gap-6 md:grid-cols-2 '>
          {teamMembers.map((item) => (
            <div key={item.id}>
              <SingleCard data={item} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default OurFounders
