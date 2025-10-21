import React from 'react'
import SingleCard from '../common/SingleCard'
import img from "../../assets/images/home/meet-founder.png"
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

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

        <div className='grid lg:grid-cols-3 lg:gap-8 gap-6 md:grid-cols-2 '>
          {teamMembers.map((item) => (
            <div key={item.id} className='flex flex-col bg-white rounded-2xl border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow duration-300'>
              <div className="max-w-[100%] ">
                <div className='p-5'>
                  <img
                    src={item?.img || null}
                    alt="Package"
                    className="w-full min-h-48 object-cover"
                  />
                </div>
                <div className="px-5 py-2">
                  <div className='flex justify-between items-center'>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {item?.title || item?.name || null}
                      </h2>
                      <p className='text-webPara'>{item?.subtitle || null}</p>
                    </div>
                    <div>
                      <Link to={'#'} target='_blank'>
                        {item?.icon}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default React.memo(OurFounders)
