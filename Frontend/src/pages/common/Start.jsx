import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('/Logos/traffic.jpg')] h-screen flex w-full bg-red-400 justify-between flex-col pt-8 ">
        <img className="w-40 ml-1" src="/Logos/Uber_logo.png" alt="" />
        <div className="bg-white p-4 pb-7">
          <h2 className="text-[30px] font-bold">Get Started With Uber</h2>
          <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">Continue</Link>
        </div>
        
      </div>
     
    </div>
  );
};

export default Start;
