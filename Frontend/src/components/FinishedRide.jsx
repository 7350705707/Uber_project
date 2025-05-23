import React from 'react'
import { Link } from 'react-router-dom';

const FinishedRide = ({setfinishRidePopupPanelOpen}) => {
  return (
   <div className="h ">
      <div className="flex justify-center items-center">
        <i
          onClick={() => {
           setfinishRidePopupPanelOpen(false);
          }}
          className="text-2xl active:text-3xl font-bold ri-arrow-down-wide-line pr-5"
        ></i>
      </div>

      <div className="flex justify-between flex-col items-center p-3">
        <img src="/HomePage/uber_car_image.png" alt="" className="h-30" />
        <div className="w-full">
          <div className="border-b border-gray-300 flex items-center gap-4 px-4 py-2">
            <div className="">
              <i className="ri-map-pin-line text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Vehicle Details</h4>
              <p className="text-gray-700 text-sm">Car Model: Tesla Model 3</p>
              <p className="text-gray-700 text-sm">License Plate: ABC1234</p>
            </div>
          </div>
          <div className="border-b border-gray-300 flex items-center gap-4 px-4 py-2">
             <div className="">
              <i className="ri-square-fill text-xl"></i>
            </div>
            <div>
           <h4 className="text-xl font-semibold">Address</h4>
            <p className="text-gray-700 text-sm">123 Main St, Springfield, IL</p>
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
        <div className=" m-4 flex flex-col items-center">
          <Link to="/captain/home" className="bg-green-600 text-white px-4 py-2 text-center text-2xl rounded-lg w-full mx-10">
            Finish Ride
          </Link>
          <p className='text-red-500 mt-6 text-sm'>Click on finish ride if you have completed the payment</p>
        </div>
      </div>
    </div>
  )
}

export default FinishedRide