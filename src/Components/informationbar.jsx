import React from 'react';
import { FaPhone, FaRegClock, FaFacebook, FaInstagram, FaBehance, FaLinkedin,FaYoutube, FaUser } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function InformationBar() {
  return (
    <div className="bg-[#3275DB] text-white text-sm px-10 py-2 flex justify-between items-center">
      <div className="flex justify-center space-x-8 items-center flex-grow">
        <a href="tel:+92545555396" className="flex items-center space-x-2">
          <FaPhone className=' h-5 w-6' />
          <span>+92 3455555396</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <HiLocationMarker className="h-5 w-6" />
          <span>Office #304-B Amna Plaza, Rawalpindi, Pakistan</span>
        </a>
        <div className="flex items-center space-x-2">
          <FaRegClock className="h-5 w-6" />
          <span>Mon - Fri 8.00 - 20.00</span>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <a href="https://facebook.com">
          <FaFacebook className="h-5 w-6" />
        </a>
        <a href="https://instagram.com">
          <FaInstagram className="h-5 w-6" />
        </a>
        <a href="https://behance.net">
          <FaBehance className="h-5 w-6" />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin className="h-5 w-6" />
        </a>
        <a href="https://youtube.com">
          <FaYoutube className="h-5 w-6" />
        </a>
        <button className="flex items-center px-4 py-2  ">
          <FaUser className="h-5 w-5 mr-2" />
          Login
        </button>
        <div className="border-l border-gray-300 h-6 self-center"></div> {/* Vertical line */}
        <button className="flex items-center px-4 py-2  ">
          Register
        </button>
      </div>
    </div>
  );
}

export default InformationBar;
