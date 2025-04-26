import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import api from "../API/api";
import toast from "react-hot-toast";

const QRify = () => {
  const [loader, setLoader] = useState(false);
  const [longUrl, setLongUrl] = useState("");

  function handleQR(){
    return "placeholder";
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center sm:mt-3">
      <div className="sm:w-[450px] w-[360px]  shadow-custom sm:py-4 py-8 sm:px-8 px-4 rounded-md border-black border">
        <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
          QR Code Generator
        </h1>
        <div className="relative w-full max-w-md mt-6">
          <input
            type="text"
            onChange={()=>setLongUrl(event.target.value)}
            placeholder="Please Enter a Long URL"
            className="w-full border-2 border-gray-300 rounded-md bg-white px-4 py-3 text-md text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:placeholder-transparent"
          />
        </div>
        <hr className="mt-2 mb-5 text-black border-black border" />
        <div className="flex flex-col gap-3"></div>
        <button
          disabled={loader}
          onClick={handleQR}
          type="submit"
          className="bg-customRed font-semibold text-white  bg-overall-theme-gradient w-full py-2 hover:bg-overall-theme-gradient-hover transition-colors duration-100 rounded-md my-3"
        >
          {loader ? "Loading..." : "Generate QR"}
        </button>
      </div>
    </div>
  );
};

export default QRify;
