import React from 'react';
import img from '../../assets/images/associations/associations-mega-menu.png'
import { NavLink } from 'react-router-dom';

export default function AssociationsDropdown({ isMobile }) {
  // console.log(setIsDropdownOpen, 'setIsDropdownOpen')

  return (
    <div className="container flex items-center gap-6 lg:p-5 bg-white  w-full">
      {/* Left Image Section */}
      <div className="relative  hidden lg:block">
        <img
          src={img || null}
          alt="Business workspace"
          className="max-w-full max-h-full object-cover brightness-75"
        />
        {/* <div className="absolute inset-0  rounded-2xl"></div> */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2">
          <p className="text-white md:text-xl font-medium leading-relaxed max-w-full ">
            Our trusted partners and collaborations across sectors
          </p>
        </div>
      </div>

      {/* Right Text Grid */}
      <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-x-2 gap-y-4 industries-dropdown text-webPara">
        <div>
          <NavLink
            to={'/associations/ministry-of-health'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Ministry of Health, Ethiopia
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/associations/biztech-solutions'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            BizTech Solutions, Ethiopia
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/associations/IHAT'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            India Health Action Trust (IHAT)
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/associations/suverna-tech-hyderabad'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Suverna Tech, Hyderabad
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/associations/ministry-of-tourism-UP'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Ministry of Tourism, UP
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/associations/KDS-services'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            KDS Services Pvt Ltd
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/associations/healthcare-sector-skill-council'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Healthcare Sector Skill Council
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/associations/IACC'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Indo American Chamber of Commerce (IACC)
          </NavLink>
        </div>
      </div>
    </div>
  );
}
