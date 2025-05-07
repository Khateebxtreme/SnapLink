import React from 'react'
import {FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-overall-theme-gradient text-white py-2 mt-2 z-40 relative">
    <div className="container mx-auto px-2 lg:px-3 flex flex-col lg:flex-row lg:justify-between items-center gap-5">
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-bold mb-2 justify-center">SnapLink</h2>
      </div>
      <div className="flex space-x-5 mt-4 lg:mt-0">
        <a href="#" className="hover:text-cyan-100">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="hover:text-cyan-100">
          <FaXTwitter size={24} />
        </a>
        <a href="#" className="hover:text-cyan-100">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer