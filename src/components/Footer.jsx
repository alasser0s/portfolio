import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from './ContactSection';

const Footer = () => {
  return (
    <footer className=" ">
      <ContactSection/>
      <div className='bg-[#0f172a] text-white py-6 relative mt-96'>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Section: Logo/Brand */}
        <div className="flex items-center gap-2">
          {/* Example Logo Circle */}
          <div className="w-8 h-8 bg-gradient-to-br from-[#00b4d8] to-[#48cae4] rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">A</span>
          </div>
          <span className="text-xl font-semibold">ِAL-asser</span>
        </div>

        {/* Center Section: Links */}
        <div className="flex gap-6 text-sm text-neutral-300">
          <Link to="/support" className="hover:text-white transition-colors">Support</Link>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-sm text-neutral-400">
          2024 Alasser
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
