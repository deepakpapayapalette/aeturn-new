import React from 'react';
import img from '../../assets/images/navbar/Industries-dropdown.png'
import { NavLink } from 'react-router-dom';
export default function IndustriesDropdown({ setIsDropdownOpen }) {
  console.log(setIsDropdownOpen, 'setIsDropdownOpen')
  const handleRefresh = (e) => {
    e.preventDefault(); // prevents default link navigation
    window.location.reload(); // reloads the page
  };
  return (
    <div className="flex items-center gap-6 p-5 bg-white ">
      {/* Left Image Section */}
      <div className="relative  ">
        <img
          src={img}
          alt="Business workspace"
          className="max-w-full max-h-full object-cover brightness-75"
        />
        {/* <div className="absolute inset-0  rounded-2xl"></div> */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <p className="text-white text-md font-medium leading-relaxed max-w-md">
            The business domains we serve, from<br />
            healthcare to road safety.
          </p>
        </div>
      </div>

      {/* Right Text Grid */}
      <div className="grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-4">
        <div>
          <NavLink className="text-md font-normal hover:text-webprimary" onClick={handleRefresh}>Public Health</NavLink>
        </div>
        <div>
          <NavLink className="text-md font-normal hover:text-webprimary" onClick={() => setIsDropdownOpen(false)}>Skill Development</NavLink>
        </div>
        <div>
          <NavLink className="text-md font-normal hover:text-webprimary" onClick={() => setIsDropdownOpen(false)}>Medical Tourism</NavLink>
        </div>
        <div>
          <NavLink className="text-md font-normal hover:text-webprimary" onClick={() => setIsDropdownOpen(false)}>Innovations</NavLink>
        </div>
        <div>
          <NavLink className="text-md font-normal hover:text-webprimary" onClick={() => setIsDropdownOpen(false)}>Road Safety</NavLink>
        </div>
        <div>
          <NavLink className="text-md font-normal hover:text-webprimary" onClick={() => setIsDropdownOpen(false)}>Tourism</NavLink>
        </div>
      </div>
    </div>
  );
}
