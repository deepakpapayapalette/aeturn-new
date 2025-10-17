import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import LogoFooter from "../assets/images/home/logo-ft.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-webprimary text-white space-top">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Logo and Description */}
          <div className="space-y-6">
            <div className="max-w-full">
              {LogoFooter && <img src={LogoFooter} alt="Logo" className="max-w-[200px]" />}

            </div>
            <p className="text-white text-base leading-relaxed max-w-md">
              At AETURN, we build tech solutions that create a smarter, safer, and healthier world.
            </p>
          </div>

          {/* Right Section - Contact Info and Social Media */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MdLocationOn className="text-2xl flex-shrink-0 mt-1" />
              <p className="text-white text-base">
                H-Block, Sector-63, Noida, Uttar Pradesh, 201301, India
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <MdPhone className="text-xl" />
                <span className="text-white text-base">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-xl" />
                <span className="text-white text-base">rairavi209@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded flex items-center justify-center transition-all duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
              <a href="#" className="hover:text-gray-200 transition-colors duration-200">
                About Us
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-200">
                Future Vision
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-200">
                Contact Us
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-200">
                Privacy Policy
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-center md:text-right">
              Copyright © {currentYear} • ATRN Solutions LLP ("AETURN")
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
