import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import { useStoreContext } from '../contextAPI/ContextAPI';

const LandingPage = () => {
  let desc =
  "Create concise, easy-to-remember links with SnapLink’s user-friendly platform. Effortlessly share URLs on any platform and fine-tune your sharing strategy. Track link performance and manage your URLs effortlessly to boost your online visibility. With SnapLink, generating short, memorable links is quick and simple."

  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = ()=>{
    //if the user is signed in, it will lead to dashboard page where the mentioned functionalities are available otherwise it will lead to register page.
    if(localStorage.getItem("JWT_TOKEN")){
      navigate("/dashboard")
    }
    else{
      navigate("/register")
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
        <h1 className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full">SnapLink: Easy URL Shortening, Sharing, and Tracking!</h1>
        <p className="text-slate-700 text-sm my-5">
        SnapLink simplifies URL shortening, making link sharing quick and easy. Its intuitive interface lets you create short, shareable URLs in just a few seconds. Enhance your sharing experience with SnapLink now.
        </p>
        <div className="flex items-center gap-3">
            <button
              className="border-btnColor border w-40 text-btnColor rounded-md  py-2"
              onClick={dashBoardNavigateHandler}
            >
              Create A Short Link
            </button>
            <button
              className="bg-custom-gradient-3 hover:bg-button-gradient-hover  w-40 text-white rounded-md  py-2"
              onClick={dashBoardNavigateHandler}
            >
              Manage Your Links
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <img
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/bird.png"
            alt=""
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <p
          className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Chosen by leading professionals and organizations worldwide.
        </p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-3  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          {/* Card components goes here */}
          <Card
            title="Effortless Link Shortening"
            description="Create concise and easy-to-remember URLs in just a few clicks. Our simple interface and fast setup allow you to start shortening links in no time. With minimal effort, you can generate clean and shareable links instantly."
          />
          <Card
            title="Comprehensive Insights"
            description="Gain valuable insights into your link performance with our detailed analytics dashboard. Our dashboard also provides an overview of total URLs created, giving you a complete picture of your link activity."
          />
          <Card
            title="Advanced protection"
            description="Feel secure with our reliable security measures. All shortened URLs are protected with encryption, ensuring your data remains safe and secure."
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage