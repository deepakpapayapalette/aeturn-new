import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/images/logo.png'
import '../assets/styles/website/navbar.css'
import { NavLink, Link } from 'react-router-dom';
import IndustriesDropdown from './menus/IndustriesDropdown';
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinksData = [
    { name: ' Industries', href: '/' },
    { name: ' Future Vision', href: '/future-vision' },
    { name: ' Associations', href: 'odop' },
    { name: ' About Us', href: 'trip-commerce' },
    { name: '  News & Articles', href: 'contact' }
  ];


  return (
    <nav className="sticky top-0 bg-white shadow-sm border-b border-gray-200 py-4 z-[1001]  flex items-center ">
      <div className="container">
        <div className="mx-auto ">
          <div className="flex justify-between items-center  relative">
            <img src={Logo} alt="Logo" className="max-w-[130px] h-auto" />
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* {navLinksData.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 rounded-md text-lg hover:bg-websecondary hover:text-webprimary font-medium transition-colors duration-200 text-webPara"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))} */}

                <NavLink
                  // to={'#'}
                  className="relative text-gray-700 hover:text-gray-900 hover:text-webprimary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={toggleDropdown}
                >
                  Industries <MdKeyboardArrowDown className='inline text-gray-700t' />
                  {isDropdownOpen ?
                    <div className="bg-white left-0 fixed  pl-20 top-[67px]   mt-2 w-full  overflow-hidden shadow-sm">
                      <IndustriesDropdown setIsDropdownOpen={setIsDropdownOpen} />
                    </div>
                    : null
                  }
                </NavLink>
                <NavLink
                  to={'/future-vision'}
                  className="text-gray-700 hover:text-gray-900 hover:text-webprimary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Future Vision
                </NavLink>
                <NavLink
                  to={'/contact'}
                  className="text-gray-700 hover:text-gray-900 hover:text-webprimary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Associations
                </NavLink>
                <NavLink
                  to={'/contact'}
                  className="text-gray-700 hover:text-gray-900 hover:text-webprimary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
                <NavLink
                  to={'/contact'}
                  className="text-gray-700 hover:text-gray-900 hover:text-webprimary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News & Articles
                </NavLink>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to={'/login'}>
                <button className="min-w-[90px] btn-first">
                  Get In Touch
                </button>
              </Link>

            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute top-[73px] right-0 bg-white  w-3/4 h-screen border-gray-200 origin-top transition-all duration-500 ease-in-out ${isMenuOpen
            ? "animate-growDown opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-2 pt-8 pb-3 space-y-1 flex items-center flex-col">
            {navLinksData.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-lg font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-4 px-8 w-full pt-6">
              <Link to={"/login"}>
                <button
                  className="w-full min-w-[90px] btn-first py-3 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
