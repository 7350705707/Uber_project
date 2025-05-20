import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to="/home" className="fixed right-2 top-2 h-16 w-16 bg-white flex items-center justify-center rounded-full">
            <i className="ri-home-5-line text-3xl font-bold"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="/HomePage/uber_map_image.png"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex justify-between flex-col items-center p-3">
          <div className="flex justify-around items-center w-full">
            <img src="/HomePage/uber_car_image.png" alt="" className="h-15" />
            <div className="text-right">
              <h2 className="font-bold text-bold">Haresh</h2>
              <h4 className="font-semibold text-xl -mt-1">MH 16 BA 6715</h4>
              <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
            </div>
          </div>

          <div className="w-full">
            <div className="border-b border-gray-300 flex items-center gap-4 px-4 py-2">
              <div className="">
                <i className="ri-map-pin-line text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Vehicle Details</h4>
                <p className="text-gray-700 text-sm">
                  Car Model: Tesla Model 3
                </p>
                <p className="text-gray-700 text-sm">License Plate: ABC1234</p>
              </div>
            </div>
            <div className="border-b border-gray-300 flex items-center gap-4 px-4 py-2">
              <div className="">
                <i className="ri-square-fill text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Address</h4>
                <p className="text-gray-700 text-sm">
                  123 Main St, Springfield, IL
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-2">
              <div className="">
                <i className="ri-currency-fill text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Price</h4>
                <p className="text-gray-700 text-sm">₹ 193.20</p>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-6 w-full bg-green-800 text-2xl text-white font-semibold rounded-lg p-2 mt-3">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
