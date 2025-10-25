import React from 'react'
import imageLeft from '../../assets/images/home/our-innovative solutions.png'

import "react-multi-carousel/lib/styles.css"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const Carousel = React.lazy(() => import("react-multi-carousel"));
const OurInnovativeSolutions = () => {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, dots: true },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 1, showDots: false },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1, showDots: false },
  };
  const isLargeScreen = window.innerWidth >= 1024;
  return (
    <section className='space-top'>
      <div className="container">
        <div className="shadow-card px-6 py-5 rounded-lg">
          <h2 className='text-webprimary text-4xl mb-2'>Our Innovative Solutions</h2>
          <p className='text-para text-lg '>
            Empowering healthcare, road safety, medical tourism, and commerce with tech-enabled, future-ready solutions designed to make a real-world impact
          </p>

          <div className='pt-4'>
            <Carousel
              // customButtonGroup={<CustomButtonGroup />}
              responsive={responsive}
              infinite
              keyBoardControl
              swipeable
              draggable
              showDots={true}
              containerClass="pt-4 pb-10 lg:pb-5"
              itemClass="ps-0 pt-0"
              arrows={isLargeScreen}
              renderButtonGroupOutside={false}
              partialVisible
            >
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className='flex md:flex-row flex-col  gap-8 ' key={index} >
                  <div className="left-img md:w-[40%]">
                    <img src={imageLeft} alt="Our Innovative Solutions" className='w-full h-auto' />
                  </div>
                  <div className='md:w-[60%]' >
                    <h3 className='text-3xl font-semibold text-webprimary mb-3' >AETURN EMR</h3>

                    <p className='text-para text-lg lg:pe-8'>
                      The Multi-Tenant Electronic Medical Record (EMR) System by AETURN is a next-generation platform designed to seamlessly integrate with existing EMR/HMIS infrastructures, ensuring interoperability across healthcare ecosystems. Built on our ZENERIC AI framework, it enables real-time data exchange, advanced analytics, and intelligent automation — empowering hospitals, clinics, and public health authorities to make data-driven decisions with confidence.
                    </p>
                    <button className='theme-btn-fill mt-4 '>
                      Know More
                    </button>
                  </div>
                </div>
              ))}

            </Carousel>
          </div>
        </div>
      </div>
    </section >
  )
}

export default OurInnovativeSolutions;

export const CustomButtonGroup = ({ next, previous, carouselState }) => {
  const { currentSlide, totalItems } = carouselState || {};
  return (
    <div className="custom-carousel-buttons">
      <button onClick={() => previous()} disabled={currentSlide === 0}>
        <GrPrevious size={20} />
      </button>
      <button onClick={() => next()} disabled={currentSlide === totalItems - 1}>
        <GrNext size={20} />
      </button>
    </div>
  );
};

