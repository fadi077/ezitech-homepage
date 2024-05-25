import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {   FaFacebook,  FaBehance, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-[#042D89] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-3">ABOUT</h3>
          <p>
            Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">POPULAR COURSES</h3>
          <ul className="list-none space-y-2 font-bold">
            <li><span className="text-blue-300">•</span> Online Arbitrage Mastermind 2.0 [Resell Products from Home]</li>
            <li><span className="text-blue-300">•</span> Definition For Digital Marketing</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">PAGES</h3>
          <ul className="list-none space-y-2">
            <li><span className="text-blue-300">•</span> BLOG</li>
            <li><span className="text-blue-300">•</span> EZICODING</li>
            <li><span className="text-blue-300">•</span> INTERNSHIP</li>
            <li><span className="text-blue-300">•</span> OUR SERVICES</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">CONTACT</h3>
          <div className="space-y-4">
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-lg text-blue-500"/> Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
            <p className="flex items-center"><FaPhone className="mr-2 text-lg text-blue-500"/> +92435555396</p>
            <p className="flex items-center"><FaEnvelope className="mr-2 text-lg text-blue-500"/> info@ezitech.org</p>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-10 pt-4">
        <p>Copyright © 2024 Ezitech Institute | Design & Develop by Eziline Software House</p>
      </div>
      <div className="flex space-x-4 justify-end ">
            <a href="https://facebook.com" className="text-lg"><FaFacebook /></a>
            <a href="https://behance.net" className="text-lg"><FaBehance /></a>
            <a href="https://linkedin.com" className="text-lg"><FaLinkedin /></a>
          </div>


    </div>
  );
}

export default Footer;
