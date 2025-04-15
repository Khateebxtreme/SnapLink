import { FaLink, FaChartLine } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import React from 'react'

const About = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:pt-8 pt-6">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic  mb-3">
          About SnapLink
        </h1>
        <p className="text-gray-700 text-md  mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full ">
          SnapLink  is a powerful URL shortener app designed for both personal and professional use. It not only shortens links but also provides detailed usage analytics. Built with security in mind, SnapLink ensures that all shortened links are protected, offering features like password protection and expiration dates to control access.
        </p>
        <div className="space-y-5 xl:w-[80%] lg:w-[80%] sm:w-[80%] w-full ">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4 pt-2" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
              Effortless Link Shortening
              </h2>
              <p className="text-gray-600">
              Create concise and easy-to-remember URLs in just a few clicks. Our simple interface and fast setup allow you to start shortening links in no time. With minimal effort, you can generate clean and shareable links instantly.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <TbDeviceDesktopAnalytics className="text-green-500 text-3xl mr-4 pt-1" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
               Comprehensive Insights
              </h2>
              <p className="text-gray-600">
              Gain valuable insights into your link performance with our detailed analytics dashboard. Our dashboard also provides an overview of total URLs created, giving you a complete picture of your link activity.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <MdOutlineSecurity className="text-purple-500 text-2xl mr-4 pt-1" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Advanced protection
              </h2>
              <p className="text-gray-600">
              Feel secure with our reliable security measures. All shortened URLs are protected with encryption, ensuring your data remains safe and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About