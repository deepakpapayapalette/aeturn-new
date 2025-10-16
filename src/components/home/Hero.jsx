import React from 'react'
import banner from "../../assets/images/home/banner.gif"

const Hero = () => {
  return (
    <div className=' z-20 relative flex items-center banner w-full lg:h-[90vh] md:h-[80vh] h-[70vh]' style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center", }}>
      <div className="container z-20" style={{}}>
        <div className=' text-white flex   '>

          <div className="md:w-3/4 md:space-y-5">
            <h1 className='lg:text-5xl mdLtext-3xl text-xl font-semibold mb-2' style={{ lineHeight: '1.2' }} >
              Building Future-Ready Technology Solutions for a Healthier, Safer, and Smarter World
            </h1>
            <p className='md:text-xl text-white'>Empowering Public Health, Medical Tourism, Road Safety, Skill Development, and AI-driven Innovations under the ZENIVERSE Venture Studio Model.</p>

            <button className='text-webprimary text-lg px-8 py-3 rounded-md bg-white mt-5 hover:bg-webprimary hover:text-white transition'>
              Explore Our Solutions
            </button>
          </div>


        </div>
      </div>
      {/* create a dark overlay over the image  */}
      <div className='z-10 absolute inset-0 bg-black opacity-50'></div>
    </div>
  )
}

export default Hero
