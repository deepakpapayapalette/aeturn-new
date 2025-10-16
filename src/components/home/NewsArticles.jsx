import React from 'react'
import { FaRegClock, FaRegCalendarAlt, FaRegEye } from "react-icons/fa";
import newsImg from "../../assets/images/home/news-article.png"
const NewsArticles = () => {
  return (
    <section className='space-top'>
      <div className="container">
        <h3 className="text-4xl font-semibold text-webprimary mb-3">
          News & Articles
        </h3>

        <p className="text-para text-lg lg:pe-8 pb-5">
          Stay updated with our latest stories, insights, and press coverage.
        </p>
        <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 ">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="p-4 w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={newsImg}
                alt="Zen Drive Safe App Launch"
                className="w-full h-48 object-cover rounded-t-lg "
              />

              {/* Content */}
              <div className="p-4">
                {/* Meta Info */}
                <div className="flex justify-between text-gray-500 text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <FaRegClock /> 12Min
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegCalendarAlt /> 12/01/2025
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegEye /> 2.5k
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  AETURN Launches Zen Drive Safe App
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-1">
                  Innovative road safety solution to monitor driver fitness, vehicle
                  health, and driving behaviour.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default NewsArticles
