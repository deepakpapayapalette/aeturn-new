import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
const SingleCard = ({ data = [], buttonText }) => {

  return (
    <div className='flex flex-col'>
      <div className="max-w-[100%] bg-white rounded-2xl border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image */}


        {data?.img ?
          <div className='p-5'>
            <img
              src={data?.img || null}
              alt="Package"
              className="w-full min-h-48 object-cover"
            />
          </div>
          : null
        }
        {/* Content */}
        <div className="px-5 py-2">
          {data?.icon ?
            <div className='flex justify-between items-center'>
              <div>
                {/* Package Name */}
                {data.title || data?.name ?
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {data?.title || data?.name || null}
                  </h2>
                  : null
                }

                {/* Phone Number */}
                {data.mobileNo ?
                  <div className="flex items-center text-gray-700 mb-3">
                    <FiPhoneCall className="text-gray-500 mr-2" size={18} />
                    <span className="text-webPara font-medium">{data?.mobileNo || null}</span>
                  </div>
                  : null}

                {/* Shop Details */}
                <div className="mb-4">
                  <p className={`text-webPara ${data?.subtitle || data?.category ? " pb-1" : ""} `}>{data?.subtitle || data?.category || null}</p>
                  <p className="text-webPara text-sm">{data?.shop || null}</p>
                </div>
              </div>
              <div>
                {data?.icon}
              </div>
            </div> : null}

          {data?.listing ?
            <div className='mb-4'>
              <ul>
                {data?.listing?.map((item, index) => (
                  <li key={index} className="text-webPara text-sm">{item}</li>
                ))}
              </ul>
            </div>
            : null
          }

          {/* Call Now Button */}
          {data.buttonText || buttonText ?
            <button className="w-full bg-webprimary hover:bg-[#005f8d] text-white font-semibold py-2 rounded-lg transition-colors">
              {buttonText ? buttonText : "Call Now"}
            </button>
            : null
          }
        </div>
      </div>
    </div >
  )
}

export default SingleCard
