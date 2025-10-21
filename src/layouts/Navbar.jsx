import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../assets/images/logo.png";
import "../assets/styles/website/navbar.css";
import IndustriesDropdown from "./menus/IndustriesDropdown";




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const navLinksData = [

    { name: "Industries", href: null, hasDropdown: true },
    { name: "Future Vision", href: "/future-vision" },
    { name: "Associations", href: "/associations" },
    { name: "About Us", href: "/about" },
    { name: "News & Articles", href: "/news" },
  ];

  const linkClass = ({ isActive }) =>
    `text-gray-700 hover:text-webprimary block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${isActive ? 'active' : ''
    }`;

  const staticLinkClass = "block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200";

  return (
    <nav className="sticky top-0 bg-white shadow-sm border-b border-gray-200 z-[1001] flex items-center ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center relative py-4">
          {/* Logo */}
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="max-w-[130px] h-auto" />
          </NavLink>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinksData.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative drop-parent"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <NavLink className={`text-gray-700 disabled-navlink `} to="#">
                    <div
                      className={` ${staticLinkClass} flex items-end gap-1`}
                      onClick={toggleDropdown}
                    >
                      {link.name}
                      <MdKeyboardArrowDown className="text-gray-700" />
                    </div>
                  </NavLink>

                  {isDropdownOpen && (
                    <div className="absolute top-12 left-0 bg-white w-[840px] shadow-sm z-50 sub-dropdown">
                      <IndustriesDropdown />
                    </div>
                  )}
                </div>

              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={linkClass}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* ===== Desktop CTA ===== */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <button className="min-w-[90px] btn-first">Get In Touch</button>
            </Link>
          </div>

          {/* ===== Mobile Menu Button ===== */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-[73px] right-0 bg-white w-3/4 h-[calc(100vh-73px)] overflow-auto border-gray-200 transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-2 pt-8 pb-3 space-y-1 flex flex-col items-center">
            {navLinksData.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="w-full">
                  {/* Industries main button */}
                  <button
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className={`${staticLinkClass} flex items-center justify-center gap-1 w-full`}
                  >
                    {link.name}
                    <MdKeyboardArrowDown
                      className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Industries dropdown links */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isDropdownOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="bg-gray-50 border-t border-gray-200 w-full   rounded-md shadow-sm">
                      <IndustriesDropdown isMobile />
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={linkClass}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              )
            )}

            {/* Mobile CTA */}
            <div className="flex flex-col gap-4 px-8 w-full pt-6">
              <Link to="/contact">
                <button
                  className="w-full btn-first py-3 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div >
    </nav >
  );
};

export default Navbar;
