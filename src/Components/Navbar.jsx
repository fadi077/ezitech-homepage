import React from 'react';
import { FaHeart, FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="bg-[#7287B6] text-white flex items-center justify-between px-5 py-3">
      <img src="https://ezitech.org/wp-content/uploads/2024/05/output-onlinepngtools-9.png" alt="logo" className='h-20 ml-10' />
     
      <div className="flex items-center justify-center space-x-10 flex-grow">
        <nav className="flex space-x-10">
          <a href="/" className="hover:text-[#00CBFF] active:">HOME</a>
          <a href="/about" className="hover:text-[#00CBFF]">ABOUT US</a>
          <a href="/certifications" className="hover:text-[#00CBFF]">CERTIFICATIONS</a>
          <a href="/internships" className="hover:text-[#00CBFF]">INTERNSHIPS</a>
          <a href="/seminars" className="hover:text-[#00CBFF]">SEMINARS</a>
          <a href="/internship-registration" className="hover:text-[#00CBFF]">INTERNSHIP REGISTRATION</a>
        </nav>
      </div>

      <div className="flex items-center space-x-10 mr-10">
        <div className="border-l border-gray-200 h-6 self-center"></div>
        <FaHeart className="h-6 w-6 cursor-pointer hover:text-[#00CBFF]"/>
        <FaSearch className="h-6 w-6 cursor-pointer hover:bg-opacity-50 hover:bg-gray-100 p-1 rounded-full"/>
      </div>
    </div>
  );
}

export default Navbar;
