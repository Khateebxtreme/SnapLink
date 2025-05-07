import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import QRCode from 'qrcode'

const QRify = () => {
  const [loader, setLoader] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("https://placehold.co/600x400?text=QR+Code+will+appear+here");

  const generateQrCode = async ()=>{
    await QRCode.toDataURL(longUrl,{
      width:100,
      size: 128,
      margin:2,
      color:{
        dark : "#ffffff",
        light : "#000000"
      }
    }, (error, longUrl) =>{
      if(error){
        return console.error(error);
      }
      setImageUrl(longUrl);
    })
  }

  function handleQR(){
    try{
      //General URL validation
      const pattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
      if(!pattern.test(longUrl)){
        toast.error("Failed to generate QR code : Please Enter a valid URL");
        setImageUrl("https://placehold.co/600x400?text=QR+Code+will+appear+here")
        return;
      }
      generateQrCode(longUrl);
      toast.success("QR Code generated")
    }
    catch(error){
      toast.error("Failed to generate QR code")
    }
    finally{
      console.log("Process completed")
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center sm:mt-4">
      <div className="sm:w-[500px] w-[360px] pt-5 pb-4 sm:px-8 px-4 rounded-lg">
        <h1 className="text-center font-serif text-btnColor font-semibold lg:text-3xl text-2xl">
          QR Code Generator
        </h1>
        <div className="relative w-full mt-3">
          <input
            type="text"
            onChange={()=>setLongUrl(event.target.value)}
            placeholder="Please Enter a Long URL"
            className="w-full border-2 border-gray-300 rounded-md bg-white px-3 py-1 text-md text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:placeholder-transparent"
          />
        </div>
        <hr className="mt-2 mb-3 border" />
        <div className="flex items-center justify-center">
          <img src={imageUrl} width="300" height="270" className="w-5/6 h-full"/>
        </div>
        <button
          disabled={loader}
          onClick={handleQR}
          className="bg-customRed font-semibold text-white  bg-overall-theme-gradient w-full py-2 hover:bg-overall-theme-gradient-hover transition-colors duration-100 rounded-md mt-4"
        >
          {loader ? "Loading..." : "Generate QR"}
        </button>
      </div>
    </div>
  );
};

export default QRify;
